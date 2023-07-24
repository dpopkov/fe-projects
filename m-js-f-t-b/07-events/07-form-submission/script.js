const itemForm = document.getElementById('item-form');

function onSubmit(e) {
  e.preventDefault();
  console.log('submit event');

  const item = document.getElementById('item-input').value;
  const priority = document.getElementById('priority-input').value;

  if (item === '' || priority === '0') {
    alert('Please fill all fields');
    return;
  }
  console.log(item, priority);
}
// itemForm.addEventListener('submit', onSubmit);
itemForm.addEventListener('submit', onSubmit2);

// ----------------------
// using form.data object
// ----------------------
function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(itemForm);
  // console.log(formData);
  const item = formData.get('item');
  const priority = formData.get('priority');
  // console.log(item, priority);

  const entries = formData.entries();
  // console.log(entries);
  for (const entry of entries) {
    console.log(entry);
  }
}
