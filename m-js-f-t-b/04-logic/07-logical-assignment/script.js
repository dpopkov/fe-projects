// -----------------------------------------------------
// ||= assigns the right value only if the left is falsy
// -----------------------------------------------------
let a;

if (!a) {
    a = 10;
}
console.log(a);  // 10

a = undefined;
// a = a || 20;
a ||= 20;
console.log(a);  // 20
a ||= 30;
console.log(a);  // 20


// ------------------------------------------------------
// &&= assigns the right value only if the left is truthy
// ------------------------------------------------------
let b = 10;
// if (b) {
//     b = 20;
// }
b &&= 20;
console.log(b);  // 20


// -----------------------------------------------------------------
// ??= assigns the right value only if the left is null or undefined
// -----------------------------------------------------------------
let c = null;
// if (c === null || c === undefined) {
//     c = 30;
// }
c ??= 30;
console.log(c);