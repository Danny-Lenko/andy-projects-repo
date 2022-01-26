"use strict"

window.onload = function() {
   document.querySelector('#submitBtn').addEventListener('click', controller.submitInput);
   document.querySelector('#clearBtn').addEventListener('click', controller.clearList);
}

let view = {
   renderInput: function(tasks) {
      let ulList = document.querySelector('.output__ul');
      ulList.innerHTML = '';
      for (let i = 0; i < tasks.length; i++) {
         ulList.innerHTML += `<li>
            ${i + 1}. ${tasks[i]}
            <button class="removeBtn" id="${i}">X</button><button class="doneBtn">Done</button>
         </li>`;
      }
      console.log(tasks);
   }
};

let controller = {
   tasks: ['hello', 'world'],
   submitInput: function() {
      let userInput = document.querySelector('#inputField').value;
      if (userInput) {
         controller.tasks.push(userInput);
         document.querySelector('#inputField').value = '';
      }
      view.renderInput(controller.tasks);
      console.log(removeButtons);
      console.log(ulEl);

   },
   clearList: function() {
      console.log('here I am');
      controller.tasks = [];
      view.renderInput(controller.tasks);
   },
   // removeItem: function() {

   // }
};

let removeButtons = document.getElementsByClassName('removeBtn');
let ulEl = document.querySelector('.output__ul');
console.log(ulEl);

function removeItem(e) {
   if (e.target.classList.contains('removeBtn')) {
      console.log('true');
      controller.tasks.splice(e.target.id, 1);
      view.renderInput(controller.tasks);
   } else if (e.target.classList.contains('doneBtn')) {
      console.log('else true');
   } else {
      console.log('false');
   }
   // e.target.style.visibility = "hidden";
   console.log(e.target);
}
ulEl.addEventListener('click', removeItem);


