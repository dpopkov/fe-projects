// ---------------
// Quick and Dirty
// using innerHTML
// ---------------
function createListItem(item) {
  const li = document.createElement('li');
  li.innerHTML = `${item}
            <button class="remove-item btn-link">Remove</button>`;
  document.querySelector('#item-list').append(li);
}
createListItem('Lemons');

// --------------------
// Clean and Performant
// --------------------
function createNewItem(item) {
  const li = createLi(item);
  const button = createRemoveButton('remove-item btn-link');
  li.append(button);
  document.querySelector('#item-list').append(li);
}
createNewItem('Water');
createNewItem('Cheese');

function createRemoveButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  button.textContent = 'Remove';
  return button;
}

function createLi(text) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(text));
  return li;
}
