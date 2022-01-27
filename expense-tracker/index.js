"use strict"

window.onload = function() {
   document.querySelector('#addBtn').addEventListener('click', controller.addExpense);
}

let view = {
   displayExpense: function(name, date, amount) {
      const expenseRowsList = document.getElementsByClassName('output__tr');
      if (expenseRowsList.length < 2) {
         expenseRowsList[0].children[0].innerHTML = name;
         expenseRowsList[0].children[1].innerHTML = date;
         expenseRowsList[0].children[2].innerHTML = amount;
         expenseRowsList[0].children[3].innerHTML = `<button>X</button>`
      }
      // const rowElement = document.querySelector(`#${controller.clicks}`);

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

         console.log(expenseName, expenseDate, expenseAmount);
         document.querySelector('#name').value = '';
         document.querySelector('#amount').value = '';
      }
   }
};

// const expenseRowsList = document.getElementsByClassName('output__tr');
// console.log(expenseRowsList);
// console.log(expenseRowsList[0].children[0].innerHTML);

