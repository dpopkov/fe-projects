// ----------------
// Create a promise
// ----------------

const promise = new Promise((resolve, reject) => {
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

promise
  .then((user) => {
    console.log(`User: ${user.name}, ${user.age}`);
    // User: Jane, 30
    return user.name;
  })
  .then((userName) => {
    console.log(`User name: ${userName}`);
    return userName.length;
  })
  .then((nameLength) => {
    console.log(`Name lenght: ${nameLength}`);
  })
  .catch((err) => {
    console.log(`Error: code=${err.code}, message=${err.message}`);
    // Error: code=400, message=Bad request
    return 'Simple Error';
  })
  .then((errMsg) => {
    console.log(
      'This will run no matter what.',
      errMsg ? `Even if there is a ${errMsg}.` : 'Even is there is no errors.'
    );
  })
  .finally(() => {
    console.log('The promise has been resolved or rejected.');
  });
