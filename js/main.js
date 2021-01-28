'use strict';

const face = document.querySelector ('.js-select');
const buttonChange = document.querySelector ('.js-update');
const faceInWeb = document.querySelector ('.js-face');
const clorbackgroung = document.querySelector ('.js-container');

function colorfondo (){
  const randomNumber = Math.ceil(Math.random() * 100);
  const tipo=(randomNumber%2)?"Impar":"Par";

  if (tipo=== "Par") {
    clorbackgroung.classList.add('background-color-alt');
    
  } else { 
    clorbackgroung.classList.remove('background-color-alt');
    }

}
function cambiacara () {
  const selectValue = face.value;
  console.log(selectValue);
  faceInWeb.innerHTML = selectValue;
}

function handleButtonClick (event) {
 colorfondo();
 cambiacara();
}


buttonChange.addEventListener ('click', handleButtonClick);






// const changeface =
console.log (face);


// function handelButton () {
//   const newSate = document.querySelector ()
// }