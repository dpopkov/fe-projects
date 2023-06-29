// JavaScript

// Primitive values
const name = 'Jane';
const age = 30;

// Reference values
const person = {
    name: 'Jane',
    age: 40
};

let newName = name;
newName = 'John';

let newPerson = person;
newPerson.age = 33;

console.log(name, newName);
console.log(person, newPerson);