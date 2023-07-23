let out;

out = document.all.length; // 25 - number of elements in the document
out = document.documentElement; // html element
out = document.head;
out = document.body;
out = document.body.children; // direct children of the body
out = document.doctype; // <!DOCTYPE html>
out = document.domain; // 127.0.0.1  (deprecated)
out = document.URL; // http://127.0.0.1:5500/06-dom/02-document-properties/index.html
out = document.characterSet; // UTF-8
out = document.contentType; // text/html

out = document.forms; // HTMLCollection { 0: form#item-form, length: 1, … }
out = document.forms[0]; // <form id="item-form">
out = document.forms[0].id; // item-form
out = document.forms[0].method; // get
out = document.forms[0].action;

// out = document.forms[0].id = 'changed-form-id';

out = document.links; // HTMLCollection { length: 1 }
out = document.links[0]; // <a href="https://google.com">
out = document.links[0].href; // https://google.com/
out = document.links[0].id = 'google-link';
out = document.links[0].href = 'https://ya.ru';
out = document.links[0].className = 'google-class';
out = document.links[0].classList.add('one-more-class');

out = document.images;
// out = document.images[0];
// out = document.images[0].src;

// document.forms.forEach is not a function !
// document.forms.forEach((form) => console.log(form));

// This is the way of converting document.forms into array:
const forms = Array.from(document.forms);
// out = forms[0];  // <form id="item-form">
// forms.forEach((form) => console.log(form));

console.log(out);
