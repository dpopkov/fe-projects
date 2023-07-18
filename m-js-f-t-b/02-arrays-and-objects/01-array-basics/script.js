let arr, x;


// Array Literal
arr = [12, 45, 33, 29, 39];  // Array(5) [ 12, 45, 33, 29, 39 ]

// Array Constructor
arr = new Array('apple', 'orange', 'lemon');  // Array(3) [ "apple", "orange", "lemon" ]
x = arr[0];  // apple
x = `My favorite fruit is ${arr[1]}`;  // My favorite fruit is orange

arr = [12, 'Hello', true, null];  // Array(4) [ 12, "Hello", true, null ]

x = arr.length;  // 4

arr[3] = 'World';  // Array(4) [ 12, "Hello", true, "World" ]

// arr.length = 2;  // Array [ 12, "Hello" ]

// arr.length = 5;  // Array(5) [ 12, "Hello", <3 empty slots> ]

arr[2] = 'beautiful';  // Array(4) [ 12, "Hello", "beautiful", "World" ]

arr[arr.length] = '!'; // Array(5) [ 12, "Hello", "beautiful", "World", "!" ]

console.log(arr);
