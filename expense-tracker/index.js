"use strict"

window.onload = function() {
   document.querySelector('#addBtn').addEventListener('click', controller.addExpense);
}

let view = {
   displayExpense: function(name, date, amount) {
      const expenseRowsList = document.getElementsByClassName('output__tr');
      const args = [name, date, amount, `<button>X</button>`];

      if (expenseRowsList[0].children[3].innerHTML === '') {
         for (let j = 0; j < expenseRowsList.length; j++) {
            for (let i = 0; i < expenseRowsList[j].children.length; i++) {
               expenseRowsList[j].children[i].innerHTML = args[i];
            }
         }
      } else {
         console.log('queue is busy');
         controller.createNewRow();
         for (let j = 0; j < expenseRowsList.length; j++) {
            for (let i = 0; i < expenseRowsList[j].children.length; i++) {
               expenseRowsList[j].children[i].innerHTML = args[i];
            }
         }
      }

   }
};

let controller = {
   clicks: 0,
   addExpense: function() {
      const expenseName = document.querySelector('#name').value;
      const expenseDate = document.querySelector('#date').value;
      const expenseAmount = document.querySelector('#amount').value;
      if (expenseName && expenseDate && expenseAmount) {
         controller.clicks++;
         view.displayExpense(expenseName, expenseDate, expenseAmount);

         document.querySelector('#name').value = '';
         document.querySelector('#amount').value = '';
      }
   },
   createNewRow: function() {
      const tBody = document.querySelector('#tBody');
      const expenseRow = document.querySelector('.output__tr');

      tBody.appendChild(expenseRow.cloneNode(true));
   }
};

const expenseRowsList = document.getElementsByClassName('output__tr');
console.log(expenseRowsList);
// console.log(expenseRowsList[0].children[0].innerHTML);

// controller.createNewRow();
