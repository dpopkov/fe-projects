const numbers = [1, 2, 3, 4, 5];

const sum0 = numbers.reduce(function (accumulatorValue, currentValue) {
  return accumulatorValue + currentValue;
}, 0); // 15
console.log(sum0);

const sum = numbers.reduce((acc, curr) => acc + curr, -11); // 4
console.log(sum);

const cart = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 300 },
];
const total = cart.reduce(
  (acc, currentProduct) => acc + currentProduct.price,
  0
);
console.log(total);
