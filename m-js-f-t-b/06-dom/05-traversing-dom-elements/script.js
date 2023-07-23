let out;
// ----------------------------------
// Get child elements from the parent
// ----------------------------------
const parent = document.querySelector('.parent');

out = parent; // <div class="parent">
out = parent.children; // HTMLCollection { 0: div.child, 1: div.child, 2: div.child, length: 3 }
out = parent.children[1]; // <div class="child">
out = parent.children[1].textContent; // Child 2
out = parent.children[1].className; // child
out = parent.children[1].nodeName; // DIV

parent.children[1].textContent = 'Child Two';
parent.children[1].style.color = 'red';

parent.firstElementChild.textContent = 'Child One';
parent.lastElementChild.textContent = 'Last Element';

// console.dir(out); // shows all properties

// --------------------------------
// Get parent elements form a child
// --------------------------------
const child = document.querySelector('.child');

out = child; // <div class="child">
out = child.parentElement; // <div class="parent">
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

// ----------------
// Sibling elements
// ----------------
const secondItem = document.querySelector('.child:nth-child(2)');
out = secondItem.textContent; // Child Two

out = secondItem.nextElementSibling.textContent; // Last Element
secondItem.nextElementSibling.style.color = 'green';
secondItem.previousElementSibling.style.color = 'blue';

console.log(out);
