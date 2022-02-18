import '@fortawesome/fontawesome-free/js/all.js';

import('./css/style.css');

/* DOMContentLoaded */
document.addEventListener('DOMContentLoaded', main);

/* main() FUNCTION */

function main() {
  // get alltodos and initialise listeners
  addTodo();
  // dragover on .todos container
  document.querySelector('.todos').addEventListener('dragover', function (e) {
    e.preventDefault();
    if (
      !e.target.classList.contains('dragging') &&
      e.target.classList.contains('card')
    ) {
      const draggingCard = document.querySelector('.dragging');
      const cards = [...this.querySelectorAll('.card')];
      const currPos = cards.indexOf(draggingCard);
      const newPos = cards.indexOf(e.target);
      console.log(currPos, newPos);
      if (currPos > newPos) {
        this.insertBefore(draggingCard, e.target);
      } else {
        this.insertBefore(draggingCard, e.target.nextSibling);
      }
      const todos = JSON.parse(localStorage.getItem('todos'));
      const removed = todos.splice(currPos, 1);
      todos.splice(newPos, 0, removed[0]);
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  });

  // show edit input and edit icon
  document.querySelectorAll('.edit-btn').forEach((edit) => {
    edit.addEventListener('click', function (e) {
      const target = e.target.parentElement.parentElement;
      if (e.target.classList.contains('editInputShow')) {
        console.log('edit', e.target);
        const card = e.target.parentElement;
        const input = card.querySelector('.editInput');
        const icon = card.querySelector('.edit-btn');
        const item = card.querySelector('.item');
        const deleteIcon = card.querySelector('.clear');
        input.classList.toggle('editInputShow');
        icon.classList.toggle('clearShow');
        item.classList.toggle('hide');
        deleteIcon.classList.toggle('clearShow');
      } else {
        console.log('edit none', e.target);
      }
    });
  });

  // add new todos on user input
  const add = document.getElementById('add-btn');
  const txtInput = document.querySelector('.txt-input');
  add.addEventListener('click', function () {
    const item = txtInput.value.trim();
    if (item) {
      txtInput.value = '';
      const todos = !localStorage.getItem('todos')
        ? []
        : JSON.parse(localStorage.getItem('todos'));
      const currentTodo = {
        id: todos.length + 1,
        item,
        completed: false,
      };
      addTodo([currentTodo]);
      todos.push(currentTodo);
      localStorage.setItem('todos', JSON.stringify(todos));
    }
    txtInput.focus();
  });

  // edit todos on user input
  const editDescription = document.querySelector('.edit-btn');
  const editInput = document.querySelector('.editInput');
  editDescription.addEventListener('click', function () {
    const item = editInput.value.trim();
    if (item) {
      editInput.value = '';
      const todos = JSON.parse(localStorage.getItem('todos'));
      const currentTodo = todos.find(
        (todo) => todo.id === parseInt(editInput.dataset.id)
      )
        ? todos.find((todo) => todo.id === parseInt(editInput.dataset.id))
        : {};
      currentTodo.item = item;
      localStorage.setItem('todos', JSON.stringify(todos));
      // renderTodo();
    }
  });

  // add todo also on enter key event
  txtInput.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
      add.click();
    }
  });

  // clear completed
  document
    .getElementById('clear-completed')
    .addEventListener('click', function () {
      let deleteIndexes = [];
      document.querySelectorAll('.card.checked').forEach(function (card) {
        deleteIndexes.push(
          [...document.querySelectorAll('.todos .card')].indexOf(card)
        );
        card.classList.add('fall');
        card.addEventListener('animationend', function (e) {
          setTimeout(function () {
            card.remove();
          }, 100);
        });
      });
      removeManyTodo(deleteIndexes);
    });
}

/* stateTodo() FUNCTION TO UPDATE TODO ABOUT COMPLETION */

function stateTodo(index, completed) {
  const todos = JSON.parse(localStorage.getItem('todos'));
  todos[index].completed = completed;
  localStorage.setItem('todos', JSON.stringify(todos));
}

/* removeManyTodo() FUNCTION TO REMOVE ONE TODO */

function removeTodo(index) {
  const todos = JSON.parse(localStorage.getItem('todos'));
  todos.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
}

// edit todos on user input
function editTodo(index, item) {
  const todos = JSON.parse(localStorage.getItem('todos'));
  todos[index].item = item;
  localStorage.setItem('todos', JSON.stringify(todos));
}

/* removeManyTodo FUNCTION TO REMOVE MANY TODOS */

function removeManyTodo(indexes) {
  let todos = JSON.parse(localStorage.getItem('todos'));
  todos = todos.filter(function (todo, index) {
    return !indexes.includes(index);
  });
  localStorage.setItem('todos', JSON.stringify(todos));
}

/* addTodo() FUNCTION TO LIST/CREATE TODOS AND ADD EVENT LISTENERS */

function addTodo(todos = JSON.parse(localStorage.getItem('todos'))) {
  if (!todos) {
    return null;
  }
  const itemsLeft = document.getElementById('items-left');
  // create cards
  todos.forEach(function (todo) {
    const card = document.createElement('li');
    const cbContainer = document.createElement('div');
    const cbInput = document.createElement('input');
    const check = document.createElement('span');
    const item = document.createElement('p');
    const editInput = document.createElement('input');
    const button = document.createElement('span');
    const edit = document.createElement('span');
    const icon = document.createElement('i');
    const iconEdit = document.createElement('i');

    // Add classes
    card.classList.add('card');
    button.classList.add('clear');
    edit.classList.add('editInputShow');
    edit.classList.add('edit-btn');
    cbContainer.classList.add('cb-container');
    cbInput.classList.add('cb-input');
    item.classList.add('item');
    editInput.classList.add('editInput');
    check.classList.add('check');
    button.classList.add('clear');
    icon.classList.add('fa', 'fa-times', 'clear');
    iconEdit.classList.add('fas', 'fa-ellipsis-v');
    // Set attributes
    card.setAttribute('draggable', true);
    cbInput.setAttribute('type', 'checkbox');
    // set todo item for card
    item.textContent = todo.item;
    // if completed -> add respective class / attribute
    if (todo.completed) {
      card.classList.add('checked');
      cbInput.setAttribute('checked', 'checked');
    }
    // Add drag listener to card
    card.addEventListener('dragstart', function () {
      this.classList.add('dragging');
    });
    card.addEventListener('dragend', function () {
      this.classList.remove('dragging');
    });
    // Add click listener to checkbox
    cbInput.addEventListener('click', function () {
      const correspondingCard = this.parentElement.parentElement;
      const checked = this.checked;
      stateTodo(
        [...document.querySelectorAll('.todos .card')].indexOf(
          correspondingCard
        ),
        checked
      );
      checked
        ? correspondingCard.classList.add('checked')
        : correspondingCard.classList.remove('checked');
    });

    // Add click listener to clear button
    button.addEventListener('click', function () {
      const correspondingCard = this.parentElement;
      correspondingCard.classList.add('fall');
      removeTodo(
        [...document.querySelectorAll('.todos .card')].indexOf(
          correspondingCard
        )
      );
      correspondingCard.addEventListener('animationend', function () {
        setTimeout(function () {
          correspondingCard.remove();
        }, 100);
      });
    });
    // parent.appendChild(child)
    button.appendChild(icon);
    edit.appendChild(iconEdit);
    cbContainer.appendChild(cbInput);
    cbContainer.appendChild(check);
    card.appendChild(cbContainer);
    card.appendChild(item);
    card.appendChild(editInput);
    card.appendChild(button);
    card.appendChild(edit);
    document.querySelector('.todos').appendChild(card);
  });
}
