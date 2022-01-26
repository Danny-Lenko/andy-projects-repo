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
            <button class="removeBtn">X</button><button class="doneBtn">Done</button>
         
         </li>`;
      }
      console.log(tasks);
   }
};

let controller = {
   tasks: [],
   submitInput: function() {
      let userInput = document.querySelector('#inputField').value;
      if (userInput) {
         controller.tasks.push(userInput);
         document.querySelector('#inputField').value = '';
      }
      view.renderInput(controller.tasks);
   },
   clearList: function() {
      console.log('here I am');
      controller.tasks = [];
      view.renderInput(controller.tasks);
   }
};