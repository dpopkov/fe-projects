// -------------
// Window Events
// -------------

// ----------------------------------------------------------------------
// Uncaught TypeError: document.querySelector(...) is null
// ----------------------------------------------------------------------
// document.querySelector('h1').textContent = 'Hello script in the head';

// --------------------------------------------------------------------------------
// Using window.onload - waiting for the entire page to load.
// 'load' waits for the entire page loaded icluding images and any other resources.
// --------------------------------------------------------------------------------
// window.onload = function () {
//   document.querySelector('h1').textContent = 'Hello script in the head';
// };

// window.addEventListener('load', (e) => {
//   console.log('page loaded');
//   // document.querySelector('h1').textContent =
//   //   'Hello script in the head after load';
// });

// -------------------------------------------
// Using DOMContentLoaded
// DOMContentLoaded waits until DOM is loaded.
// -------------------------------------------
// window.addEventListener('DOMContentLoaded', (e) => {
//   console.log('DOM loaded');
//   document.querySelector('h1').textContent =
//     'Hello script in the head after DOMContentLoaded';
// });

// ---------------------------------------
// Using 'defer' attribute in <script>:
// <script src="script.js" defer></script>
// ---------------------------------------
document.querySelector('h1').textContent =
  'Hello script with defer in the head';

// ------------
// resize event
// ------------
window.addEventListener('resize', (e) => {
  document.querySelector(
    'h1'
  ).textContent = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});
