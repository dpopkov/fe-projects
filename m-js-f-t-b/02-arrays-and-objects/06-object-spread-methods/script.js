let x;
let todo;

// Способы создания Object
todo = {};
todo = new Object();

x = todo;  // Object {  }

todo.id = 1;  // Object { id: 1 }

todo.name = 'Buy shugar';  // Object { id: 1, name: "Buy shugar" }

todo.completed = true;  // Object { id: 1, name: "Buy shugar", completed: true }

const person = {
    address: {
        coords: {
            lat: 12.345,
            lng: -67.891
        }
    }
}
x = person.address.coords.lng;  // -67.891

// Nesting
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { obj1, obj2 };  // Object { obj1: {…}, obj2: {…} }
x = obj3;

// Spread Operator
x = { ...obj1, ...obj2 };  // Object { a: 1, b: 2, c: 3, d: 4 }
// Old way of spreading:
x = Object.assign({});  // Object {  }
x = Object.assign({}, obj1);  // Object { a: 1, b: 2 }
x = Object.assign({}, obj1, obj2);  // Object { a: 1, b: 2, c: 3, d: 4 }
// The target object is changed:
x = Object.assign(todo, obj1);  // Object { id: 1, name: "Buy shugar", completed: true, a: 1, b: 2 }

// Arrays of Objects
const todos = [
    { id: 1, name: 'Buy Shugar' },
    { id: 2, name: 'Clean Room'},
    { id: 3, name: 'Write Letter'}
];
x = todos;  // Array(3) [ {…}, {…}, {…} ]
x = todos[0];  // Object { id: 1, name: "Buy Shugar" }

// Get all keys of an Object
x = Object.keys(todo);  // Array(5) [ "id", "name", "completed", "a", "b" 

// Get all values of an Object
x = Object.values(todo);  // Array(5) [ 1, "Buy shugar", true, 1, 2 ]

// Get all key-value pairs of an Object
x = Object.entries(todo);
/*
Array(5) [ (2) […], (2) […], (2) […], (2) […], (2) […] ]
    ​0: Array [ "id", 1 ]
    ​1: Array [ "name", "Buy shugar" ]
    ​2: Array [ "completed", true ]
    ​3: Array [ "a", 1 ]
    ​4: Array [ "b", 2 ]
    ​length: 5
*/

// Testing if an object has a specific property
x = todo.hasOwnProperty('id');  // true
x = todo.hasOwnProperty('age');  // false

console.log(x);
console.log(todo);
