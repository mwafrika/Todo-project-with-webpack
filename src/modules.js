export const todoList = [
  {
    id: 0,
    description: 'Take my course at Udemy for 2 hours',
    completed: false,
  },
  {
    id: 1,
    description: 'Complete the coding challenge at hackerank',
    completed: false,
  },
  {
    id: 2,
    description: 'Submit my pull request for the capstone project',
    completed: false,
  },
  {
    id: 3,
    description: 'Visit my freind at 5p.m today',
    completed: false,
  },
  {
    id: 4,
    description: 'Attend the standup meeting at 6p.m',
    completed: false,
  },
];

export const todoListElement = document.querySelector('.todo-list');
export const form = document.createElement('form');
export const header = document.createElement('div');
export const headerText = document.createElement('h1');
export const clear = document.createElement('a');
clear.href = '#';
headerText.classList.add('title');
export const headerImg = document.createElement('span');

headerText.innerHTML = "Today's To Do";
headerImg.innerHTML =
  "<span class='icon'><i class='fa-solid fa-arrows-rotate'></i></span>";
header.classList.add('header');
export const footer = document.createElement('div');
footer.classList.add('myFooter');
clear.innerHTML = 'Clear all completed';

export const inputContainer = document.createElement('div');
inputContainer.classList.add('input-container');
export const inputTodo = document.createElement('input');
export const refreshImg = document.createElement('i');
refreshImg.style.color = '#928f8f';
inputTodo.placeholder = 'Add to your list...';
export const mainContainer = document.createElement('div');
export const append = () => {
  inputContainer.appendChild(inputTodo);
  inputContainer.appendChild(refreshImg);
  inputTodo.classList.add('input-todo');
  footer.appendChild(clear);
  header.appendChild(headerText);
  header.appendChild(headerImg);
  form.appendChild(header);
  form.appendChild(inputContainer);
  form.classList.add('form');
  mainContainer.classList.add('main-container');
};
