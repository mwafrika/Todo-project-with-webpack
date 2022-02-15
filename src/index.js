import './style.css';
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
  const container = document.createElement('div');
  todoList.forEach((todo) => {
    const todoElement = document.createElement('li');
    const { completed, description } = todo;
    todoElement.innerHTML = `
            <input type="checkbox" ${completed ? 'checked' : ''} />
            <span>${description}</span>
            `;
    todoListElement.appendChild(todoElement);
  });
};

window.addEventListener('DOMContentLoaded', todo);
