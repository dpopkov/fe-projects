let x;
const firstName = 'Jane';
const lastName = 'Doe';
const age = 30;

// Naming: simplified object creation if key and value are the same:
const person = { 
    firstName, 
    lastName, 
    age 
};
x = person;  // Object { firstName: "Jane", lastName: "Doe", age: 30 }

// Destructuring Objects (with renaming)
const todo = {
    id: 1,
    title: 'Clean room',
    user: {
        name: 'Jane'
    }
}
let { id, title: todoTitle, user: { name } } = todo;
console.log(id, todoTitle);  // 1 Clean room
console.log(name);  // Jane

// Destructuring Arrays
const arr = [23, 67, 33, 49];
const [first, second, ...rest] = arr;
console.log(first, second);  // 23 67
console.log(rest);  // Array [ 33, 49 ]

// console.log(x);
