/* slideshow.js
=====================================================
Description:

===================================================== */
'use strict';

window.onerror = function(message, url, line) {
    alert(`Error: ${message}\n\n${url}: ${line}`);
}

init();
function init() {
    const dir = 'images/slides/'
    const images = [];
    for (let i = 1; i <= 8; i++) {
        images.push({
            src: `${dir}/description-${i}.jpg`, // имена файлов содержат description-N
            caption: `Description of image-${i}`
        });
    }

    doSlides(images, 'div#slides', 3000);
}
