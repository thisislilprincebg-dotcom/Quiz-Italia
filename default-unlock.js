// default-unlock.js
// Sblocca una categoria di partenza ("cultura") senza toccare il resto del codice.
// Caricalo DOPO i tuoi script principali oppure inseriscilo in cima all'init.

(function(){
  const CAT_KEY = "cultura"; // cambia qui se vuoi sbloccarne un'altra

  // Caso 1: giochi che usano localStorage 'unlockedCategories' (array di stringhe)
  try {
    let arr = JSON.parse(localStorage.getItem("unlockedCategories") || "[]");
    if (!Array.isArray(arr)) arr = [];
    if (!arr.includes(CAT_KEY)) {
      arr.push(CAT_KEY);
      localStorage.setItem("unlockedCategories", JSON.stringify(arr));
    }
  } catch (e) { /* ignore */ }

  // Caso 2: giochi che usano un unico stato 'qi_state' (oggetto con 'unlocked')
  try {
    let st = JSON.parse(localStorage.getItem("qi_state") || "{}");
    if (typeof st !== "object" || st === null) st = {};
    if (!st.unlocked || typeof st.unlocked !== "object") st.unlocked = {};
    if (!st.unlocked[CAT_KEY]) {
      st.unlocked[CAT_KEY] = true;
      localStorage.setItem("qi_state", JSON.stringify(st));
    }
  } catch (e) { /* ignore */ }

  // Aggiorna eventuali HUD/lista categorie se presenti
  try {
    if (typeof updateHud === "function") updateHud();
    if (typeof renderCategoryList === "function") renderCategoryList();
  } catch (e) { /* ignore */ }
})();
