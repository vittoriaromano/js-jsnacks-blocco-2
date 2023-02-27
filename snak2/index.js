'use strict'
// Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo


const number = Number(prompt('inserisci un numero'));

if(number % 2 === 0){
    console.log(number);
}else{
    const numberSum = number + 1;
    console.log(numberSum)
}