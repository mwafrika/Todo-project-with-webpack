import '@fortawesome/fontawesome-free/js/all.js';
import {
  todoList,
  todoListElement,
  form,
  footer,
  mainContainer,
  outerHeader,
  inputTodo,
  header,
  refreshImg,
  headerText,
  headerImg,
  clear,
  append,
  inputContainer,
} from './modules.js';

import('./style.css');

// document.body.appendChild(outerHeader);
const todo = () => {
  append();

  todoList.forEach((todo) => {
    const { completed, description } = todo;
    let todoElement = document.createElement('li');
    todoElement.innerHTML = `
                  <div class='list-row'>
                    <div class='content'>
                       <input type="checkbox" ${
                         completed ? 'checked' : ''
                       } class='input' />
                        <span>${description}</span>
                    </div>
                   <span class='icon'>
                   <i class="fa-solid fa-ellipsis-vertical"></i>
                   </span>
                    </div>
                    `;
    todoListElement.appendChild(todoElement);
    form.appendChild(todoListElement);
    mainContainer.appendChild(form);
    document.body.appendChild(mainContainer);
  });

  form.insertBefore(footer, form.childNodes[3]);
};

window.addEventListener('DOMContentLoaded', todo);
