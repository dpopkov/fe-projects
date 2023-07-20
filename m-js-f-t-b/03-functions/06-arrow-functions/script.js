// function add(a, b) {
//     return a + b;
// }

// Arrow function syntax
const add = (a, b) => {
    return a + b
};
console.log(add(3, 2));

// Implicit return
const subtr = (a, b) => a - b;
console.log(subtr(7, 3));

// Returning an object
const createObj1 = () => {
    return {
        id: 1,
        name: 'Jane'
    }
};
const createObj2 = () => ({
    id: 2,
    name: 'Jack'
});
console.log(createObj1());
console.log(createObj2());