'use strict';

// --------------------
// Fetching a JSON file
// --------------------
// const jsonPath = '../../09-asynchronous-js/10-promises-vs-callback-hell';
// fetch(jsonPath + '/movies.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// --------------------
// Fetching a text file
// --------------------
fetch('./test.txt')
  .then((response) => response.text())
  .then((data) => console.log(data));

// --------------------
// Fetching from an API
// --------------------
// fetch('https://api.github.com/users/username/repos')
//   .then((res) => res.json())
//   .then((data) => console.log(data));
