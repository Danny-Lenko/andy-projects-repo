"use strict"

const userChoiceArr = [];

document.querySelector('#picturesCollection').addEventListener('click', manageClicks);

function manageClicks(e) {

   console.log(e.target);

   if (checkClickDifferent(e.target) && e.target.classList.contains('pictures__green')) {
      openPicture(e.target.parentNode.children[1], e.target);
   };

   // console.log(e.target.parentNode.children[1].children[0].alt);
}

function openPicture(toOpen, toClose) {
   toClose.style.display = "none";
   toOpen.style.display = "block";

   const timeoutID = window.setTimeout(() => {
      toClose.style.display = "block";
      toOpen.style.display = "none";
   }, 500);
}

// function checkResult(userChoice) {
//    const userChoicesArr = [];

//    userChoicesArr.push(userChoice);
//    if (userChoicesArr[0] === userChoicesArr[1])
// }

function checkClickDifferent(userChoice) {
   const child = userChoice;
   const parent = child.parentNode;
   const grandParent = parent.parentNode;
   const index = Array.prototype.indexOf.call(grandParent.children, parent);

   if (userChoice.classList.contains('pictures__green')) {
      userChoiceArr.push(index);
   }
   console.log(userChoiceArr);
   if (userChoiceArr[0] !== userChoiceArr[1]) {
      return true;
   } else {
      userChoiceArr.splice(1, 1);
      return false;
   }
}
