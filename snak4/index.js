// l software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.


'use strict'


//for
let sum = 0;

let caunt = 0;



for(caunt= 0; caunt< 5; caunt++ ){
    const input = Number(prompt(`inserisci un numero (${caunt})`));
    sum += input;
   

    console.log(input);

    if(isNaN(input)){
        sum += input;
        
    }
}
alert(sum);


//while

//let sum = 0;

//let caunt = 1;

// while( caunt <= 5){

//     const input = Number(prompt(`inserisci un numero (${caunt})`));
//     sum += input;
//     caunt++;

//     console.log(input);

//     if(isNaN(input)){
//         sum += input;
//         caunt++
//     }
// }

// alert(sum);