"use strict"

window.onload = function() {
   document.querySelector('#addBtn').addEventListener('click', controller.addExpense);
}

let view = {
   displayExpense: function() {
      const expenseRowsList = document.getElementsByClassName('output__tr');

      if (expenseRowsList[0].children[3].innerHTML) {
         controller.createNewRow();
      }

      for (let i = 0; i < expenseRowsList.length; i++) {
         expenseRowsList[i].children[0].innerHTML = controller.expensesData[i].name;
         expenseRowsList[i].children[1].innerHTML = controller.expensesData[i].date;
         expenseRowsList[i].children[2].innerHTML = controller.expensesData[i].amount;
         expenseRowsList[i].children[3].innerHTML = controller.expensesData[i].btn;
      }
   }
};

let controller = {
   expensesData: [],
   addExpense: function() {
      const expenseName = document.querySelector('#name').value;
      const expenseDate = document.querySelector('#date').value;
      const expenseAmount = document.querySelector('#amount').value;

      if (expenseName && expenseDate && expenseAmount) {
         controller.fetchInputData();
         view.displayExpense();

         document.querySelector('#name').value = '';
         document.querySelector('#amount').value = '';
      }
   },
   createNewRow: function() {
      const tBody = document.querySelector('#tBody');
      const expenseRow = document.querySelector('.output__tr');

      tBody.appendChild(expenseRow.cloneNode(true));
   },
   fetchInputData: function() {
      this.expensesData.push({ 
         name: document.querySelector('#name').value, 
         date: document.querySelector('#date').value, 
         amount: document.querySelector('#amount').value, 
         btn: `<button>X</button>` 
      });
      console.log(this.expensesData[0].name);
   }
};

const expenseRowsList = document.getElementsByClassName('output__tr');
console.log(expenseRowsList);
// console.log(expenseRowsList[0].children[0].innerHTML);

// controller.createNewRow();
