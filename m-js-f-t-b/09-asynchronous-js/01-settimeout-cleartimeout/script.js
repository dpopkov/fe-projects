const timerId = setTimeout(changeText, 3000);

function changeText() {
  document.querySelector('h1').textContent = 'Hello from callback';
}

console.log('Hello from global scope');

function cancelTextChange() {
  clearTimeout(timerId);
  console.log(`Timer ${timerId} cancelled`);
}

document.querySelector('button').addEventListener('click', cancelTextChange);
