'use strict';

const todoList = document.getElementById('todo-list');
const todoInput = document.getElementById('todo-input');
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

function getTodos() {
  fetch(apiUrl + '?_limit=10')
    .then((res) => res.json())
    .then((data) => {
      addTodosToDOM(data);
    });
}

function addTodosToDOM(todos) {
  todos.forEach((todo) => addTodoToDOM(todo));
}

function addTodoToDOM(todo) {
  const todoDiv = createTodoDiv(todo);
  todoList.insertAdjacentElement('beforeend', todoDiv);
}

function createTodoDiv(todo) {
  const div = document.createElement('div');
  div.setAttribute('data-id', todo.id);
  div.textContent = todo.title;
  if (todo.completed) {
    div.classList.add('completed');
  }
  return div;
}

function createTodo(e) {
  e.preventDefault();

  const title = todoInput.value.trim();
  const newTodo = { title, completed: false };
  postNewTodo(newTodo);
}

function postNewTodo({ title, completed }) {
  fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify({ title, completed }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((resp) => resp.json())
    .then((todo) => {
      addTodoToDOM(todo);
    });
}

function putUpdatedTodo(updatedTodo) {
  fetch(`${apiUrl}/${updatedTodo.id}`, {
    method: 'PUT',
    body: JSON.stringify(updatedTodo),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((resp) => resp.json())
    .then((todo) => {
      console.log(todo);
    });
}

let clickTimeout = null;
function toggleCompleted(e) {
  if (isTodoItem(e.target)) {
    if (clickTimeout !== null) {
      // if second click was within 300 ms
      // then don't handle - it must be dblclick
      clearTimeout(clickTimeout);
      clickTimeout = null;
    } else {
      // set timeout 300 ms
      clickTimeout = setTimeout(() => {
        let isCompleted = e.target.classList.contains('completed');
        isCompleted = !isCompleted;
        e.target.classList.toggle('completed');
        const updatedTodo = {
          id: e.target.dataset.id, // same as getAttribute('data-id')
          title: e.target.textContent.trim(),
          completed: isCompleted,
        };
        putUpdatedTodo(updatedTodo);
      }, 300);
    }
  }
}

function deleteTodo(e) {
  if (isTodoItem(e.target)) {
    console.log('deleting todo...');
    deleteTodoAPI(e.target.dataset.id, () => e.target.remove());
  }
}

function deleteTodoAPI(id, cb) {
  fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
  }).then(cb());
}

function isTodoItem(element) {
  return element.parentElement.id === 'todo-list';
}

const init = () => {
  document.addEventListener('DOMContentLoaded', getTodos);
  document.querySelector('#todo-form').addEventListener('submit', createTodo);
  todoList.addEventListener('click', toggleCompleted);
  todoList.addEventListener('dblclick', deleteTodo);
};

init();
