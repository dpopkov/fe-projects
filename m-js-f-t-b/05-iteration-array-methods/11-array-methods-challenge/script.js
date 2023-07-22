// Challenge 1
const people = [
  { firstName: 'Jane', lastName: 'Doe', age: 30 },
  { firstName: 'Jack', lastName: 'Doe', age: 34 },
  { firstName: 'Kate', lastName: 'Linus', age: 29 },
  { firstName: 'Ben', lastName: 'Linus', age: 50 },
];
const youngPeople = people
  .filter((person) => person.age <= 30)
  .map((person) => ({
    name: person.firstName + ' ' + person.lastName,
    age: person.age,
  }));
console.log(youngPeople);

// Challenge 2: add all the positive numbers
const number = [2, -33, 50, 20, -122, -9, 7];
const positiveSum = number.reduce(
  (acc, number) => (number > 0 ? acc + number : acc),
  0
);
console.log(positiveSum);
const positiveSum2 = number
  .filter((n) => n > 0)
  .reduce((acc, curr) => acc + curr, 0);
console.log(positiveSum2);

// Challenge 3: Capitalize words.
const words = ['coder', 'devloper', 'programmer', 'architect'];
const capitalized = words.map(
  (word) => word[0].toUpperCase() + word.substring(1)
);
console.log(capitalized);
