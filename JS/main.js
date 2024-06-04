// specifichiamo il costo al chilometro
const costoTrasporto = (0.21);

// chiedere all’utente il numero di chilometri che vuole percorrere
let kmDaPercorrere = parseInt( prompt("Quanti chilometri vuoi percorrere ?"));

// chiedere l’età del passeggero

let etaPasseggero = parseInt(prompt(" Quanti anni hai" ));

console.log("chilometri che deve percorrere il passeggero" , kmDaPercorrere);
console.log("età del passeggero" , etaPasseggero);

// calcolare il prezzo totale del viaggio, secondo queste regole:il prezzo del biglietto è definito in base ai km (0.21 € al km)

let risultato = kmDaPercorrere * costoTrasporto;

console.log("Il costo è di:" , risultato , "€");

// va applicato uno sconto del 20% per i minorenni

const scontoBimbo = ((risultato * 20 ) / 100);

// va applicato uno sconto del 40% per gli over 65.

const scontoAnziano = ((risultato * 40 ) / 100);


if (etaPasseggero <= 17) {
    let prezzoBimbo = (risultato - scontoBimbo).toFixed(2);
    console.log("costo biglietto bimbo" , prezzoBimbo ,"€");
} else if (etaPasseggero >= 65 ){
    let prezzoAnziano = (risultato - scontoAnziano).toFixed(2);
    console.log("costo biglietto anziano" , prezzoAnziano ,"€");
} else{
    console.log("costo biglietto adulto" , (risultato.toFixed(2)) , "€");
}

document.getElementById('mio_id').innerHTML = "Il costo del biglietto è di :" + risultato ;


// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).