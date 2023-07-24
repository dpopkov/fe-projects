const appTitle = document.querySelector('#app-title');
const itemInput = document.querySelector('#item-input');

const onClick = (event) => console.log('click event');
const onDoubleClick = (event) => {
  document.body.classList.toggle('green');
  console.log('dblclick event');
};
const onRightClick = (event) => {
  console.log('contextmenu event');
};
const onMouseDown = (event) => {
  console.log('mousedown event');
};
const onMouseUp = () => console.log('mouseup event');
function onMouseWheel() {
  this.count ??= 0;
  this.count++;
  itemInput.value = `count = ${this.count}`;
  console.log(`wheel event ${this.count}`);
}
const onMouseOver = () => {
  console.log('mouseover event');
  appTitle.classList.add('big-title');
};
const onMouseOut = () => {
  console.log('mouseout event');
  appTitle.classList.remove('big-title');
};
const onDragStart = (event) => {
  // event.preventDefault();
  console.log('dragstart event');
};
const onDrag = (event) => console.log('drag event');
const onDragEnd = (event) => console.log('dragend event');

// ---------------
// Event Listeners
// ---------------
appTitle.addEventListener('click', onClick);
appTitle.addEventListener('dblclick', onDoubleClick);
appTitle.addEventListener('contextmenu', onRightClick);
appTitle.addEventListener('mousedown', onMouseDown);
appTitle.addEventListener('mouseup', onMouseUp);
appTitle.addEventListener('wheel', onMouseWheel);

// appTitle.addEventListener('mouseover', onMouseOver);
// appTitle.addEventListener('mouseout', onMouseOut);

const img = document.querySelector('header > img');
img.addEventListener('dragstart', onDragStart);
// Drag start works on selected text:
appTitle.addEventListener('dragstart', onDragStart);

img.addEventListener('drag', onDrag);
img.addEventListener('dragend', onDragEnd);
