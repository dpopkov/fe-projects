'use strict';

try {
  console.log(double('abc'));
  // console.log(x); // ReferenceError
} catch (err) {
  console.log(err);
}

function double(number) {
  if (isNaN(number)) {
    throw new Error(number + ' is not a number');
  }
  return number * 2;
}
