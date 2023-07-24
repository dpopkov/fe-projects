/*
==================================================================
target        - The element that triggered the event
currentTarget - The element that the event listener is attached to
type          - The type of event that was triggered
timeStamp
clientX   - The x position of the mouse relative to the window
clientY   - The y position of the mouse relative to the window
offsetX   - The x position relative to the element
offsetY   - The y position relative to the element
pageX     - The x position of the mouse relative to the page
pageY     - The y position of the mouse relative to the page
screenX   - The x position of the mouse relative to the screen
screenY   - The y position of the mouse relative to the screen
==================================================================
*/

const header = document.querySelector('header');
const img = document.querySelector('header > img');

function onClick(e) {
  // console.log(`target: ${e.target}`);
  // console.log(`currentTarget: ${e.currentTarget}`);

  // console.log(e.timeStamp);
  logPosition(e);
}

function logPosition(e) {
  console.log(`Client: x: ${e.clientX}, y: ${e.clientY}`);
  console.log(`Offset: x: ${e.offsetX}, y: ${e.offsetY}`);
  console.log(`Page: x: ${e.pageX}, y: ${e.pageY}`);
  console.log(`Screen: x: ${e.screenX}, y: ${e.screenY}`);
}
// header.addEventListener('click', onClick);
// img.addEventListener('click', onClick);
// document.body.addEventListener('click', onClick);

// --------------------------------
// Usage of preventDefault on event
// --------------------------------
const preventedLink = document.querySelector('#prevent-link');
preventedLink.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Clicked on this link', e.target);
});

const h1 = document.querySelector('header > h1');
function onDrag(e) {
  h1.textContent = `X = ${e.clientX}, Y = ${e.clientY}`;
}
img.addEventListener('drag', onDrag); // On chrome - OK, on firefox - Not Ok.
