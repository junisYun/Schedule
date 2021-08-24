const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("input");

let toDo = [];

const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(toDo));
};

const deleteTodo = (event) => {
  const li = event.target.parentNode;
  toDo = toDo.filter((item) => {
    return String(item.id) !== li.id;
  });
  localStorage.setItem("todos", JSON.stringify(toDo));
  li.remove();
};

const paintTodo = (newTodoObject) => {
  const li = document.createElement("li");
  li.id = newTodoObject.id;
  const span = document.createElement("span");
  span.innerText = newTodoObject.text + " ";

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
};

const handleTodoSubmit = (event) => {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObject = {
    text: newTodo,
    id: Date.now(),
  };
  toDo.push(newTodoObject);
  paintTodo(newTodoObject);
  saveTodos();
};
toDoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem("todos");

if (savedTodos !== null) {
  const parsedToDos = JSON.parse(savedTodos);
  toDo = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
