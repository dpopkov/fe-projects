/* ajax.js
=====================================================
Description:
An Introduction to Ajax.
===================================================== */
'use strict';

window.onerror = function(message, url, line) {
    alert(`Error: ${message}\n\n${url}: ${line}`);
}

init();
function init() {
    ajaxContent();
    ajaxSlideshow();
    ajaxLightbox();
    ajaxCountries();
}

function ajaxContent() {
    const links = document.querySelector('ul#links');
    const content = document.querySelector('div#content');

    links.onclick = event => {
        event.preventDefault();

        fetch(event.target.href)
            .then(response => response.text())
            .then(text => {
                content.innerHTML = text;
            });
    }
}

function ajaxSlideshow() {
    fetch('images/slides/slides.json')
        .then(response => response.json())
        .then(data => {
            doSlides(data, 'div#slides');
        });
}

function ajaxLightbox() {
    const catalogue = document.querySelector('div#catalogue');

    fetch('images/slides/slides.json')
        .then(response =>response.json())
        .then(data => {
            // build anchors from data
            data.forEach(item => {
                // create gallery element
                catalogue.insertAdjacentHTML(
                    'beforeend',
                    `<a href="${item.src}">
                        <img src="${item.src}" title="${item.caption}" alt="${item.caption}">
                    </a>
                    `
                );
            });
            doLightbox('div#catalogue');
        });
}

function ajaxCountries() {
    
}