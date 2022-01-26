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
         if (controller.doneElements.some(element => tasks[i] === element)) {
            ulList.innerHTML += `<li>
               <span class="doneTasks">${i + 1}. ${tasks[i]}</span>
               <button class="removeBtn" id="${i}">X</button><button class="doneBtn" id="${i}">Done</button>
            </li>`;   
         } else {
            ulList.innerHTML += `<li>
               <span>${i + 1}. ${tasks[i]}</span>
               <button class="removeBtn" id="${i}">X</button><button class="doneBtn" id="${i}">Done</button>
            </li>`;
         }
      }
   },
   crossOut: function(element) {
      let parentElement = element.parentNode;
      let allTheContent = parentElement.children;
      allTheContent[0].classList.add('doneTasks');
   }
};

let controller = {
   tasks: ['hello', 'world'],
   doneElements: [],
   submitInput: function() {
      let userInput = document.querySelector('#inputField').value;
      if (userInput) {
         controller.tasks.push(userInput);
         document.querySelector('#inputField').value = '';
      }
      view.renderInput(controller.tasks);
   },
   clearList: function() {
      controller.tasks = [];
      view.renderInput(controller.tasks);
      controller.doneElements = [];
   },
};

let ulEl = document.querySelector('.output__ul');

function removeItem(e) {
   if (e.target.classList.contains('removeBtn')) {
      controller.tasks.splice(e.target.id, 1);
      view.renderInput(controller.tasks);
   } else if (e.target.classList.contains('doneBtn')) {
      view.crossOut(e.target);
      controller.doneElements.push(controller.tasks[e.target.id]);
   } 
}
ulEl.addEventListener('click', removeItem);




