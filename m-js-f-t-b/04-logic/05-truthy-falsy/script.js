let x;
// -------------
// Falsy Values:
// -------------
x = false;
x = 0;  // Falsy value: 0
x = ''; // Falsy value: 
x = null;  // Falsy value: null
x = undefined;  // Falsy value: undefined
x = NaN;  // Falsy value: NaN

// --------------
// Truthy Values:
// --------------
// Everything that is not falsey
x = true;  // Truthy value:
x = '0';  // Truthy value: 0   -- 0 in a String
x = ' ';  // Truthy value:    -- whitespace in a String
x = 'false'; // Truthy value: false  -- false in a String
x = [];  // Truthy value:  -- empty array
x = {};  // Truthy value: [object Object]  -- empty object
x = function() {}  // Truthy value: function() {}  -- empty function

if (x) {
    console.log(`Truthy value: ${x}`);
} else {
    console.log(`Falsy value: ${x}`);
}
console.log(Boolean(x));

// ------------------------
// Truthy and Falsy Caveats
// ------------------------

// 1 - Undefined or 0 
// const children = undefined;
const children = 0;
// if (children) {
// if (children !== undefined) {
if (!isNaN(children)) {
    console.log(`You have ${children} children`);
} else {
    console.log('Enter number of children');
}

// 2 - Checking for emtpy arrays
// const posts = ['Post One', 'Post Two'];
// const posts = undefined;
const posts = [];
if (posts && posts.length > 0) {
    console.log('List Posts');
} else {
    console.log('No Posts to List');
}

// 3 - Checking for empty objects
// const user = undefined;
const user = {};
if (user && Object.keys(user).length > 0) {
    console.log('List User');
} else {
    console.log('No User');
}

// 4 - Loose Equality (==)
console.log(false == 0);  // true
console.log('' == 0);  // true
console.log(null == undefined);  // true
console.log(false === 0);  // false
console.log('' === 0);  // false
console.log(null === undefined);  // false
