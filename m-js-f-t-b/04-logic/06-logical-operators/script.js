console.log(10 > 20 && 30 > 15 && 40 > 30);  // false
console.log(10 > 20 || 30 > 15);  // true

// ----------------------------------------------------
// && - Will return first falsy value or the last value
// ----------------------------------------------------
let a;

a = 10 && 20;
console.log(a);  // 20

a = 10 && 20 && 30;
console.log(a);  // 30

a = 10 && 0 && 30;
console.log(a);  // 0

a = 10 && '' && 0 && 30;
console.log(a);  // ''

let posts = ['Post One', 'Post Two'];
console.log(posts[0]);  // Post One

posts = [];
console.log(posts[0]);  // undefined
posts.length > 0 && console.log(posts[0]); // not printing

// ---------------------------------------------------
// || -return the first truthy value or the last value
// ---------------------------------------------------
let b;

b = 0 || 10; 
console.log(b);  // 10

b = 0 || null || '' || 20; 
console.log(b);  // 20

// -----------------------------------------------------------------
// ?? - nullish coalescing operator.
// Returns the right side operand when the left is null or undefined
// -----------------------------------------------------------------
let c;

c = 10 ?? 20;
console.log(c);  // 10

c = null ?? 20;
console.log(c);  // 20

c = undefined ?? 30;
console.log(c);  // 30

c = 0 ?? 30; // - it looks at null or undefined, not Falsy!
console.log(c);  // 0
