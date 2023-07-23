function removeClearButton() {
  const clearBtn = document.querySelector('button#btn-clear');
  clearBtn.remove();
}

function removeFirstItem() {
  const parent = document.querySelector('ul#item-list');
  const first = parent.querySelector('li.item:first-child');
  parent.removeChild(first);
}

function removeItem(itemNumber) {
  const item = document.querySelector(`li.item:nth-child(${itemNumber})`);
  item.remove();
}

// removeFirstItem();
// removeClearButton();
removeItem(3);
