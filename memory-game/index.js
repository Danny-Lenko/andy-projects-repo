"use strict"

let userChoiceIndexArr = [];
let userChoiceNamesArr = [];
let score = 0;
let failed = 0;

document.querySelector('#picturesCollection').addEventListener('click', manageClicks);

function manageClicks(e) {

   // console.log(e.target.parentNode.children[1].children[0].alt);

   if (checkClickDifferent(e.target) && e.target.classList.contains('pictures__green')) {
      openPicture(e.target.parentNode.children[1], e.target);

      checkAndShowResult(e.target);
   };

}

function openPicture(toOpen, toClose) {
   toClose.style.display = "none";
   toOpen.style.display = "block";

   const timeoutID = window.setTimeout(() => {
      toClose.style.display = "block";
      toOpen.style.display = "none";
   }, 500);
}

function checkAndShowResult(userChoice) {
   userChoiceNamesArr.push(userChoice.parentNode.children[1].children[0].alt);

   console.log(userChoiceNamesArr);

   if (userChoiceNamesArr[1]) {
      if (userChoiceNamesArr[0] === userChoiceNamesArr[1]) {
         score++;
         document.querySelector('.info__score').innerHTML = `Score: ${score}`;
      } else {
         failed++;
         document.querySelector('.info__failed').innerHTML = `Failed attempts: ${failed}`;   
      }
      userChoiceIndexArr = [];
      userChoiceNamesArr = [];
   }

}

function checkClickDifferent(userChoice) {
   const child = userChoice;
   const parent = child.parentNode;
   const grandParent = parent.parentNode;
   const index = Array.prototype.indexOf.call(grandParent.children, parent);

   if (userChoice.classList.contains('pictures__green')) {
      userChoiceIndexArr.push(index);
   }

   if (userChoiceIndexArr[0] !== userChoiceIndexArr[1]) {
      return true;
   } else {
      userChoiceIndexArr.splice(1, 1);
      return false;
   }
}
