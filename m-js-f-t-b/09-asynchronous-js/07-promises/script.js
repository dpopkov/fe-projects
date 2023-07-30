// ----------------
// Create a promise
// ----------------
const promise = new Promise((resolve, reject) => {
  // Do some async task
  setTimeout(() => {
    console.log('Async task complete');
    resolve();
  }, 1000);
});
promise.then(() => {
  console.log('Promise consumed.');
});

const getUser = new Promise((resolve, reject) => {
  // Do some async task
  setTimeout(() => {
    let error = null; //{ code: 400, message: 'Bad request' };
    if (!error) {
      resolve({ name: 'Jane', age: 30 });
    } else {
      reject(error);
    }
  }, 2000);
});

getUser
  .then((user) => {
    console.log(`User: ${user.name}, ${user.age}`);
    // User: Jane, 30
  })
  .catch((err) => {
    console.log(`Error: code=${err.code}, message=${err.message}`);
    // Error: code=400, message=Bad request
  })
  .finally(() => {
    console.log('The promise has been resolved or rejected.');
  });

console.log('Hello from global scope');
