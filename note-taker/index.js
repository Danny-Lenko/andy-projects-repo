"use strict"

window.onload = function() {
   document.querySelector('#addBtn').addEventListener('click', controller.addNote);
}

let view = {

};

let controller = {
   notes: [],
   addNote: function() {
      const userNote = document.querySelector('#note').value;
      controller.notes.push(userNote);

      controller.createNoteContainer();

   },
   createNoteContainer: function() {
      const outputSection = document.querySelector('#outputSection');
      const noteContainer = document.createElement('div');
      noteContainer.appendChild(document.createElement('h3'));
      noteContainer.appendChild(document.createElement('p'));
      noteContainer.appendChild(document.createElement('button'));
      noteContainer.appendChild(document.createElement('button'));
      outputSection.appendChild(noteContainer);

      console.log(outputSection);
   }
}