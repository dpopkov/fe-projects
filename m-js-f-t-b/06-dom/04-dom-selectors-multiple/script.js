// --------------------------------------------
// document.querySelectorAll() returns NodeList
// --------------------------------------------
const listItems = document.querySelectorAll('.item');
console.log(listItems); // NodeList(4) [ li.item, li.item, li.item, li.item ]
console.log(listItems[1].innerText); // Orange Juice
console.log(listItems[1].innerText.length); // 12
console.log(listItems[1].textContent); // Orange Juice
console.log(listItems[1].textContent.length); // 12

listItems.forEach((item, index) => {
  item.style.color = 'red';

  if (index === 1) {
    item.remove();
  }
  if (index === 0) {
    // item.childNodes[0].textContent = 'Oranges';
    item.firstChild.textContent = 'Oranges';
  }
});

// ---------------------------------------------------------
// document.getElementsByClassName() returns HTMLCollection.
// document.getElementsByTagName() returns HTMLCollection.
// ---------------------------------------------------------
// const listItems2 = document.getElementsByClassName('item');
// console.log(listItems2); // HTMLCollection { 0: li.item, 1: li.item, 2: li.item, 3: li.item, length: 4 }
// // listItems2.forEach((item) => console.log(item)); // forEach is not a function!

// // Convert to Array using Array.from() works:
// const listItemsArray = Array.from(listItems2);
// listItemsArray.forEach((item) => console.log(item));

// const listItems3 = document.getElementsByTagName('li');
// console.log(listItems3); // HTMLCollection { 0: li.item, 1: li.item, 2: li.item, 3: li.item, length: 4 }
