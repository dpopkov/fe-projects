/* script.js
=====================================================
Description:
1. Выбор элементов.
===================================================== */
'use strict';

window.onerror = function(message, url, line) {
    alert(`Error: ${message}\n\n${url}: ${line}`);
}

init();
function init() {
    const pBtn = document.querySelector('#p-btn');
    pBtn.onclick = selectParagraphs;
    const idBtn = document.querySelector('#id-btn');
    idBtn.onclick = selectIdInteresting;
    const classBtn = document.querySelector('#class-btn');
    classBtn.onclick = selectClassSpecial;
    const decendantsBtn = document.querySelector('#decendants-btn');
    decendantsBtn.onclick = selectDecendants;
    const listItemsBtn = document.querySelector('#list-items-btn');
    listItemsBtn.onclick = select2ndListItems;
    const capitalizeBtn = document.querySelector('#capitalize-list-items-btn');
    capitalizeBtn.onclick = capitalize2ndListItems;
    const changeFirstLastBtn = document.querySelector('#change-first-last-btn')
    changeFirstLastBtn.onclick = changeFirstLastItem;
    const addBtn = document.querySelector('#add-new-button');
    addBtn.onclick = addNewButton;
    const insertListBtn = document.querySelector('#insert-list-btn');
    insertListBtn.onclick = insertList;
}

function selectParagraphs() {
    const p = document.querySelectorAll('p');
    console.log(p);
}

function selectIdInteresting() {
    const p = document.querySelector('#interesting');
    console.log(p);
}

function selectClassSpecial() {
    const p = document.querySelectorAll('.special');
    console.log(p);
}

function selectDecendants() {
    const p = document.querySelectorAll('.separate-content p.section-item');
    console.log(p);
    p.forEach(e => {
        console.log(e.innerText);
    })
}

function select2ndListItems() {
    const p = document.querySelectorAll('.children-content .content-elements ul > li > ul > li');
    console.log(p);
    p.forEach(e => {
        console.log(e.innerText);
    })
}

function capitalize2ndListItems() {
    const p = document.querySelectorAll('.children-content .content-elements ul > li > ul > li');
    p.forEach(e => {
        e.innerText = e.innerText.toUpperCase();
    })
}

function changeFirstLastItem() {
    const p = document.querySelector('.children-content .content-elements > ul')
    p.firstElementChild.innerText =  p.firstElementChild.innerText.toUpperCase();
    p.lastElementChild.innerText =  p.lastElementChild.innerText.toUpperCase();
}

function addNewButton() {
    const title = prompt('Enter name for a new button:');
    const btn = document.createElement('button');
    btn.textContent = title;
    const buttons = document.querySelector('.buttons');
    buttons.prepend(btn);
}

function insertList() {
    const numItems = parseInt(prompt("Enter number of items:"));
    let html = "<ul>"
    for (let i = 1; i <= numItems; i++) {
        html += `<li>
            Item ${i}
        </li>`;
    }
    html += '</ul>';
    const mc = document.querySelector('.main-content > h2');
    mc.insertAdjacentHTML('afterend', html);
}