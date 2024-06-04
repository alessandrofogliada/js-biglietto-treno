// specifichiamo il costo al chilometro
const costoTrasporto = (0.21);
const scontoBimbo = (20)
const scontoAnziano = (40)
// chiedere all’utente il numero di chilometri che vuole percorrere
let kmDaPercorrere = parseInt( prompt("Quanti chilometri vuoi percorrere ?"));

// chiedere l’età del passeggero

let etaPasseggero = prompt(" Quanti anni hai )");

console.log("chilometri che deve percorrere il passeggero" , kmDaPercorrere);
console.log("età del passeggero" , etaPasseggero)

// calcolare il prezzo totale del viaggio, secondo queste regole:il prezzo del biglietto è definito in base ai km (0.21 € al km)

let risultato = kmDaPercorrere * costoTrasporto;

console.log("Il costo è di:" , risultato , "€");

// va applicato uno sconto del 20% per i minorenni

if (etaPasseggero <= 17) {
    let prezzoBimbo = risultato / scontoBimbo;
    console.log("costo biglietto bimbo" , prezzoBimbo)
} else if (etaPasseggero >= 65 ){
    let prezzoAnziano = risultato / scontoAnziano;
    console.log("costo biglietto anziano" , prezzoAnziano)
}

// va applicato uno sconto del 40% per gli over 65.

// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).