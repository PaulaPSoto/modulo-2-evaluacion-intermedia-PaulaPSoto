"use strict";
const introNumber = document.querySelector(".js-test");
const game = document.querySelector(".js-numbergame");
const writeText = document.querySelector(".js-textgame");

const total = 0;

// Prevent the form from being sent

function handleFormSubmit(event) {
  event.preventDefault();
}
introNumber.addEventListener("click", handleFormSubmit);

// Random number function

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
//RandomNumber max=100
const randomNumber = getRandomNumber(100);
console.log("El número aleatorio es:" + randomNumber);

function gameResult(newText) {
  writeText.innerHTML = newText;
}

function handleButtonClick(event) {
  const selectValue = game.value;
  console.log("El número introducido es: " + selectValue);

  if (game === randomNumber) {
    gameResult("¡Has Ganado!");
  } else if (game !== randomNumber) {
    gameResult("¡Sigue intentándolo!");
  }
}

introNumber.addEventListener("click", handleButtonClick);
