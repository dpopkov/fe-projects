// Challenge 1
const arr = [1, 2, 3, 4, 5];
// Expected:
// [6, 5, 4, 3, 2, 1, 0]

// Solution 1:
let x = arr.reverse()
x.unshift(6);
x.push(0);
console.log("1st:", x);  // Array(7) [ 6, 5, 4, 3, 2, 1, 0 ]

// Challenge 2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
// Expected:
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Solution
x = [...arr1, ...(arr2.slice(1))];
x = arr1.concat(arr2.slice(1));
x = arr1.slice(0, arr1.length - 1).concat(arr2);
x = [...arr1, ...arr2]; x.splice(4, 1);
console.log("2nd:", x);  // Array(10) [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
