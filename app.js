//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listeners
todoButton.addEventListener('click', todo);


//function
function addTodo(event){

    //prevent event from submitting
    event.preventDefault()
}