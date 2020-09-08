const todos = [
  {
    title: "Order cat food",
    body: "body 1",
    completed: false,
  },
  {
    title: "Clean kitchen",
    body: "body 2",
    completed: true,
  },
  {
    title: "Buy food",
    body: "body 3",
    completed: true,
  },
  {
    title: "Do work",
    body: "body 4",
    completed: false,
  },
  {
    title: "Exercise",
    body: "body 5",
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

// todos.forEach(function (todo) {
//   let p = document.createElement("p");
//   p.textContent = todo.title;
//   document.querySelector("body").appendChild(p);
// });

document.querySelector("#add-todo").addEventListener("click", function (e) {
  e.target.textContent = "Todo added";
});

document
  .querySelector("#new-todo-text")
  .addEventListener("input", function (e) {
    //cosole.log(e.target.value);
  });

document.querySelector("#search-text").addEventListener("input", function (e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});
