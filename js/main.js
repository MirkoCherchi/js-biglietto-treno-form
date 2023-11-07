'use strict';

// # Calcolo del prezzo del biglietto del treno

// 1. Chiediamo al passeggero tramite input nome e cognome.
// 2. Chiediamo al passeggero tramite input i km da percorrere.
// 3. Chiediamo al passeggero tramite input la fascia d'età.
// 4. Calcoliamo il prezzo sulla base di 0.21 € al km.
// 5. Creiamo due bottoni, un bottone avrà la funzione di generare il biglietto mentre il secondo bottone dovrà ripulire i campi.
// 6. Se clicchiamo su genera comparirà il biglietto con tutti i dati

// ## Condizioni

// SE il passeggero è minorenne avrà uno sconto del 20% sul biglietto
// ALTRIMENTI SE il passeggero ha 65 o più anni avrà uno sconto del 40%


const bottone = document.querySelector('.btn-open');
const infoBiglietto = document.querySelector('#compra');
const prezzoKm = 0.21;
const scontoMinorenne = 20;
const scontoOver65 = 40;


document.querySelector('.btn-genera').addEventListener('click', function(){ 
const inputName = document.getElementById('inputname').value;
const inputKm = document.getElementById('km').value;
const inputEta = document.getElementById('eta').value;
const prezzo = (parseFloat(inputKm) * 0.21).toFixed(2);
console.log(inputName);
console.log(parseFloat(inputKm));
console.log(inputEta);
console.log(parseFloat(prezzo));
document.getElementById('prezzo-finale').innerHTML = `${prezzo} €`;
document.getElementById('offerta').innerHTML = 'Prezzo Standard'
document.getElementById('passeggero-nome').innerHTML = `${inputName}`;
document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * (20 - 1)) + 1;
document.getElementById('codice').innerHTML = Math.floor(Math.random() * (99999 - 1)) + 1;


if (inputEta === 'Minorenne') {
    const prezzoMinorenne = parseFloat(prezzo - prezzo / 100 * scontoMinorenne).toFixed(2);
    document.getElementById('offerta').innerHTML = 'Prezzo Junior';
    document.getElementById('prezzo-finale').innerHTML = `${prezzoMinorenne} €`;
    console.log(parseFloat(prezzoMinorenne));
}
else if (inputEta === 'Over 65'){
    const prezzoOver65 = (prezzo - prezzo / 100 * scontoOver65).toFixed(2);
    document.getElementById('offerta').innerHTML = 'Prezzo Senior'
    document.getElementById('prezzo-finale').innerHTML = `${prezzoOver65} €`;
    console.log (parseFloat(prezzoOver65));
}

})

document.querySelector('.btn-elimina').addEventListener('click', function(){ 
const inputName = document.getElementById('inputname').value = '';
const inputKm = document.getElementById('km').value = '';
const inputEta = document.getElementById('eta').value = '';

if (infoBiglietto.style.display === 'block') {
        bigliettoCompilato.style.display = 'none'
    }
    else{
        infoBiglietto.style.display = 'block'
    }

})


bottone.addEventListener('click', function(){
    if (infoBiglietto.style.display === 'block') {
        infoBiglietto.style.display = 'none'
        bigliettoCompilato.style.display = 'none'
    }
    else{
        infoBiglietto.style.display = 'block'
    }
}
)

const bottoneGenera = document.querySelector('.btn-genera');
const bigliettoCompilato = document.querySelector('#compila');

bottoneGenera.addEventListener('click', function(){
    if (bigliettoCompilato.style.display === 'block') {
    }
    else{
        bigliettoCompilato.style.display = 'block'
    }
}
)





