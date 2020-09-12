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

  const timestamp = moment().valueOf();

  if (e.target.elements.text.value.length > 0) {
    todos.push({
      id: uuidv4(),
      title: e.target.elements.text.value,
      body: "",
      completed: false,
      createdAt: timestamp,
      updatedAt: timestamp,
    });
  } else {
    todos.push({
      id: uuidv4(),
      title: "Untitled task",
      body: "",
      completed: false,
    });
  }

  saveTodos(todos);
  renderTodos(todos, filters);
  e.target.elements.text.value = "";
  location.assign("/edit.html");
});

document
  .querySelector("#hide-completed")
  .addEventListener("change", function (e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
  });
