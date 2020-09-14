let todos = getSavedTodos();

const filters = {
  searchText: "",
  hideCompleted: false,
  sortBy: "byEdited",
};

renderTodos(todos, filters);

document.querySelector("#search-text").addEventListener("input", (e) => {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

document.querySelector("#filter-by").addEventListener("change", (e) => {
  filters.sortBy = e.target.value;
  renderTodos(todos, filters);
});

document.querySelector("#new-todo").addEventListener("submit", (e) => {
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
      createdAt: timestamp,
      updatedAt: timestamp,
    });
  }

  saveTodos(todos);
  renderTodos(todos, filters);
  e.target.elements.text.value = "";
  location.assign("/edit.html");
});

document.querySelector("#hide-completed").addEventListener("change", (e) => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});
