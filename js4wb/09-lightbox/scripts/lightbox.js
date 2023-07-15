/* lightbox.js
=====================================================
Description:

===================================================== */
'use strict';

window.onerror = function(message, url, line) {
    alert(`Error: ${message}\n\n${url}: ${line}`);
}

init();
function init() {
    doLightbox('div#catalogue');
}

function doLightbox(container) {
    const anchors = document.querySelectorAll(`${container}>a`);
    anchors.forEach(a => {
        // a.onclick = show;
        a.addEventListener('click', show);
    });

    // Create Pop-up Element
    const background = document.createElement('div');
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const figcaption = document.createElement('figcaption');
    background.id = 'lightbox-background';
    figure.id = 'lightbox';
    figure.appendChild(img);
    figure.appendChild(figcaption);
    document.body.appendChild(background);
    document.body.appendChild(figure);

    // Create Style Sheet for the created elements
    const style = document.createElement('style');
    document.head.insertAdjacentElement('afterbegin', style);
    style.sheet.insertRule(`
        div#lightbox-background {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            z-index: 1;
            background-color: rgb(0,0,0,0.5);
        }
    `);
    style.sheet.insertRule(`
        figure#lightbox {
            position: fixed;
            top: 50%; left: 50%; margin-right: -50%;
            transform: translate(-50%, -50%);
            z-index: 2;
        }
    `);

    // Showing and Hiding
    let currentAnchor;
    function show(event) {
        event.preventDefault();
        currentAnchor = event.currentTarget; // currentTarget - element that has the event listener
        loadImage();
    }
    function loadImage() {
        // Populate the img element
        img.src = currentAnchor.href;  
        const currentImage = currentAnchor.querySelector('img');
        figcaption.textContent = currentImage.alt; // target - element you actually clicked on

        // Show pop-up only when the image is loaded.
        img.onload = event => {
            background.style.display = figure.style.display = 'block';
            document.addEventListener('keydown', doKeys);
        }
    }


    background.onclick = hide;
    hide();
    function hide(event) {
        background.style.display = figure.style.display = 'none';
        document.removeEventListener('keydown', doKeys);
    }

    function doKeys(event) {
        event.preventDefault();

        switch(event.key) {
            case 'Esc': // Old version
            case 'Escape':
                hide();
                break;
            case 'Left':
            case 'ArrowLeft':
                prevImage();
                break;
            case 'Right':
            case 'ArrowRight':
                nextImage();
                break;
            case 'Home':
            case 'Up':
            case 'ArrowUp':
                firstImage();
                break;
            case 'End':
            case 'Down':
            case 'ArrowDown':
                lastImage();
                break;
        }
    }

    function prevImage() {
        if (currentAnchor.previousElementSibling) {
            currentAnchor = currentAnchor.previousElementSibling;
            loadImage();
        } else {
            lastImage();
        }
    }
    function nextImage() {
        if (currentAnchor.nextElementSibling) {
            currentAnchor = currentAnchor.nextElementSibling;
            loadImage();
        } else {
            firstImage();
        }
    }
    function firstImage() {
        currentAnchor = currentAnchor.parentNode.firstElementChild;
        loadImage();
    }
    function lastImage() {
        currentAnchor = currentAnchor.parentNode.lastElementChild;
        loadImage();
    }
}