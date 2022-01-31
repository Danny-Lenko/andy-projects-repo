"use strict"

document.querySelector('#picturesCollection').addEventListener('click', manageClicks);

function manageClicks(e) {
   openPicture(e.target.parentNode.children[1], e.target);

   console.log(e.target.parentNode.children[1].children[0].alt);
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
