// FizzBuzz Challenge

for (let i = 1; i <= 100; i++) {
  let msg;
  if (i % 15 === 0) {
    msg = "FizzBuzz";
  } else if (i % 3 === 0) {
    msg = "Fizz";
  } else if (i % 5 === 0) {
    msg = "Buzz";
  } else {
    msg = i;
  }
  console.log(msg);
}
