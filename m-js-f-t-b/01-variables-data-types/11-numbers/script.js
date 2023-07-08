const num = new Number(5);

let x;
x = num.toString();  // 5 string
x = num.toString().length  // 1 number
x = num.toFixed(3);  // 5.000 string

const num2 = 5.4567;
x = num2.toPrecision(3);  // 5.46 string
x = num2.toExponential(3);  // 5.457e+0 string

x = Number.MAX_VALUE;  // 1.7976931348623157e+308 number
x = Number.MIN_VALUE;  // 5e-324
x = Number.MAX_SAFE_INTEGER; // 9007199254740991 number

console.log(x, typeof x);