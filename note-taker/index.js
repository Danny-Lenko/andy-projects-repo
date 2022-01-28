"use strict"

window.onload = function() {
   document.querySelector('#addBtn').addEventListener('click', controller.addNote);
}

let view = {
   addContentToNoteContainer: function(containers) {
      for (let i = 1; i < containers.length; i++) {
         containers[i].children[0].innerHTML = `Note ${i}`;
         containers[i].children[1].innerHTML = this.truncateString(controller.notes[i - 1]);
         containers[i].children[2].innerHTML = 'View Detail';
         containers[i].children[2].classList.add('detailBtn');
         containers[i].children[3].innerHTML = 'X';
         containers[i].children[3].classList.add('delBtn');

         containers[i].children[2].addEventListener('click', () => {
            console.log(controller.notes[i-1]);
         })
      }
   },
   truncateString: function(str) {
      if (str.length > 90) {
         str = str.slice(0, 90) + "...";
       }
       return str;
   },

   

};

let controller = {
   notes: [],
   addNote: function() {
      const userNote = document.querySelector('#note').value;

      if (userNote) {
         controller.notes.push(userNote);
         controller.createNoteContainer();
         document.querySelector('#note').value = "";
      }

   },
   createNoteContainer: function() {
      const outputSection = document.querySelector('#outputSection');
      const noteContainer = document.createElement('div');
      
      noteContainer.appendChild(document.createElement('h3'));
      noteContainer.appendChild(document.createElement('p'));
      noteContainer.appendChild(document.createElement('button'));
      noteContainer.appendChild(document.createElement('button'));
      outputSection.appendChild(noteContainer);

      view.addContentToNoteContainer(outputSection.children);
      console.log(outputSection.children);
   },
}