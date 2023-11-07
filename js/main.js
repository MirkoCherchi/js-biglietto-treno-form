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
const inputName = document.querySelector('.name');
const inputKm = document.querySelector ('.km');
const inputEta = document.querySelector ('.eta');





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
        bigliettoCompilato.style.display = 'none'
    }
    else{
        bigliettoCompilato.style.display = 'block'
    }
}
)




