// ---------------------------------------------------------
// Adding event listener to everyone - not an efficient way.
// ---------------------------------------------------------
// const listItems = document.querySelectorAll('li');
// listItems.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     console.log(e.target.firstChild.textContent);
//   });
// });

// const listItemsBtns = document.querySelectorAll('li > button');
// console.log(listItemsBtns.length);
// listItemsBtns.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     e.target.parentElement.remove();
//   });
// });

// -------------------------------------------------
// Using Event Delegation - a powerful event pattern
// -------------------------------------------------
const list = document.querySelector('ul');
list.addEventListener('click', (e) => {
  console.log(`clicked on ${e.target.parentElement.nodeName}`);

  if (
    e.target.nodeName === 'BUTTON' &&
    e.target.parentElement.nodeName === 'LI'
  ) {
    e.target.parentElement.remove();
  }
});
