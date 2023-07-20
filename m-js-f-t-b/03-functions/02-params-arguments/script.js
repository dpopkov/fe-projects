// ------------------
// Default Parameters
// ------------------
function registerUser(user = 'Bot') {
    return `${user} is registered`;
}
console.log(registerUser());

// ---------------
// Rest Parameters
// ---------------
function sum(...numbers) {
    // return numbers;  // Array(3) [ 1, 2, 3 ]
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}
console.log(sum(1, 2, 3, 4));  // 10

// ---------------------
// Objects as Parameters
// ---------------------
function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in`;
}
const user = { id: 1, name: 'Jane Doe' };
console.log(loginUser(user));
console.log(loginUser({ id: 2, name: 'Jack Doe' }));

// --------------------
// Arrays as Parameters
// --------------------
function randomFrom(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
console.log(randomFrom([11, 22, 33]));