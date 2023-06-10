const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
deleteCheck()
function addTodo(event) {
  event.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  const checkedBtn = document.createElement("button");
  checkedBtn.innerHTML = '<i class="fas fa-check"></i>';
  checkedBtn.classList.add("check-btn");
  todoDiv.appendChild(checkedBtn);

  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
  trashBtn.classList.add("trash-btn");
  todoDiv.appendChild(trashBtn);

  todoList.appendChild(todoDiv);

  todoInput.value = "";
}
function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === "trash-btn") {
      const todo = item.parentElement;
      todo.classList.add("fall");
      todo.addEventListener("transitionend",function(){
        todo.remove();
      });
    //   todo.remove();
    }
    if (item.classList[0] === "check-btn") {
      const todo = item.parentElement;
      todo.classList.toggle("completed");
    }
  }
