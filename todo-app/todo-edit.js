const taskTitleField = document.querySelector("#task-title");
const lastEditiedDateEl = document.querySelector("#last-edited");
const taskBodyField = document.querySelector("#task-body");
const removeTodoButton = document.querySelector("#remove-todo");

const todoId = location.hash.substring(1);
const todos = getSavedTodos();
const todo = todos.find((todo) => {
  return todo.id === todoId;
});

if (todo === undefined) {
  location.assign("/index.html");
}

lastEditiedDateEl.textContent = lastEditedMessage(todo.updatedAt);

taskTitleField.value = todo.title;
taskTitleField.addEventListener("input", (e) => {
  todo.title = e.target.value;
  todo.updatedAt = moment().valueOf();
  saveTodos(todos);
  lastEditiedDateEl.textContent = lastEditedMessage(todo.updatedAt);
});

taskBodyField.value = todo.body;
taskBodyField.addEventListener("input", (e) => {
  todo.body = e.target.value;
  todo.updatedAt = moment().valueOf();
  lastEditiedDateEl.textContent = lastEditedMessage(todo.updatedAt);
  saveTodos(todos);
});

removeTodoButton.addEventListener("click", (e) => {
  removeTodo(todoId);
  saveTodos(todos);
  location.assign("/index.html");
});
