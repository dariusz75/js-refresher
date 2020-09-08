const todos = [
  {
    title: 'Order cat food',
    body: 'body 1',
    completed: false
  },
  {
    title: 'Clean kitchen',
    body: 'body 2',
    completed: true
  },
  {
    title: 'Buy food',
    body: 'body 3',
    completed: true
  },
  {
    title: 'Do work',
    body: 'body 4',
    completed: false
  },
  {
    title: 'Exercise',
    body: 'body 5',
    completed: true
  }
];

const incompleteTodos = todos.filter(function (todo) {
  return !todo.completed
})

const summary = document.createElement('h2');
summary.textContent = `You have ${incompleteTodos.length} todos left.`;
document.querySelector('body').appendChild(summary);


todos.forEach(function (todo) {
  let p = document.createElement('p');
  p.textContent = todo.title;
  document.querySelector('body').appendChild(p);
})



