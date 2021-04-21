"use strict";
const introNumber = document.querySelector(".js-test");
const game = document.querySelector(".js-numbergame");
const writeText = document.querySelector(".js-textgame");
const numberattemps = document.querySelector(".number-test");

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
  const selectValue = parseInt(game.value);
  console.log("El número introducido es: " + selectValue);

  if (selectValue === randomNumber) {
    gameResult("<i class='fas fa-trophy'></i>  ¡Has Ganado!");
    {
      writeText.classList.add("winner");
    }
  } else if (selectValue > randomNumber) {
    gameResult(
      " <i class='fas fa-fist-raised'> ¡El número introducido es más alto!"
    );
    {
    }
  } else if (selectValue < randomNumber) {
    gameResult(
      "<i class='fas fa-fist-raised'>¡El número introducido es más bajo!"
    );
    {
    }
  }
  attempts();
}

//number of attemps
function attempts() {
  let intents = parseInt(numberattemps.innerHTML);
  console.log(numberattemps.innerHTML);
  intents++;
  numberattemps.innerHTML = intents;
}

introNumber.addEventListener("click", handleButtonClick);
