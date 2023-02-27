'use strict'
// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.


// per generare un numero random

 function getRandomItem(arr) {

   // valore index random 
   const randomIndex = Math.floor(Math.random() * arr.length);

   // random item
    const item = arr[randomIndex];

    return item;
 }
 const array = ['Lucia', 'hello', 'marco'];

 const result = getRandomItem(array);
 console.log(result);


// //cognome

 function getRandomItem2(array2) {

     //valore index random 
     const randomIndex2 = Math.floor(Math.random() * array2.length);

    // random item
    const item2 = array2[randomIndex2];

   return item2;
 }

 const array2 = ['Rossi', 'bye', 'Romano'];

 const result2 = getRandomItem2(array2);
 console.log(result2);



//correzione 

const names = ['Lucia', 'hello', 'marco', ' fabio', 'carla', 'maria'];
const surname = ['Rossi', 'bye', 'Romano', ' de luca', 'tortora','maria'];

const listName = [];

for(let i=0; i < 3; i++){
    const randomNames = Math.floor(Math.random() * names.length);
    const randomSurname = Math.floor(Math.random() * surname.length);

    const randomNameSurname = `${names[randomNames]} ${[randomSurname]}`;
    listName.push(randomNameSurname)

}

console.log(listName)