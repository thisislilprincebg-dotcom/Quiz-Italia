// Carica domande da localStorage oppure da questions.js
function loadQuestions() {
  const saved = localStorage.getItem('questions');
  return saved ? JSON.parse(saved) : questions;
}

function saveQuestions(q) {
  localStorage.setItem('questions', JSON.stringify(q));
}

let currentGame = null;

// Event listeners
document.getElementById('start-game').addEventListener('click', startGame);
document.getElementById('continue-game').addEventListener('click', continueGame);
document.getElementById('add-questions').addEventListener('click', addQuestions);
document.getElementById('edit-questions').addEventListener('click', editQuestions);

function startGame() {
  const q = loadQuestions();
  // estrai 10 domande random
  const selected = q.sort(() => 0.5 - Math.random()).slice(0, 10);
  currentGame = { index: 0, score: 0, questions: selected };
  localStorage.setItem('currentGame', JSON.stringify(currentGame));
  showQuestion();
}

function continueGame() {
  const saved = localStorage.getItem('currentGame');
  if (!saved) {
    alert("Nessuna partita salvata!");
    return;
  }
  currentGame = JSON.parse(saved);
  showQuestion();
}

function showQuestion() {
  document.getElementById('main-menu').style.display = 'none';
  document.getElementById('question-form').style.display = 'none';
  document.getElementById('edit-area').style.display = 'none';
  document.getElementById('game-area').style.display = 'block';

  const q = currentGame.questions[currentGame.index];
  if (!q) {
    alert(`Partita finita! Punteggio: ${currentGame.score}/${currentGame.questions.length}`);
    localStorage.removeItem('currentGame');
    location.reload();
    return;
  }

  let html = `<h2>${q.text}</h2>`;
  q.options.forEach(opt => {
    html += `<button onclick="answer('${opt}')">${opt}</button><br>`;
  });
  document.getElementById('game-area').innerHTML = html;
}

function answer(opt) {
  const q = currentGame.questions[currentGame.index];
  if (opt === q.answer) currentGame.score++;
  currentGame.index++;
  localStorage.setItem('currentGame', JSON.stringify(currentGame));
  showQuestion();
}

// ----------------------------
// Aggiunta di nuove domande
// ----------------------------
function addQuestions() {
  document.getElementById('main-menu').style.display = 'none';
  document.getElementById('game-area').style.display = 'none';
  document.getElementById('edit-area').style.display = 'none';
  document.getElementById('question-form').style.display = 'block';

  document.getElementById('question-form').innerHTML = `
    <h2>Aggiungi Domanda</h2>
    <input id="newQ" placeholder="Testo della domanda"><br>
    <input id="opt1" placeholder="Opzione 1"><br>
    <input id="opt2" placeholder="Opzione 2"><br>
    <input id="opt3" placeholder="Opzione 3"><br>
    <input id="ans" placeholder="Risposta corretta"><br>
    <button onclick="saveNewQuestion()">Salva</button>
    <button onclick="location.reload()">Indietro</button>
  `;
}

function saveNewQuestion() {
  const q = loadQuestions();
  const newQ = {
    id: Date.now(),
    text: document.getElementById('newQ').value,
    options: [
      document.getElementById('opt1').value,
      document.getElementById('opt2').value,
      document.getElementById('opt3').value
    ],
    answer: document.getElementById('ans').value
  };
  q.push(newQ);
  saveQuestions(q);
  alert("Domanda aggiunta!");
  location.reload();
}

// ----------------------------
// Modifica delle domande
// ----------------------------
function editQuestions() {
  document.getElementById('main-menu').style.display = 'none';
  document.getElementById('game-area').style.display = 'none';
  document.getElementById('question-form').style.display = 'none';
  document.getElementById('edit-area').style.display = 'block';

  const q = loadQuestions();
  let html = "<h2>Modifica Domande</h2>";
  q.forEach((question, i) => {
    html += `
      <div>
        <b>${i+1}. ${question.text}</b>
        <button onclick="editSingle(${question.id})">Modifica</button>
      </div>
    `;
  });
  html += `<button onclick="location.reload()">Indietro</button>`;
  document.getElementById('edit-area').innerHTML = html;
}

function editSingle(id) {
  const q = loadQuestions();
  const question = q.find(el => el.id === id);
  if (!question) return;

  document.getElementById('edit-area').innerHTML = `
    <h2>Modifica Domanda</h2>
    <input id="editQ" value="${question.text}"><br>
    <input id="edit1" value="${question.options[0]}"><br>
    <input id="edit2" value="${question.options[1]}"><br>
    <input id="edit3" value="${question.options[2]}"><br>
    <input id="editAns" value="${question.answer}"><br>
    <button onclick="saveEditedQuestion(${id})">Salva</button>
    <button onclick="editQuestions()">Indietro</button>
  `;
}

function saveEditedQuestion(id) {
  const q = loadQuestions();
  const idx = q.findIndex(el => el.id === id);
  if (idx === -1) return;

  q[idx].text = document.getElementById('editQ').value;
  q[idx].options = [
    document.getElementById('edit1').value,
    document.getElementById('edit2').value,
    document.getElementById('edit3').value
  ];
  q[idx].answer = document.getElementById('editAns').value;

  saveQuestions(q);
  alert("Domanda aggiornata!");
  editQuestions();
}
