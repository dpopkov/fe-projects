// JavaScript

// Log number
console.log(100);

// Log string
console.log('Hello World');

// Log multiple values
console.log(20, 'Hello', true);

// Log a variable
const x = 100;
console.log(x);

// Console error and warning
console.error('Alert message');
console.warn('Warning message');

// Log object as table
console.table({name: 'Alice', email: 'alice@example.org'});

// Group console commands
console.group('Simple collapsible group')
console.log('Hello World');
console.log(20, 'Hello', true);
console.groupEnd();

// Add CSS to logs
const styles = 'padding: 10px; background-color: green; color: white';
console.log('%cText with style', styles);
