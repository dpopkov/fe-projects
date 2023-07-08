let x;
const name = "Jack";
const age = 30;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';

// Template literals
x = `Hello, my name is ${name} and I am ${age} years old`;

//         01234567890
const s = new String('Hello World');
x = s.length;
x = s;
x = new String('Hello');

// Access character by index
x = s[0];

x = s.__proto__;
x = s.toUpperCase();
x = s.charAt(0);
x = s.indexOf('e');
x = s.substring(2, 7); // starting index, ending index (exclusive)
x = s.substring(7); // from starting index to the end of string

x = s.slice(2, -1);

x = s.replace('World', 'Jack');

x = s.includes('ell');

x = s.valueOf();  // get the true primitive of string

x = s.split(' ');

console.log(x, typeof x);