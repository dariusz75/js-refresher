// Fetch existing todos from localStorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem("todos");

  if (todosJSON !== null) {
    return JSON.parse(todosJSON);
  } else {
    return [];
  }
};

// Save todos to localStorage
const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

//Toggle todo for completed/uncompleted
const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id);

  if (todo !== undefined) {
    todo.completed = !todo.completed;
  }
};

//Remove todo from the list
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
    //renderTodos(todos, filters);
  }
};

// Sort todos with dropdown list by one of three options
const sortTodos = (todos, sortBy) => {
  if (sortBy === "byEdited") {
    return todos.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "byCreated") {
    return todos.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "alphabetical") {
    return todos.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return todos;
  }
};

// Render application todos based on filters
const renderTodos = (todos, filters) => {
  todos = sortTodos(todos, filters.sortBy);
  const filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.title
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

  document.querySelector("#todos").innerHTML = "";
  document
    .querySelector("#todos")
    .appendChild(generateSummaryDOM(incompleteTodos));

  filteredTodos.forEach((todo) => {
    document.querySelector("#todos").appendChild(generateTodoDOM(todo));
  });
};

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
  const todoEl = document.createElement("div");
  const checkbox = document.createElement("input");
  const todoTitle = document.createElement("a");
  const removeButton = document.createElement("button");

  // Setup todo checkbox
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = todo.completed;
  checkbox.addEventListener("change", () => {
    toggleTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
    console.log(todo);
  });
  todoEl.appendChild(checkbox);

  // Setup the todo title
  todoTitle.textContent = todo.title;
  todoTitle.setAttribute("href", `/edit.html#${todo.id}`);
  todoEl.appendChild(todoTitle);

  // Setup the remove button
  removeButton.textContent = "x";
  removeButton.addEventListener("click", () => {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  todoEl.appendChild(removeButton);

  return todoEl;
};

// Get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  return summary;
};

// Generate Last edited message

const lastEditedMessage = (timestamp) =>
  `Last edited: ${moment(timestamp).fromNow()}`;
