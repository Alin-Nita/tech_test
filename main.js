//declare variables 
let userInput = document.querySelector('#text');
console.log(userInput);
let addButton = document.querySelector('#add_btn');
let todoList = document.querySelector('.list');

//create a functions that appends a new todo in the list once the user hits the add button

const createList = () => {
  let task = userInput.value;
  todoList.innerHTML += `<li>${task}</li>`;
}

addButton.addEventListener("click", createList);