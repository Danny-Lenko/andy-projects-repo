"use strict"

document.querySelector('#checkBtn').addEventListener('click', () => {
   alert(`There are ${fetchAndTransformUserInput().length} vowels`);
})

function fetchAndTransformUserInput() {
   const inputText = document.querySelector('#text').value;
   const regEx = /[aeiou]/ig;
   const vowelsMatch = inputText.match(regEx);
   document.querySelector('#text').value = '';
   return vowelsMatch;
}