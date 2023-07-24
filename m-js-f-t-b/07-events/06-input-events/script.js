const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.getElementById('app-title');

function onInput(e) {
  console.log(e.target.value);
  heading.textContent = e.target.value;
}
// --------------------------
// Input events on Text Input
// --------------------------
itemInput.addEventListener('input', onInput);

// ----------------------
// Input events on Select
// ----------------------
// priorityInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);

// ------------------------
// Input events on Checkbox
// ------------------------
function onChecked(e) {
  const isChecked = e.target.checked;
  console.log(isChecked);
  heading.textContent = isChecked ? 'Checked' : 'Not Checked';
}
checkbox.addEventListener('input', onChecked);

// ---------------------
// Fucus and Blur events
// ---------------------
function onFocus(e) {
  console.log('Input element is focused');
  e.target.style.outlineStyle = 'solid';
  e.target.style.outlineWidth = '1px';
  e.target.style.outlineColor = 'green';
}
function onBlur(e) {
  console.log('Input element is not fucused');
  e.target.style.outlineStyle = 'none';
}
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);
