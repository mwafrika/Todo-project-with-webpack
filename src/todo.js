//
class Todo {
  constructor() {
    this.id = id;
    this.description = description;
    this.completed = completed;
  }

  // getFromLocalStorage() {
  //   if (localStorage.getItem('items') === null) {
  //     this.items = [];
  //   } else {
  //     this.items = JSON.parse(localStorage.getItem('items'));
  //   }
  // }

  getBooks = () => {
    const books = JSON.parse(localStorage.getItem('books'));
    return books || [];
  };

  removeItem(item) {}

  toggleCompleted() {}
  addToDo = () => {};

  renderToDo = () => {};
}

// const todoValue = document.querySelector('.input-todo');

// const createTodo = () => {
//   const todo = document.querySelector('.input-todo').value;
//   const data = {
//     todo,
//     completed: true,
//     id: 1,
//   };

//   console.log(data);
// };

// todoValue.addEventListener((e) => {
//   createTodo;
// });

// const newObj = new Todo(1, 'test', false);

// console.log(newObj.getFromLocalStorage());
