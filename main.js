// =========================
// Config e stato
// =========================
const CATEGORIES = [
  { key: 'sport', name: 'Sport', cost: 100 },
  { key: 'calcio', name: 'Calcio', cost: 100 },
  { key: 'cultura', name: 'Cultura Generale', cost: 100 },
  { key: 'gossip', name: 'Gossip', cost: 100 },
  { key: 'moda', name: 'Moda', cost: 100 },
  { key: 'politica', name: 'Politica', cost: 200 },
  { key: 'cucina', name: 'Cucina', cost: 100 },
  { key: 'geografia_it', name: 'Geografia Nazionale', cost: 100 },
  { key: 'geografia_world', name: 'Geografia Internazionale', cost: 200 },
];

const QUESTIONS_PER_GAME = 20; // richiesto: 20 domande per partita
const TIME_PER_QUESTION = 20; // secondi
const TOKENS_PER_CORRECT = 100;
const COST_5050 = 50;
const COST_REVEAL = 100;

let state = {
  tokens: 0,
  unlocked: {},   // {categoryKey: true}
  askedGlobal: {}, // {categoryKey: [ids]}
  currentGame: null, // {category, questionIds, index, score, tokensEarned, remainingTime, used5050, usedReveal}
};

// =========================
// Storage helpers
// =========================
function loadState() {
  const raw = localStorage.getItem('qi_state');
  if (raw) {
    try { state = JSON.parse(raw); } catch (e) {}
  }
  if (!state.unlocked || typeof state.unlocked !== 'object') state.unlocked = {};
  if (!state.askedGlobal || typeof state.askedGlobal !== 'object') state.askedGlobal = {};
  // Sblocca una categoria di default: "cultura"
  if (!state.unlocked['cultura']) state.unlocked['cultura'] = true;
  if (typeof state.tokens !== 'number') state.tokens = 0;
  if (state.currentGame && typeof state.currentGame.remainingTime !== 'number') {
    state.currentGame.remainingTime = TIME_PER_QUESTION;
  }
  saveState();
}
function saveState() {
  localStorage.setItem('qi_state', JSON.stringify(state));
}
function clearCurrentGame() {
  state.currentGame = null;
  saveState();
}

// =========================
// UI refs
// =========================
const elMenu = document.getElementById('main-menu');
const elCategoryCard = document.getElementById('category-select');
const elCategoryList = document.getElementById('category-list');
const elCloseCategory = document.getElementById('close-category');
const elGame = document.getElementById('game-area');
const elQText = document.getElementById('question-text');
const elOptions = document.getElementById('options');
const elNext = document.getElementById('next-question');
const elSaveExit = document.getElementById('save-exit');
const el5050 = document.getElementById('help5050');
const elReveal = document.getElementById('helpReveal');
const elTokens = document.getElementById('tokens');
const elTimer = document.getElementById('timer');
const elProgress = document.getElementById('progress');

const elAddForm = document.getElementById('question-form');
const elEditArea = document.getElementById('edit-area');

// Buttons
document.getElementById('start-game').addEventListener('click', openCategorySelect);
document.getElementById('continue-game').addEventListener('click', continueGame);
document.getElementById('add-questions').addEventListener('click', showAddForm);
document.getElementById('edit-questions').addEventListener('click', showEditArea);
document.getElementById('back-menu').addEventListener('click', () => showOnly('menu'));
elCloseCategory.addEventListener('click', () => { elCategoryCard.style.display = 'none'; });

document.getElementById('btn-back-home1')?.addEventListener('click', backHome);
document.getElementById('btn-back-home2')?.addEventListener('click', backHome);

document.getElementById('btn-save-new')?.addEventListener('click', saveNewQuestion);
document.getElementById('refreshList')?.addEventListener('click', renderEditList);

// Lifelines
el5050.addEventListener('click', lifeline5050);
elReveal.addEventListener('click', lifelineReveal);
elNext.addEventListener('click', nextQuestion);
elSaveExit.addEventListener('click', saveAndExit);

// Edit filters
const filterCat = document.getElementById('filterCat');
const newCat = document.getElementById('newCat');

// =========================
// Init
// =========================
loadState();
updateHud();
setupCategorySelectors();

// =========================
// Category selection & unlock
// =========================
function openCategorySelect() {
  renderCategoryList();
  showOnly('menu');
  elCategoryCard.style.display = 'block';
}
function renderCategoryList() {
  elCategoryList.innerHTML = '';
  CATEGORIES.forEach(cat => {
    const locked = !state.unlocked[cat.key];
    const div = document.createElement('div');
    div.className = `category ${locked ? 'locked' : ''}`;
    div.innerHTML = `
      <div class="title">${cat.name}</div>
      <div class="badge">${locked ? 'Bloccata' : 'Sbloccata'}</div>
      <div> Costo sblocco: ${cat.cost} gettoni</div>
      <div class="controls">
        ${locked
          ? `<button data-key="${cat.key}" class="unlock">Sblocca</button>`
          : `<button data-key="${cat.key}" class="play">Gioca</button>`
        }
      </div>
    `;
    elCategoryList.appendChild(div);
  });

  elCategoryList.querySelectorAll('button.unlock').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const key = e.target.getAttribute('data-key');
      unlockCategory(key);
    });
  });
  elCategoryList.querySelectorAll('button.play').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const key = e.target.getAttribute('data-key');
      startGame(key);
    });
  });
}

function unlockCategory(key) {
  const cat = CATEGORIES.find(c => c.key === key);
  if (!cat) return;
  if (state.unlocked[key]) return;
  if (state.tokens < cat.cost) {
    alert(`Servono ${cat.cost} gettoni per sbloccare ${cat.name}.`);
    return;
  }
  state.tokens -= cat.cost;
  state.unlocked[key] = true;
  saveState();
  updateHud();
  renderCategoryList();
  alert(`${cat.name} sbloccata!`);
}

// =========================
// Game flow
// =========================
let countdown = null;

function startGame(categoryKey) {
  const all = loadQuestions();
  const seen = new Set((state.askedGlobal[categoryKey] || []));
  const pool = all.filter(q => q.category === categoryKey && !seen.has(q.id));

  if (pool.length < QUESTIONS_PER_GAME) {
    // reset per categoria (su richiesta)
    if (!confirm(`Hai già visto molte domande di ${categoryKey}. Vuoi resettare lo storico per questa categoria?`)) {
      return;
    } else {
      state.askedGlobal[categoryKey] = [];
    }
  }
  const pool2 = all.filter(q => q.category === categoryKey && !(state.askedGlobal[categoryKey] || []).includes(q.id));
  const shuffled = shuffle(pool2).slice(0, QUESTIONS_PER_GAME);
  const questionIds = shuffled.map(q => q.id);

  state.currentGame = {
    category: categoryKey,
    questionIds,
    index: 0,
    score: 0,
    tokensEarned: 0,
    remainingTime: TIME_PER_QUESTION,
    used5050: {}, // per domanda
    usedReveal: {},
  };
  saveState();
  showOnly('game');
  renderCurrentQuestion();
  startTimer();
}

function continueGame() {
  if (!state.currentGame) {
    alert('Nessuna partita salvata.');
    return;
  }
  showOnly('game');
  renderCurrentQuestion();
  startTimer();
}

function showOnly(which) {
  document.getElementById('category-select').style.display = 'none';

  if (which === 'game') {
    elMenu.style.display = 'none';
    elGame.style.display = 'block';
    elAddForm.style.display = 'none';
    elEditArea.style.display = 'none';
  } else if (which === 'add') {
    elMenu.style.display = 'none';
    elGame.style.display = 'none';
    elAddForm.style.display = 'block';
    elEditArea.style.display = 'none';
  } else if (which === 'edit') {
    elMenu.style.display = 'none';
    elGame.style.display = 'none';
    elAddForm.style.display = 'none';
    elEditArea.style.display = 'block';
  } else {
    // menu
    elMenu.style.display = 'block';
    elGame.style.display = 'none';
    elAddForm.style.display = 'none';
    elEditArea.style.display = 'none';
  }
}

function renderCurrentQuestion() {
  updateHud();
  const q = getCurrentQuestion();
  if (!q) return endGame();

  elQText.textContent = q.text;
  elOptions.innerHTML = '';

  const opts = shuffle([...q.options]);
  opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.addEventListener('click', () => chooseAnswer(btn, q, opt));
    elOptions.appendChild(btn);
  });

  elNext.disabled = true;
  // reset lifelines per domanda
  el5050.disabled = !!state.currentGame.used5050[q.id];
  elReveal.disabled = !!state.currentGame.usedReveal[q.id];
  renderTimer();
}

function chooseAnswer(btn, q, opt) {
  stopTimer();
  const isCorrect = opt === q.answer;
  Array.from(elOptions.children).forEach(b => {
    // segna quella corretta
    if (b.textContent === q.answer) b.classList.add('correct');
  });
  if (isCorrect) {
    btn.classList.add('correct');
    btn.textContent = "✓ " + btn.textContent;
    state.currentGame.score++;
    state.tokens += TOKENS_PER_CORRECT;
    state.currentGame.tokensEarned = (state.currentGame.tokensEarned || 0) + TOKENS_PER_CORRECT;
  } else {
    btn.classList.add('wrong');
    btn.textContent = "✕ " + btn.textContent;
  }
  elNext.disabled = false;
  updateHud();
  saveState();
}

function nextQuestion() {
  const q = getCurrentQuestion();
  if (!q) return;
  // segna come già vista a livello globale (per categoria)
  if (!state.askedGlobal[q.category]) state.askedGlobal[q.category] = [];
  if (!state.askedGlobal[q.category].includes(q.id)) state.askedGlobal[q.category].push(q.id);

  state.currentGame.index++;
  state.currentGame.remainingTime = TIME_PER_QUESTION;
  saveState();
  renderCurrentQuestion();
  startTimer();
}

function endGame() {
  stopTimer();
  const total = state.currentGame ? state.currentGame.questionIds.length : QUESTIONS_PER_GAME;
  alert(`Partita finita!\nPunteggio: ${state.currentGame.score}/${total}\nGettoni guadagnati: ${state.currentGame.tokensEarned || 0}`);
  clearCurrentGame();
  showOnly('menu');
}

function getCurrentQuestion() {
  if (!state.currentGame) return null;
  const all = loadQuestions();
  const id = state.currentGame.questionIds[state.currentGame.index];
  return all.find(x => x.id === id);
}

// =========================
// Timer
// =========================
function startTimer() {
  stopTimer();
  renderTimer();
  countdown = setInterval(() => {
    state.currentGame.remainingTime--;
    if (state.currentGame.remainingTime <= 0) {
      state.currentGame.remainingTime = 0;
      saveState();
      renderTimer();
      timeUp();
    } else {
      saveState();
      renderTimer();
    }
  }, 1000);
}
function stopTimer() {
  if (countdown) clearInterval(countdown);
  countdown = null;
}
function renderTimer() {
  elTimer.textContent = `⏱️ ${state.currentGame ? state.currentGame.remainingTime : TIME_PER_QUESTION}`;
  elProgress.textContent = `${state.currentGame ? Math.min(state.currentGame.index + 1, state.currentGame.questionIds.length) : 0} / ${state.currentGame ? state.currentGame.questionIds.length : QUESTIONS_PER_GAME}`;
}
function timeUp() {
  const q = getCurrentQuestion();
  Array.from(elOptions.children).forEach(b => {
    if (b.textContent.replace(/^✓\s|^✕\s/,'') === q.answer) b.classList.add('correct');
  });
  elNext.disabled = false;
}

// =========================
// Lifelines
// =========================
function lifeline5050() {
  const q = getCurrentQuestion();
  if (!q) return;
  if (state.currentGame.used5050[q.id]) return;
  if (state.tokens < COST_5050) { alert('Gettoni insufficienti.'); return; }
  state.tokens -= COST_5050;
  state.currentGame.used5050[q.id] = true;
  updateHud();
  saveState();

  const wrongButtons = Array.from(elOptions.children).filter(b => b.textContent.replace(/^✓\s|^✕\s/,'') !== q.answer);
  shuffle(wrongButtons).slice(0, 2).forEach(b => { b.disabled = true; b.style.opacity = .6; });
  el5050.disabled = true;
}

function lifelineReveal() {
  const q = getCurrentQuestion();
  if (!q) return;
  if (state.currentGame.usedReveal[q.id]) return;
  if (state.tokens < COST_REVEAL) { alert('Gettoni insufficienti.'); return; }
  state.tokens -= COST_REVEAL;
  state.currentGame.usedReveal[q.id] = true;
  updateHud();
  saveState();

  Array.from(elOptions.children).forEach(b => {
    if (b.textContent.replace(/^✓\s|^✕\s/,'') === q.answer) {
      b.classList.add('correct');
      b.textContent = "✓ " + b.textContent.replace(/^✓\s|^✕\s/,'');
    }
  });
  elReveal.disabled = true;
  elNext.disabled = false;
}

// =========================
// Save & Exit
// =========================
function saveAndExit() {
  stopTimer();
  saveState();
  alert('Partita salvata! Puoi continuare dal menu principale.');
  showOnly('menu');
}
function backHome() {
  showOnly('menu');
}

// =========================
// Add question
// =========================
function showAddForm() {
  showOnly('add');
  newCat.innerHTML = CATEGORIES.map(c => `<option value="${c.key}">${c.name}</option>`).join('');
}
function saveNewQuestion() {
  const all = loadQuestions();
  const newQ = {
    id: Date.now(),
    category: document.getElementById('newCat').value,
    text: document.getElementById('newQ').value.trim(),
    options: [
      document.getElementById('opt1').value.trim(),
      document.getElementById('opt2').value.trim(),
      document.getElementById('opt3').value.trim(),
      document.getElementById('opt4').value.trim(),
    ].filter(Boolean),
    answer: document.getElementById('ans').value.trim()
  };
  if (!newQ.text || newQ.options.length < 2 || !newQ.answer) {
    alert('Compila tutti i campi e inserisci almeno 2 opzioni.');
    return;
  }
  if (!newQ.options.includes(newQ.answer)) {
    alert('La risposta corretta deve coincidere con una delle opzioni.');
    return;
  }
  const merged = all.concat(newQ);
  saveQuestions(merged);
  alert('Domanda aggiunta!');
  showOnly('menu');
}

// =========================
// Edit questions
// =========================
function showEditArea() {
  showOnly('edit');
  filterCat.innerHTML = `<option value="">Tutte</option>` + CATEGORIES.map(c => `<option value="${c.key}">${c.name}</option>`).join('');
  renderEditList();
}
function renderEditList() {
  const all = loadQuestions();
  const cat = filterCat.value;
  const list = cat ? all.filter(q => q.category === cat) : all;
  const wrap = document.getElementById('edit-list');
  wrap.innerHTML = '';
  list.forEach(q => {
    const row = document.createElement('div');
    row.className = 'row';
    row.innerHTML = `<div><b>[${q.category}]</b> ${q.text}</div>
      <div class="controls">
        <button data-id="${q.id}" class="edit">Modifica</button>
        <button data-id="${q.id}" class="del">Elimina</button>
      </div>`;
    wrap.appendChild(row);
  });
  wrap.querySelectorAll('button.edit').forEach(btn => {
    btn.addEventListener('click', () => openEditDialog(btn.getAttribute('data-id')));
  });
  wrap.querySelectorAll('button.del').forEach(btn => {
    btn.addEventListener('click', () => deleteQuestion(btn.getAttribute('data-id')));
  });
}
function openEditDialog(id) {
  id = parseInt(id, 10);
  const all = loadQuestions();
  const q = all.find(x => x.id === id);
  if (!q) return;
  const text = prompt('Testo domanda:', q.text);
  if (text === null) return;
  const opts = prompt('Opzioni (separate da |):', q.options.join('|'));
  if (opts === null) return;
  const ans = prompt('Risposta corretta (deve esistere nelle opzioni):', q.answer);
  if (ans === null) return;
  const cat = prompt('Categoria (key):', q.category);
  if (cat === null) return;

  const options = opts.split('|').map(s => s.trim()).filter(Boolean);
  if (!options.includes(ans.trim())) {
    alert('La risposta corretta deve essere in elenco.');
    return;
  }
  q.text = text.trim();
  q.options = options;
  q.answer = ans.trim();
  q.category = cat.trim();
  saveQuestions(all);
  renderEditList();
}
function deleteQuestion(id) {
  id = parseInt(id, 10);
  if (!confirm('Eliminare la domanda?')) return;
  const all = loadQuestions().filter(q => q.id !== id);
  saveQuestions(all);
  renderEditList();
}

// =========================
// Questions storage (merge with defaults)
// =========================
function loadQuestions() {
  const saved = localStorage.getItem('questions');
  let base = Array.isArray(DEFAULT_QUESTIONS) ? DEFAULT_QUESTIONS : [];
  if (saved) {
    try {
      const userQ = JSON.parse(saved);
      if (Array.isArray(userQ)) {
        const map = new Map(base.map(q => [q.id, q]));
        userQ.forEach(q => map.set(q.id, q));
        base = Array.from(map.values());
      }
    } catch (e) {}
  }
  return base;
}
function saveQuestions(arr) {
  localStorage.setItem('questions', JSON.stringify(arr));
}

// =========================
// Utils
// =========================
function updateHud() {
  elTokens.textContent = `Gettoni: ${state.tokens}`;
  renderTimer();
}
function shuffle(a) {
  return a.sort(() => Math.random() - 0.5);
}
function setupCategorySelectors() {
  if (newCat) newCat.innerHTML = CATEGORIES.map(c => `<option value="${c.key}">${c.name}</option>`).join('');
}
