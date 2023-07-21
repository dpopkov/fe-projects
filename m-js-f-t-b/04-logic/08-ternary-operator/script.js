const age = 13;

// Using an if operator
// if (age >= 18) {
//     console.log("You can vote");
// } else {
//     console.log("You can not vote");
// }

// Using ternary operator
age >= 18 ? console.log('You can vote') : console.log('You can not vote');

// Multiple statements
const auth = true;
let redirect;
// if (auth) {
//     console.log('Welcome to the dashboard');
//     redirect = '/dashboard';
// } else {
//     console.log('Access denied');
//     redirect = '/login';
// }
redirect = auth
  ? (console.log('Welcome to the dashboard'), '/dashboard')
  : (console.log('Access denied'), '/login');
console.log(`redirect = ${redirect}`);

// Ternary without "else" part:
auth ? console.log('Welcome to the ternary operartor') : null;

// Alternative using &&
auth && console.log('Welcome to the && operator');
