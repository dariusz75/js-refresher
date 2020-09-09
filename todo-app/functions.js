//Read existing todos from localStorage
const getSavedTodos = function () {
  let todosJSON = localStorage.getItem("todos");

  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  } else {
    [];
  }
};

//Save todos to localStorage
const saveToodos = function () {
  localStorage.setItem("todos", JSON.stringify(todos));
};

//Render todos on the screen based on filters
const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    if (filters.hideCompleted === true && todo.completed === false) {
      return todo.title
        .toLowerCase()
        .includes(filters.searchText.toLowerCase());
    } else if (filters.hideCompleted === false) {
      return todo.title
        .toLowerCase()
        .includes(filters.searchText.toLowerCase());
    }
  });

  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed;
  });

  document.querySelector("#todos").innerHTML = "";

  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos left.`;
  document.querySelector("#todos").appendChild(summary);

  filteredTodos.forEach(function (filteredTodo) {
    const todoEl = document.createElement("div");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");

    const textEl = document.createElement("span");
    textEl.textContent = filteredTodo.title;

    const removeButton = document.createElement("button");
    removeButton.textContent = "x";

    todoEl.appendChild(checkbox);
    todoEl.appendChild(textEl);
    todoEl.appendChild(removeButton);

    document.querySelector("#todos").appendChild(todoEl);
  });
};

//Get the DOM elements for an individual todo
const generateTodoDOM = function () {};
