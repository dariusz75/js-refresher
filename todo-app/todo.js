const todos = [
  {
    title: "Order cat food",
    completed: false,
  },
  {
    title: "Clean kitchen",
    completed: true,
  },
  {
    title: "Buy food",
    completed: true,
  },
  {
    title: "Do work",
    completed: false,
  },
  {
    title: "Exercise",
    completed: true,
  },
];

const filters = {
  searchText: "",
};

const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    return todo.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed;
  });

  document.querySelector("#todos").innerHTML = "";

  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos left.`;
  document.querySelector("#todos").appendChild(summary);

  filteredTodos.forEach(function (filteredTodo) {
    const p = document.createElement("p");
    p.textContent = filteredTodo.title;
    document.querySelector("#todos").appendChild(p);
  });
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
  }

  renderTodos(todos, filters);
  e.target.elements.newTodoText.value = "";
});
