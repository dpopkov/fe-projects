/* script.js
=====================================================
Description:

===================================================== */
'use strict';

window.onerror = function(message, url, line) {
    alert(`Error: ${message}\n\n${url}: ${line}`);
}

init();
function init() {
    // Disabling Styoes
    const toggleStylesButton = document.querySelector('button#toggle-styles');
    toggleStylesButton.onclick = event => {
        const link = document.querySelector('link#sample-css');
        link.disabled = !link.disabled;
    };

    // Event Listeners
    const printH1Button = document.querySelector('button#print-h1');
    printH1Button.onclick = event => {
        const h1 = document.querySelector('h1');
        console.log(h1.textContent);
    };
    printH1Button.addEventListener('click', function() {
        const h1 = document.querySelector('h1');
        h1.textContent = `${h1.textContent} CHANGED`;
    });
    
    // Event targets
    function doit(event) {
        console.log(event.currentTarget);
    }
    const figure = document.querySelector('figure');
    // figure.addEventListener('click', function(event) {
    //     console.log(this);
    //     console.log(event.target);
    //     console.log(event.currentTarget);
    // });
    figure.addEventListener('click', doit, false);
    const img = document.querySelector('img');
    img.addEventListener('click', doit, false);
}
