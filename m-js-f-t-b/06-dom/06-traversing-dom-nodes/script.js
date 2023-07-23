let out;

const parent = document.querySelector('.parent');

out = parent; // <div class="parent">

// ----------
// childNodes
// ----------
out = parent.childNodes; // NodeList(9) [ #text, <!--  Children  -->, #text, div.child, #text, div.child, #text, div.child, #text ]
// parent.childNodes.forEach((node) => console.log(node)); // It works!
out = parent.childNodes[1]; // <!--  Children  -->
out = parent.childNodes[3].textContent; // Child 1
out = parent.childNodes[5].textContent; // Child 2
parent.childNodes[3].textContent = 'Child One';
out = parent.firstChild; // #text "\n        "
out = out.nextSibling; // <!--  Children  -->
out = out.nextSibling; // #text "\n        "
out = out.nextSibling; // <div class="child">

// -----------
// Parent node
// -----------
const child = document.querySelector('div.child:nth-child(2)');
out = child.parentNode; // <div class="parent">

child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

// --------
// Siblings
// --------
const secondChild = document.querySelector('.child:nth-child(2)');
out = secondChild.textContent; // Child 2
out = secondChild.nextSibling.nextSibling.textContent; // Child 3
out = secondChild.previousSibling.previousSibling.textContent; // Child One

console.log(out);
