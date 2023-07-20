// This will not work because of global scope pollution:
// const userName = 'John';
// console.log(userName);

// ---------------------------------------------------------
// Syntax of Immediately Invoked Function Expressions (IIFE)
// ---------------------------------------------------------
(function() {
    // Now the userName is not in the global scope
    const userName = 'John';
    console.log(userName);
    const hello = () => console.log('Hello from the IIFE');
    hello();
})();

(function(name) {
    console.log(`Hello, ${name}!`);
})('Dave');  // Hello, Dave!