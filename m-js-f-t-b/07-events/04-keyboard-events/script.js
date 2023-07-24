const itemInput = document.querySelector('#item-input');
const h1 = document.querySelector('h1');
const keyOutput = document.querySelector('#key-output');

const onKeyPress = (e) => console.log('keypress event');
const onKeyUp = (e) => console.log('keyup event');
const onKeyDown = (e) => {
  // console.log('keydown event');

  // key
  // console.log(e.key);
  // h1.textContent = e.key;
  if (e.key === 'Enter') {
    e.preventDefault();
    alert('You pressed enter');
  }

  // keyCode
  if (e.keyCode === 32) {
    // space
    itemInput.classList.toggle('green');
  }

  // code
  if (e.code === 'Digit1') {
    colorItem(1);
  } else if (e.code === 'Digit2') {
    colorItem(2);
  }

  // repeat
  if (e.repeat) {
    console.log('You are holding down ' + e.code);
  }

  // shiftKey, ctrlKey, altKey
  console.log('Shift: ' + e.shiftKey);
  console.log('Ctrl: ' + e.ctrlKey);
  console.log('Alt: ' + e.altKey);

  event2output(e);
};

function event2output(e) {
  keyOutput.innerHTML = `key: ${e.key}<br>
    keyCode: ${e.keyCode}<br>
    code: ${e.code}<br>
    Shift: ${e.shiftKey}<br>
    Ctrl: ${e.ctrlKey}<br>
    Alt: ${e.altKey}`;
}
function colorItem(number) {
  const item = document.querySelector(`ul#item-list li:nth-child(${number})`);
  item.classList.toggle('green');
}

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);
