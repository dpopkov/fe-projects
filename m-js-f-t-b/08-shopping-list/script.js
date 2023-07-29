const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const filter = document.getElementById('filter');
const clearButton = document.getElementById('btn-clear');
let isEditMode = false;
const formBtn = itemForm.querySelector('button');

// ---------------
// Event Listeners
// ---------------
function addItemSubmit(e) {
  e.preventDefault();

  const itemName = itemInput.value.trim();
  // Validation
  if (itemName === '') {
    alert('Please enter non-empty item name');
    return;
  }
  if (isEditMode) {
    const itemToEdit = itemList.querySelector('.edit-mode');
    updateItem(itemToEdit, itemName);
  } else {
    if (checkIfItemExists(itemName)) {
      alert('That item already exists');
      return;
    }
    addItem(itemName);
  }
  itemInput.value = '';
  changeStylesForUiState();
}

function updateItem(itemToEdit, itemNewName) {
  const oldItemName = itemToEdit.firstChild.textContent.trim();
  itemToEdit.firstChild.textContent = itemNewName;
  removeItemFromStorage(oldItemName);
  addItemToStorage(itemNewName);
  setItemFromEdit(itemToEdit);
}

function addItem(itemName) {
  addItemToDOM(itemName);
  addItemToStorage(itemName);
}

function addItemToDOM(itemName) {
  itemList.insertAdjacentElement('beforeend', createItemListItem(itemName));
}

function createItemListItem(itemName) {
  const li = document.createElement('li');
  li.insertAdjacentText('afterbegin', itemName);
  li.insertAdjacentElement('beforeend', createRemoveBtn());
  return li;
}

function addItemToStorage(itemName) {
  const items = getItemsFromStorage();
  items.push(itemName);
  saveItemsToLocalStorage(items);
}

function displayItemsFromStorage() {
  const items = getItemsFromStorage();
  items.forEach((item) => addItemToDOM(item));
  checkUI();
}

function getItemsFromStorage() {
  const itemsStr = localStorage.getItem('items');
  return itemsStr ? JSON.parse(itemsStr) : [];
}

function createRemoveBtn() {
  const removeBtn = document.createElement('span');
  removeBtn.className = 'remove-item';
  removeBtn.textContent = 'x';
  return removeBtn;
}

function checkIfItemExists(itemName) {
  const items = getItemsFromStorage();
  return items.includes(itemName);
}

function onClickItem(e) {
  if (e.target.classList.contains('remove-item')) {
    const li =
      e.target.parentElement.tagName === 'LI' ? e.target.parentElement : null;
    if (li !== null && li.parentElement.classList.contains('items')) {
      removeItemElement(li);
    }
  } else {
    console.log('edit');
    setItemToEdit(e.target);
  }
}

function setItemToEdit(itemElement) {
  isEditMode = true;
  itemList
    .querySelectorAll('li')
    .forEach((li) => li.classList.remove('edit-mode'));
  itemElement.classList.add('edit-mode');
  formBtn.classList.add('btn-edit-mode');
  formBtn.textContent = 'Update Item';
  itemInput.value = itemElement.firstChild.textContent.trim();
}

function setItemFromEdit(itemToEdit) {
  isEditMode = false;
  itemToEdit.classList.remove('edit-mode');
  formBtn.classList.remove('btn-edit-mode');
  formBtn.textContent = '+ Add Item';
}

function removeItemElement(element) {
  if (
    confirm(
      `Are you sure to remove "${element.firstChild.textContent.trim()}" item?`
    )
  ) {
    element.remove();
    const itemName = element.firstChild.textContent.trim();
    removeItemFromStorage(itemName);
    checkUI();
  }
}

function removeItemFromStorage(itemName) {
  const items = getItemsFromStorage();
  const itemsToSave = items.filter((name) => name !== itemName);
  if (itemsToSave.length !== items.length) {
    saveItemsToLocalStorage(itemsToSave);
  }
}

function saveItemsToLocalStorage(items) {
  localStorage.setItem('items', JSON.stringify(items));
}

function clearItemsInLocalStorage() {
  localStorage.removeItem('items');
}

function checkUI() {
  const listIsEmpty = document.querySelectorAll('#item-list > li').length === 0;
  changeStylesForUiState(listIsEmpty);
}

function changeStylesForUiState(listIsEmpty = false) {
  if (listIsEmpty) {
    filter.style.display = 'none';
    clearButton.style.display = 'none';
  } else {
    filter.style.display = 'block';
    clearButton.style.display = 'block';
  }
}

function clearAllItems(e) {
  const ul = document.querySelector('ul#item-list ');
  // The simplest, but not the best way to remove all items:
  //   ul.innerHTML = '';

  // The preferred way:
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  clearItemsInLocalStorage();
  changeStylesForUiState(true);
}

function filterItems(e) {
  const filterStr = e.target.value.trim().toLowerCase();
  const items = itemList.querySelectorAll('li');
  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();
    item.style.display = itemName.includes(filterStr) ? 'flex' : 'none';
  });
}

// --------------
// Initialize app
// --------------
function init() {
  itemForm.addEventListener('submit', addItemSubmit);
  itemList.addEventListener('click', onClickItem);
  clearButton.addEventListener('click', clearAllItems);
  filter.addEventListener('input', filterItems);

  document.addEventListener('DOMContentLoaded', displayItemsFromStorage);
}
init();
