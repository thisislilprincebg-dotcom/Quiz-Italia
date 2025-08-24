
function mostraModificaDomande() {
    const container = document.getElementById("modificaDomandeContainer");
    container.innerHTML = "";
    questions.forEach((q, index) => {
        const div = document.createElement("div");
        div.classList.add("modifica-domanda");
        div.innerHTML = `
            <strong>${index + 1}. [${q.categoria}]</strong>
            <input type="text" value="${q.domanda}" id="domanda-${index}" />
            <input type="text" value="${q.rispostaCorretta}" id="risposta-${index}" />
        `;
        container.appendChild(div);
    });
    const salvaBtn = document.createElement("button");
    salvaBtn.textContent = "Salva modifiche";
    salvaBtn.onclick = salvaModificheDomande;
    container.appendChild(salvaBtn);
}

function salvaModificheDomande() {
    questions.forEach((q, index) => {
        const nuovaDomanda = document.getElementById(`domanda-${index}`).value;
        const nuovaRisposta = document.getElementById(`risposta-${index}`).value;
        q.domanda = nuovaDomanda;
        q.rispostaCorretta = nuovaRisposta;
    });
    localStorage.setItem("questions", JSON.stringify(questions));
    alert("Modifiche salvate con successo!");
}

function salvaPartita(statoPartita) {
    localStorage.setItem("partitaSalvata", JSON.stringify(statoPartita));
}

function caricaPartita() {
    const partita = localStorage.getItem("partitaSalvata");
    return partita ? JSON.parse(partita) : null;
}

function continuaPartita() {
    const partita = caricaPartita();
    if (!partita) {
        alert("Nessuna partita salvata disponibile.");
        return;
    }
    alert("Riprendi la partita dalla categoria: " + partita.categoriaCorrente);
    // Qui puoi richiamare la funzione che carica il quiz dalla categoriaCorrente
}

function generaDomandeRandom(categoria, numeroDomande) {
    let domandeCategoria = questions.filter(q => q.categoria === categoria);
    domandeCategoria = domandeCategoria.filter(q => !q.usata);
    domandeCategoria.sort(() => Math.random() - 0.5);
    const selezionate = domandeCategoria.slice(0, numeroDomande);
    selezionate.forEach(q => q.usata = true);
    return selezionate;
}
