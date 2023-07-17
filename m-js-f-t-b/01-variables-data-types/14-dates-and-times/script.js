// JavaScript
let d;

// Dates
d = new Date();
d = d.toString();
d = new Date(2023, 6, 17, 12, 30, 0);  // Date Mon Jul 17 2023 12:30:00 GMT+0300
d = new Date('2023-07-17');  // Date Mon Jul 17 2023 03:00:00 GMT+0300
d = new Date('2023-07-17T12:30:00');  // Date Mon Jul 17 2023 12:30:00 GMT+0300
d = new Date('07/17/2023 12:30:00');  // Date Mon Jul 17 2023 12:30:00 GMT+0300
d = new Date('2022-07-10');  // Watch out for time zones - it may give a surprise!

// Timestamp - number of milliseconds
d = Date.now();  // 1733911750370 number

d = new Date('2023-07-17');
d = d.getTime();  // 1689552000000 number
d = d.valueOf();  // 1689552000000 number

d = new Date(1689552000000);  // Date Mon Jul 17 2023 03:00:00 GMT+0300

// Timestamp in seconds
d = Math.floor(Date.now() / 1000);

console.log(d, typeof d);
