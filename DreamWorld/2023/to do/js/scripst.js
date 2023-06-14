// Selecting elements from the HTML
const form = document.querySelector('#todo_block');
const input = document.querySelector('#text');
const list = document.querySelector('#task_list');

// Array to store the to-do items
let todos = [];

// Function to add a new to-do item
function addTodoItem(event) {
  event.preventDefault();

  const todoText = input.value.trim();

  if (todoText !== '') {
    const todoItem = {
      id: Date.now(),
      text: todoText,
      completed: false
    };

    todos.push(todoItem);
    renderTodoItem(todoItem);
    input.value = '';
  }
}

// Function to render a to-do item
function renderTodoItem(todoItem) {
  const listItem = document.createElement('div');
  listItem.dataset.id = todoItem.id;

	const label = document.createElement('label');
  label.innerText = todoItem.text;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', toggleTodoItem);

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<button class="del">-</button>';
  deleteButton.addEventListener('click', deleteTodoItem);

  listItem.appendChild(label);
	listItem.appendChild(checkbox);
  listItem.appendChild(deleteButton);

  list.appendChild(listItem);
}

// Function to toggle the completed status of a to-do item
function toggleTodoItem(event) {
  const itemId = event.target.parentNode.dataset.id;
  const todoItem = todos.find(item => item.id === parseInt(itemId));

  todoItem.completed = !todoItem.completed;
  event.target.parentNode.classList.toggle('completed');
}

// Function to delete a to-do item
function deleteTodoItem(event) {
  const itemId = event.target.parentNode.dataset.id;
  const todoIndex = todos.findIndex(item => item.id === parseInt(itemId));

  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
    event.target.parentNode.remove();
  }
}

// Event listener for form submission
form.addEventListener('submit', addTodoItem);
