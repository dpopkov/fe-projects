// JavaScript

let amount = '100';
console.log(amount, typeof amount);

// Converting string to a number
// amount = parseInt(amount);
// amount = +amount;   // unary '+' also converts to a number
amount = Number(amount);
console.log(amount, typeof amount);

// Converting a number to a string
// amount = amount.toString();
amount = String(amount);
console.log(amount, typeof amount);

// Converting a string to a decimal
amount = '99.5';
amount = parseFloat(amount);
console.log(amount, typeof amount);  // 99.5 number

// Converting number to boolean
amount = 1;
amount = Boolean(amount);
console.log(amount, typeof amount);  // true boolean
amount = 0;
amount = Boolean(amount);
console.log(amount, typeof amount);  // false boolean

// Converting invalid string to number
amount = 'hello';
amount = parseInt(amount);
console.log(amount, typeof amount);  // NaN number