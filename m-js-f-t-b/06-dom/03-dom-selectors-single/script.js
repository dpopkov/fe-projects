// -------------------------
// document.getElementById()
// -------------------------
console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className);
console.log(document.getElementById('app-title').getAttribute('id'));

// --------------
// Set attributes
// --------------
document.getElementById('app-title').title = 'Shopping List';
document.getElementById('app-title').setAttribute('class', 'new-title');

// const title = document.getElementById('app-title');
// console.log(title);

// ------------------
// Get/Change content
// ------------------
const title = document.getElementById('app-title');
console.log(title.textContent);
title.textContent = 'Hello DOM';
title.innerText = 'Hello Inner Text';
title.innerHTML = '<em>Shopping</em> List';

// -------------
// Change Styles
// -------------
title.style.color = 'red';
title.getElementsByTagName('em')[0].style.color = 'blue';
title.style.backgroundColor = 'black';
title.style.padding = '10px';
title.style.borderRadius = '10px';

// ------------------------
// document.querySelector()
// ------------------------
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.new-title'));
console.log(document.querySelector('input[type="text"]'));

const secondItem = document.querySelector('li:nth-child(2)');
console.log(secondItem.textContent);
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'red';

// -----------------------------------
// Use these methods on other elements
// -----------------------------------
const list = document.querySelector('ul');
const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';
