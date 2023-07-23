// -----------------------------
// insertAdjacentElement example
// -----------------------------
function insertElement() {
  const filter = document.querySelector('.filter');
  const h1 = document.createElement('h1');
  h1.textContent = 'insertAdjacentElement';

  // filter.insertAdjacentElement('afterend', h1);
  filter.insertAdjacentElement('beforebegin', h1);
}

// --------------------------
// insertAdjacentText example
// --------------------------
function insertText() {
  const apples = document.querySelector('li:first-child');
  // apples.insertAdjacentText('beforeend', 'insertAdjacentText');
  apples.insertAdjacentText('afterend', 'insertAdjacentText');
}

// --------------------------
// insertAdjacentHTML example
// --------------------------
function insertHTML() {
  const clearBtn = document.querySelector('#btn-clear');
  clearBtn.insertAdjacentHTML('afterend', '<h2>insertAdjacentHTML</h2>');
}

// --------------------
// insertBefore example
// --------------------
function insertBeforeItem() {
  const ul = document.querySelector('ul#item-list');
  const insertedLi = document.createElement('li');
  insertedLi.textContent = 'insertBefore';

  const thirdItem = ul.querySelector('li:nth-child(3)');

  // Inserts the specified li element before the thirdItem
  ul.insertBefore(insertedLi, thirdItem);
}

// -----------------------------
// Custom insertAfter() function
// -----------------------------
function insertAfter(insertedElement, existingElement) {
  const nextElement = existingElement.nextElementSibling;
  const parent = existingElement.parentElement;
  parent.insertBefore(insertedElement, nextElement);
}

function insertAfterItem() {
  const ul = document.querySelector('ul#item-list');
  const insertedLi = document.createElement('li');
  insertedLi.textContent = 'insertAfter';
  const fourthItem = ul.querySelector('li:nth-child(4)');

  insertAfter(insertedLi, fourthItem);
}

insertElement();
insertText();
insertHTML();
insertBeforeItem();
insertAfterItem();
