/* scriptname.js
=====================================================
Description:

===================================================== */
'use strict';

window.onerror = function(message, url, line) {
    alert(`Error: ${message}\n\n${url}: ${line}`);
}

init();
function init() {
    console.log('Hello Template');
    a = 12;
    console.log(a);
}
