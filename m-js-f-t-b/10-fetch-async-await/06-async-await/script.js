'use strict';

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const user = { name: 'Jane', age: 30 };
    resolve(user);
  }, 1000);
});

// promise.then((data) => console.log(data));

async function getPromise() {
  const response = await promise;
  console.log(response);
}

// getPromise();

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
}

function getUsers2() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => console.log(data));
}

// getUsers();
// getUsers2();

// --------------------------------
// async await with Arrow Functions
// --------------------------------
const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
};

getPosts();
