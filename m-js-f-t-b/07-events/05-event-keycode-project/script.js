const keyField = document.querySelector('#key-field');
const keyCodeField = document.querySelector('#key-code-field');
const codeField = document.querySelector('#code-field');

const showKeyCodes = (e) => {
  keyField.textContent = e.key === ' ' ? 'Space' : e.key;
  keyCodeField.textContent = e.keyCode;
  codeField.textContent = e.code;
};

document.body.addEventListener('keydown', showKeyCodes);
