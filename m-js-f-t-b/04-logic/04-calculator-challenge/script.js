/*
Calculator Challenge.

Create a function called calculator that takes 3 parameters:
num1, num2 and operator. The Operator can be +, -, * or /.
The function should return the result of calculation or an error message.

Example:
calculator(5, 2, '+')  // 7
calculator(5, 2, '-')  // 3
calculator(5, 2, '*')  // 10
calculator(5, 2, '/')  // 2.5
calculator(5, 2, '+')  // error message
*/
function calculator(num1, num2, operator) {
    let result;
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = `Invalid operator: ${operator}`;
            break;
    }
    return result;
}

console.log(calculator(5, 2, '+'));
console.log(calculator(5, 2, '-'));
console.log(calculator(5, 2, '*'));
console.log(calculator(5, 2, '/'));
console.log(calculator(5, 2, '&'));
