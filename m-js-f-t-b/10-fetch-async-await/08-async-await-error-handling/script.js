'use strict';

// ----------------------------------------------------
// Handling errors inside function - the preferred way.
// ----------------------------------------------------
const getUsers = async () => {
  try {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // const data = await res.json();
    const res = await fetch('http://httpstat.us/404');
    if (!res.ok) {
      throw new Error('Request failed');
    }
    const data = await res.text();
    console.log(data);
  } catch (error) {
    console.log('Catched error:', error);
  }
};

// getUsers();

// --------------------------------
// Handling errors outside function
// --------------------------------
const getPosts = async () => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const res = await fetch('http://httpstat.us/500');
  if (!res.ok) {
    throw new Error('Request failed');
  }
  // const data = await res.json();
  const data = await res.text();
  console.log(data);
};

// getPosts(); // Uncaught (in promise) Error: Request failed
getPosts().catch((err) => console.log('Catched', err));
