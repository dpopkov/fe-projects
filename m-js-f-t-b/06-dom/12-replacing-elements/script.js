// -------------------
// using replaceWith()
// -------------------
function replaceFirstItem() {
  const firstItem = document.querySelector('li.item:first-child');

  const newLi = document.createElement('li');
  newLi.textContent = 'Replaced First Item';

  firstItem.replaceWith(newLi);
}

// ---------------
// using outerHTML
// ---------------
function replaceSecondItem() {
  const secondItem = document.querySelector('li.item:nth-child(2)');
  secondItem.outerHTML = '<li>Replaced Second Item</li>';
}

function replaceAllItems() {
  const all = document.querySelectorAll('li.item');
  all.forEach(
    (li, index) =>
      (li.outerHTML =
        index === 1
          ? '<li>Replaced Second Item</li>'
          : `<li>Replaced Item ${index + 1}</li>`)
  );
}

// --------------------
// using replaceChild()
// --------------------
function replaceChildHeading() {
  const header = document.querySelector('header');
  const h1 = header.querySelector('h1');

  const h2 = document.createElement('h2');
  h2.id = h1.id;
  h2.textContent = h1.textContent;
  header.replaceChild(h2, h1);
}

// replaceFirstItem();
// replaceSecondItem();
// replaceAllItems();
replaceChildHeading();
