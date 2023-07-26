const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

// ---------------
// Event Listeners
// ---------------
function addItem(e) {
  e.preventDefault();

  const itemName = itemInput.value.trim();
  // Validation
  if (itemName === '') {
    alert('Please enter non-empty item name');
    return;
  }
  itemList.insertAdjacentElement('beforeend', createItemListItem(itemName));
  itemInput.value = '';
}

function createItemListItem(itemName) {
  const li = document.createElement('li');
  li.insertAdjacentText('afterbegin', itemName);
  li.insertAdjacentElement('beforeend', createRemoveBtn());
  return li;
}

function createRemoveBtn() {
  const removeBtn = document.createElement('span');
  removeBtn.className = 'remove-item';
  removeBtn.textContent = 'x';
  return removeBtn;
}
itemForm.addEventListener('submit', addItem);
