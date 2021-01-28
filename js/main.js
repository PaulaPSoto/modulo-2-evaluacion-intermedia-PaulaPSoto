'use strict';
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
 }
 
const randomNumber = getRandomNumber(100);
console.log('El número aleatorio es:' + randomNumber);

const introNumber = document.querySelector('.js-test');
const game = document.querySelector('.js-numbrergame');

function handleButtonClick (event) {
  const selectValue = game.value;
  console.log('El número introducido es: ' + selectValue);
//   faceInWeb.innerHTML = selectValue;
//   colorfondo();
//   cambiacara();
  }


 introNumber.addEventListener('click', handleButtonClick);



// const face = document.querySelector ('.js-select');
// const buttonChange = document.querySelector ('.js-update');
// const faceInWeb = document.querySelector ('.js-face');
// const clorbackgroung = document.querySelector ('.js-container');

// function colorfondo (){
//   const randomNumber = Math.ceil(Math.random() * 100);
//   const tipo=(randomNumber%2)?"Impar":"Par";

//   if (tipo=== "Par") {
//     clorbackgroung.classList.add('background-color-alt');
    
//   } else { 
//     clorbackgroung.classList.remove('background-color-alt');
//     }

// }
// function cambiacara () {
//   const selectValue = face.value;
//   console.log(selectValue);
//   faceInWeb.innerHTML = selectValue;
// }











// function handelButton () {
//   const newSate = document.querySelector ()
// }