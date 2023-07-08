window.onerror = function(message, url, line) {
    alert(`Error: ${message}\n\n${url}: ${line}`);
}

// console.log(Math); // Math object

let x;

x = Math.sqrt(9);  // 3 number
x = Math.abs(-50);  // 50 number
x = Math.round(4.2);  // 4 number
x = Math.round(4.5);  // 5 number
x = Math.ceil(5.1);  // 6 number
x = Math.floor(5.9); // 5 number
x = Math.pow(2, 10);  // 1024 number
x = Math.min(4, 5, 3); // 3 number
x = Math.max(4, 5, 3); // 5 number
x = Math.random();
x = Math.floor(Math.random() * 10 + 1);  // 1..10

x = Math.random / abc;

console.log(x, typeof x);