/* showing-hiding.js
=====================================================
Description:
Showing and Hiding Content.
===================================================== */
'use strict';

window.onerror = function(message, url, line) {
    alert(`Error: ${message}\n\n${url}: ${line}`);
}

init();

function init() {
    initTogglingHeadingContentIn('div#headings');
    initTogglingSubmenues('menu');
    doForm();
}

function initTogglingHeadingContentIn(container) {
    const headings = document.querySelectorAll(`${container} h2`);
    if (!headings.length) return;

    // Toggling the class
    headings.forEach(heading => {
        heading.onclick = toggleOpen;
    });

    let lastOpened = null;
    function toggleOpen(event) {
        if (lastOpened) {
            lastOpened.classList.remove('open');
        }
        // Если кликнул 2-й раз подряд, то обнулиться и не октрывать
        if (event.target == lastOpened) {
            lastOpened = null;
        } else {
            event.target.classList.add('open');
            lastOpened = event.target;
        }
    }
}

function initTogglingSubmenues(menuId) {
    const menuList = document.querySelector(`ul#${menuId}`);
    menuList.onclick = toggleSubmenu;

    function toggleSubmenu(event) {
        const subMenu = event.target.querySelector('ul');
        if (!subMenu) return;
        subMenu.classList.toggle('openmenu')
    }
}

function doForm() {
    const form = document.querySelector('form#music');
    const buttons = form.elements['musicalstyle'];

    deselectableRadio(buttons);
}

/* deselectableRadio(buttons)
=====================================================
Turns radio buttons in the specified group into 
deselectable radio buttons.
===================================================== */
function deselectableRadio(buttons) {
    deselectableRadio.selected ??= null;
    buttons.forEach(btn => {
        btn.onclick = event => {
            if (event.target == deselectableRadio.selected) {
                event.target.checked = false;
                deselectableRadio.selected = null;
            } 
            else {
                deselectableRadio.selected = event.target;
            }
        };
    })
}

