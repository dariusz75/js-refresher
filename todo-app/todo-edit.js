const taskTitleField = document.querySelector("#task-title");
const taskBodyField = document.querySelector("#task-body");
const removeTodoButton = document.querySelector("#remove-todo");

const todoId = location.hash.substring(1);
const todos = getSavedTodos();
const todo = todos.find(function (todo) {
  return todo.id === todoId;
});

if (todo === undefined) {
  location.assign("/index.html");
}

taskTitleField.value = todo.title;
taskTitleField.addEventListener("input", function (e) {
  todo.title = e.target.value;
  saveTodos(todos);
});

taskBodyField.value = todo.body;
taskBodyField.addEventListener("input", function (e) {
  todo.body = e.target.value;
  saveTodos(todos);
});

removeTodoButton.addEventListener("click", function (e) {
  removeTodo(todoId);
  saveTodos(todos);
  location.assign("/index.html");
});
