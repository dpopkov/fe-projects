// function onClear() {
//   alert('Clear Items (Not Recommended Way of Event Handling)');
// }

const clearBtn = document.querySelector('#btn-clear');

// -------------------------
// JavaScript Event Listener
// -------------------------
// clearBtn.onclick = function () {
//   console.log('Clear Items');
// };

// --------------------------------------
// addEventListener - the recommended way
// --------------------------------------
function logClear(event) {
  console.log('Clear All Items');
}
// clearBtn.addEventListener('click', (event) => console.log('addEventListener'));
clearBtn.addEventListener('click', logClear);

// ----------------------------------------
// Removing an event listener after timeout
// ----------------------------------------
// setTimeout(() => {
//   clearBtn.removeEventListener('click', logClear);
//   console.log('Event listener logClear removed');
// }, 5000);

// ------------------------------------
// Triggernig an event programmatically
// ------------------------------------
// setTimeout(() => clearBtn.click(), 3000);

function clearAllItemsMostSimpleWay() {
  const ul = document.querySelector('ul.items');
  ul.innerHTML = '';
}

function clearAllItems() {
  const ul = document.querySelector('ul.items');
  // const items = ul.querySelectorAll('li');
  // items.forEach((item) => ul.removeChild(item));
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}

clearBtn.addEventListener('click', clearAllItems);
