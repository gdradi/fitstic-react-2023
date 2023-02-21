import _ from "lodash";

console.log("funzioni");

/**
 * Esercizio: dato un array iniziale contenente dei numeri, 
 * costruire un nuovo array dove ciascun elemento è il doppio dell'elemento dell'array iniziale
 * 
 *     array iniziale:  [4,2,1,7]
 *     array finale:    [8,4,2,14]
 **/


const arrayIniziale: number[] = [4, 2, 1, 7];
console.log("arrayIniziale", arrayIniziale);


// Soluzione fatta in casa con ciclo for
const arrayFinale: number[] = [];
for (let i = 0; i < arrayIniziale.length; i++) {
    // arrayFinale[i] = arrayIniziale[i] * 2;
    arrayFinale.push(arrayIniziale[i] * 2);
}
console.log("arrayFinale", arrayFinale);


// Soluzione con funzione map
// Attenzione: la funzione map non è null safe -> se valoreIniziale è null, crasha
const arrayFinaleConMap             = arrayIniziale.map(valoreIniziale => valoreIniziale * 2);
// Uso lodash perchè è null-safe
const arrayFinaleConMapConLodash    = _.map(arrayIniziale, (valoreIniziale, index) => valoreIniziale * 2);


console.log("arrayFinaleConMap", arrayFinaleConMap);
console.log("arrayFinaleConMapConLodash", arrayFinaleConMapConLodash);


//const arrayFinaleConMap = arrayIniziale.map(valoreIniziale => valoreIniziale % 2 === 0 ? "pari" : "dispari");
// Esempio operatore ternario
// (condizione) ? <caso true> : <caso false>


const arrayFinaleFiltrato = arrayIniziale.filter(valore => valore % 2 === 0);
console.log("arrayFinaleFiltrato", arrayFinaleFiltrato)








export { };