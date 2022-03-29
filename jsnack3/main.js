// dato l'aaray di nomi e dati due numeri min e max (min più piccolo di max).
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

const min = parseInt(prompt("Inserisci un numero compreso tra 0 e 4"));
const max = parseInt(prompt("Inserisci un numero compreso tra 0 e 5 (maggiore di quello inserito precedentemente"));
let newArray = [];

myArray.forEach(
  (element, i) => {
    if(min <= i && max >= i){
      newArray.push(element);
    }
  }
)

console.log(newArray);

let boh = myArray.filter(
  (element, i) => {
    if(min <= i && max >= i){
      return true;
    }
  }
)

console.log(boh);