'use strict';
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
 }
 
const randomNumber = getRandomNumber(100);
console.log('El número aleatorio es:' + randomNumber);

const introNumber = document.querySelector('.js-test');
const game = document.querySelector('.js-numbrergame');
const writeText = document.querySelector('.js-textgame');
const total = 0;


function handleButtonClick (event) {
  const selectValue = game.value;
  console.log('El número introducido es: ' + selectValue);

  if (game===randomNumber) {

    writeText.innerHTML='¡Has Ganado!';
   } else { 
    writeText.innerHTML='¡Sigue jugando!'; 
    
   }
}
 introNumber.addEventListener('click', handleButtonClick);











