// const todos = [
//   {
//     title: "Order cat food",
//     completed: false,
//   },
//   {
//     title: "Clean kitchen",
//     completed: true,
//   },
//   {
//     title: "Buy food",
//     completed: true,
//   },
//   {
//     title: "Do work",
//     completed: false,
//   },
//   {
//     title: "Exercise",
//     completed: true,
//   },
// ];

let todos = getSavedTodos();

const filters = {
  searchText: "",
  hideCompleted: false,
};

renderTodos(todos, filters);

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

document.querySelector("#new-todo").addEventListener("submit", function (e) {
  e.preventDefault();
  if (e.target.elements.newTodoText.value.length > 0) {
    todos.push({
      title: e.target.elements.newTodoText.value,
      completed: false,
    });
    saveToodos();
  }

  renderTodos(todos, filters);
  e.target.elements.newTodoText.value = "";
});

document
  .querySelector("#hide-completed")
  .addEventListener("change", function (e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
  });
