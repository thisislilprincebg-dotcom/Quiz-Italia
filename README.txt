
# Default Unlock per Quiz Italia

Questo piccolo script sblocca **una categoria iniziale** (di default `cultura`) senza modificare il resto del gioco.

## Come usarlo
1. Copia `default-unlock.js` nella cartella del progetto (stessa cartella di `index.html`).
2. Apri `index.html` e **includi lo script dopo i JS esistenti**, ad esempio:
   ```html
   <script src="questions.js"></script>
   <script src="main.js"></script>
   <script src="default-unlock.js"></script>
   ```
3. Aggiorna la pagina del gioco. La categoria sarà sbloccata al primo avvio.

## Cambiare la categoria sbloccata
Apri `default-unlock.js` e modifica:
```js
const CAT_KEY = "cultura"; // valori possibili: "sport","calcio","cultura","gossip","moda","politica","cucina","geografia_it","geografia_world"
```

## Come funziona
- Tenta prima con `localStorage.unlockedCategories` (array) se il progetto lo usa.
- In alternativa aggiorna `localStorage.qi_state.unlocked` (oggetto) se presente.
- Aggiorna HUD/lista categorie se nel tuo codice esistono le funzioni `updateHud()` e `renderCategoryList()`.

> Nessun dato viene cancellato. Lo script è **idempotente**: se la categoria è già sbloccata non fa nulla.
