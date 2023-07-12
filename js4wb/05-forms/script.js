/* script.js
=====================================================
Description:
Example of form processing without sending to a server.
===================================================== */
'use strict';

window.onerror = function(message, url, line) {
    alert(`Error: ${message}\n\n${url}: ${line}`);
}

init();
function init() {
    const form = document.querySelector('form#contact');
    form.elements['send'].onclick = processForm;
}

function processForm(event) {
    // Stop the default behavior of button - do not submit the form.
    event.preventDefault();

    console.log('Hello Form!');
}
