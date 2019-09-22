let form = document.querySelector("form");
let todosList = document.querySelector("ul");
let btn = document.querySelector("button");
let input = document.getElementById("user-todo");

// let todosArray = [];
//Set Array to empty if not exist
let todosArray = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

localStorage.setItem("todos", JSON.stringify(todosArray));

let storage = JSON.parse(localStorage.getItem("todos"));

form.addEventListener("submit", function(e) {
  e.preventDefault();
  todosArray.push(input.value);
  todoMaker(input.value);

  localStorage.setItem("todos", JSON.stringify(todosArray));
  input.value = "";
});

function todoMaker(inp) {
  let todo = document.createElement("li");
  todo.textContent = inp;

  todosList.appendChild(todo);
}

for (i = 0; i < storage.length; i++) {
  todoMaker(storage[i]);
}

btn.addEventListener("click", function() {
  while (todosList.firstChild) {
    localStorage.removeItem("todos");
    todosList.removeChild(todosList.firstChild);
  }
});
