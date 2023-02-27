'use strict'

let sum = 0;

for(let i = 0; i < 5; i++) {
    const input = Number(prompt('inserisci un numero'));
    if(isNaN(input)){
        console.log(input);
        sum+=input
    }
    // sum += input;
}

console.log(sum);