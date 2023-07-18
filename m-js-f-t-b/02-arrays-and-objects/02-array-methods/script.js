const arr = [34, 55, 95, 20, 15];
let x;

arr.push(100);  // Array(6) [ 34, 55, 95, 20, 15, 100 ]
x = arr.pop();  // 100

arr.unshift(99);  // Array(6) [ 99, 34, 55, 95, 20, 15 ]
x = arr.shift();  // 99 -- Array(5) [ 34, 55, 95, 20, 15 ]

arr.reverse();  // Array(5) [ 15, 20, 95, 55, 34 ]

x = arr.includes(20);  // true
x = arr.includes(2000);  // false

x = arr.indexOf(15);  // 0
x = arr.indexOf(34);  // 4
x = arr.indexOf(3456);  // -1

x = arr.slice(1);  // Array(4) [ 20, 95, 55, 34 ]
x = arr.slice(1, 4);  // Array(3) [ 20, 95, 55 ]

// Method splice(start, deleteCount) changes an initial array:
// x = arr.splice(1, 4);  // Array(4) [ 20, 95, 55, 34 ]
// console.log(arr);  // Array [ 15 ]

// x = arr.splice(1, 1);  // Array [ 20 ]
// console.log(arr);  // Array(4) [ 15, 95, 55, 34 ]
// x = arr.splice(2, 1);  // Array [ 55 ]
// console.log(arr); // Array(3) [ 15, 95, 34 ]

// Chaining methods
console.log(arr);
x = arr.splice(1, 4).reverse().toString();  // 34,55,95,20

console.log(x, arr);
// console.log(arr);
