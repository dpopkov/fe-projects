const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const filter = document.getElementById('filter');
const clearButton = document.getElementById('btn-clear');

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
  changeStylesForUiState();
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

function removeItem(e) {
  if (e.target.tagName === 'SPAN' && e.target.textContent === 'x') {
    const li =
      e.target.parentElement.tagName === 'LI' ? e.target.parentElement : null;
    if (li !== null && li.parentElement.classList.contains('items')) {
      if (
        confirm(
          `Are you sure to remove "${li.firstChild.textContent.trim()}" item?`
        )
      ) {
        li.remove();
        checkUI();
      }
    }
  }
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
  changeStylesForUiState(true);
}

itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearButton.addEventListener('click', clearAllItems);
checkUI();
