document.querySelector('form button').addEventListener('click', (e) => {
  e.preventDefault(); // do not submit the form
  alert('button was clicked');
  // --------------------------------------
  // stopPropagation() stops event bubbling
  // --------------------------------------
  if (document.querySelector('#stop-on-button').checked) {
    e.stopPropagation();
  }
});

document
  .querySelector('form div:nth-child(2)')
  .addEventListener('click', (e) => {
    alert('div was clicked');
    if (document.querySelector('#stop-on-div').checked) {
      e.stopPropagation();
    }
  });

document.querySelector('form').addEventListener('click', (e) => {
  alert('form was clicked');
  if (document.querySelector('#stop-on-form').checked) {
    e.stopPropagation();
  }
});

document.querySelector('.container').addEventListener('click', (e) => {
  alert('container was clicked');
  if (document.querySelector('#stop-on-container').checked) {
    e.stopPropagation();
  }
});

document.querySelector('body').addEventListener('click', (e) => {
  alert('body was clicked');
});

// Don not bubble 'click' events on chekcboxes
function stopPropagationOnCheckboxes(e) {
  console.log('input on checkbox', e.target);
  e.stopPropagation();
}
document.querySelectorAll('input[type="checkbox"]').forEach((chbx) => {
  chbx.addEventListener('click', stopPropagationOnCheckboxes);
});
