"use strict"

window.onload = function() {
   document.querySelector('#addBtn').addEventListener('click', controller.addNote);
   document.querySelector('#outputSection').addEventListener('click', controller.manageTargetClick);
   document.querySelector('#overlayBtn').addEventListener('click', () => {
      document.querySelector('.overlay').style.display = "none";
   })
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
      }
   },

   truncateString: function(str) {
      if (str.length > 90) {
         str = str.slice(0, 90) + "...";
       }
       return str;
   },

   showDetail: function(index) {
      document.querySelector('.overlay__text').innerHTML = controller.notes[index-1];
      document.querySelector('.overlay').style.display = "flex";
   }
};

let controller = {
   notes: [],
   addNote: function() {
      const userNote = document.querySelector('#note').value;

      if (userNote) {
         controller.notes.push(userNote);
         controller.createNoteContainer();
         view.addContentToNoteContainer(outputSection.children);
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
   },

   manageTargetClick: function(e) {
      const child = e.target;
      const parent = child.parentNode;
      const grandParent = parent.parentNode;
      const index = Array.prototype.indexOf.call(grandParent.children, parent);
      if (child.classList.contains('detailBtn')) {
         view.showDetail(index);
      } else if (child.classList.contains('delBtn')) {
         controller.notes.splice(index-1, 1);
         grandParent.innerHTML = `<h2 style="display: none">here comes the table</h2>`;
         for (let i = 0; i < controller.notes.length; i++) {
            controller.createNoteContainer();
            view.addContentToNoteContainer(grandParent.children);
         }
      }
      return false;
   },
}