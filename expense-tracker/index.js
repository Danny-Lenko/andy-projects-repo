"use strict"

window.onload = function() {
   document.querySelector('#addBtn').addEventListener('click', controller.addExpense);
}

let view = {
   displayExpense: function() {
      const expenseRowsList = document.getElementsByClassName('output__tr');

      if (expenseRowsList[0].children[3].innerHTML && controller.needNewRow) {
         controller.createNewRow();
      }
      this.wipeOutExpenses(expenseRowsList);
      this.renderExpenses(expenseRowsList);
      this.removeExpense(expenseRowsList);
   },

   renderExpenses: function(list) {
      for (let i = 0; i < controller.expensesData.length; i++) {
         list[i].children[0].innerHTML = controller.expensesData[i].name;
         list[i].children[1].innerHTML = controller.expensesData[i].date;
         list[i].children[2].innerHTML = controller.expensesData[i].amount;
         list[i].children[3].innerHTML = controller.expensesData[i].btn;
      }
   },

   wipeOutExpenses: function(list) {
      for (let i = 0; i < list.length; i++) {
         for (let j = 0; j < list[i].children.length; j++) {
            list[i].children[j].innerHTML = '';
         }
      }
   },

   removeExpense: function(list) {
      for (let i = 0; i < controller.expensesData.length; i++) {
         list[i].children[3].children[0].addEventListener('click', () => {
            controller.needNewRow = false;
            controller.expensesData.splice(i, 1);
            this.displayExpense();
         });
      }
      this.checkRowsNumber(list);
   },

   checkRowsNumber: function(list) {
      for (let i = 0; i < list.length; i++) {
         if (list.length > controller.expensesData.length 
             && list.length > 1) {
            list[0].parentNode.removeChild(list[list.length - 1]);
         }
      }
   }

};

let controller = {
   expensesData: [],
   needNewRow: false,
   addExpense: function() {
      const expenseName = document.querySelector('#name').value;
      const expenseDate = document.querySelector('#date').value;
      const expenseAmount = document.querySelector('#amount').value;

      if (expenseName && expenseDate && expenseAmount) {
         controller.needNewRow = true;
         controller.fetchInputData();
         view.displayExpense();

         document.querySelector('#name').value = '';
         document.querySelector('#amount').value = '';
      }

      console.log(controller.expensesData);
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
         btn: `<button class="delBtn" role='delete'>X</button>` 
      });
   }
};


