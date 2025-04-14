const todos = [
  {
    id: 1,
    task: "Bring breads"
  },
  {
    id: 2,
    task: "Go to School"
  },
  {
    id: 3,
    task: "Do homework"
  },
  {
    id: 4,
    task: "Do some code"
  },
];


const createTodo = (todo) => {

  const newTodo = {
    id: /** previous objcet id + 1 */ 5,
    task: todo
  }

  todos.push(newTodo);
  return;
} 

createTodo("Boil some eggs");

const deleteTodo = (index) => {

  return newTodo = todos.filter(elem => elem.id !== index);
}

const editTodo = (index, newTask) => {

  todos[index].task = newTask;
  return;
}

// console.log(deleteTodo(2));



// console.log(todos);


editTodo(1, "Become a billionaire")

console.log(todos);