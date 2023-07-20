// Challenge 1
// function getCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
// }
// Solution:
const getCelsius = fahrenheit => (fahrenheit - 32) * 5 / 9;
console.log(`The temperature is ${getCelsius(1)}\xB0`);
console.log(`The temperature is ${getCelsius(32)}\xB0`);

// Challenge 2
function minMax(...numbers) {
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    for(const number of numbers) {
        if (number < min) {
            min = number;
        } else if (number > max) {
            max = number;
        }
    }
    return { min, max }
}
const minMax2 = numbers => {
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    return { min, max }
}
console.log(minMax(11, 33, 22, -11, 77, 55));
const arr = [11, 33, 22, -11, 77, 55];
console.log(minMax2(arr));
console.log(minMax(...arr));

// Challenge 3
((length, width) => {
    const area = length * width;
    console.log(`The area of rectangle with a length of ${length} and width of ${width} is ${area}`)
})(10, 20);