"use strict"

window.onload = function() {
   document.querySelector('#addBtn').addEventListener('click', controller.addExpense);
}

let view = {
   displayExpense: function(name, date, amount) {
      const rowElement = document.querySelector(`#${controller.clicks}`);

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


         console.log(expenseName, expenseDate, expenseAmount);
         document.querySelector('#name').value = '';
         document.querySelector('#amount').value = '';
      }
   }
};

const expenseRowsList = document.getElementsByClassName('output__tr');
console.log(expenseRowsList);
console.log(expenseRowsList[1].children);

