let x;

// Nesting
const fruits = ['apple', 'lemon', 'orange'];
const vegies = ['potato', 'tomato', 'carrot'];

// fruits.push(vegies);  // Array(4) [ "apple", "lemon", "orange", (3) […] ]
// x = fruits;

// x = fruits[3][0];  // potato

x = [fruits, vegies]; // Array [ (3) […], (3) […] ]

// Concatenation
x = fruits.concat(vegies);  // Array(6) [ "apple", "lemon", "orange", "potato", "tomato", "carrot" ]

// Spread Operator (...)
x = [...fruits, ...vegies]; // Array(6) [ "apple", "lemon", "orange", "potato", "tomato", "carrot" ]

// Flatten Arrays
const nested = [1, 2, [3, 4], 5, [6, 7]];
x = nested.flat();  // Array(7) [ 1, 2, 3, 4, 5, 6, 7 ]

// "Static" methods on Array Object
x = Array.isArray(fruits);  // true
x = Array.isArray('array'); // false

x = Array.from('12345');  // Array(5) [ "1", "2", "3", "4", "5" ]

const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c);  // Array(3) [ 1, 2, 3 ]

console.log(x);
console.log(fruits);
console.log(vegies);