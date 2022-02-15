import('./style.css');

const todoList = [
  {
    id: 1,
    description: 'Take out the trash',
    completed: false,
  },
  {
    id: 2,
    description: 'Take out the trash',
    completed: false,
  },
  {
    id: 3,
    description: 'Take out the trash',
    completed: false,
  },
  {
    id: 4,
    description: 'Take out the trash',
    completed: false,
  },
  {
    id: 5,
    description: 'Take out the trash',
    completed: false,
  },
];

const todo = () => {
  const todoListElement = document.querySelector('.todo-list');
  const form = document.createElement('form');
  const header = document.createElement('div');
  const headerText = document.createElement('h1');
  const clear = document.createElement('a');
  clear.href = '#';
  headerText.classList.add('title');
  const headerImg = document.createElement('span');

  headerText.innerHTML = "Today's To Do";
  headerImg.innerHTML = 'Image';
  header.classList.add('header');
  const footer = document.createElement('div');
  footer.classList.add('myFooter');
  clear.innerHTML = 'Clear all completed';

  const inputTodo = document.createElement('input');
  inputTodo.placeholder = 'Add to your list...';
  inputTodo.classList.add('input-todo');
  footer.appendChild(clear);
  header.appendChild(headerText);
  header.appendChild(headerImg);
  form.appendChild(header);
  form.appendChild(inputTodo);

  form.classList.add('form');
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('main-container');

  todoList.forEach((todo) => {
    const todoElement = document.createElement('li');
    const { completed, description } = todo;
    todoElement.innerHTML = `
                  <div class='list-row'>
                    <div class='content'>
                        <input type="checkbox" ${
                          completed ? 'checked' : ''
                        } class='input' />
                        <span>${description}</span>
                    </div>
                   <span class='icon'>Image</span>
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
