'use strict';

const container = document.querySelector('.container');
const generateBtn = container.querySelector('button#generate-btn');
const spinner = generateBtn.querySelector('.spinner');

function fetchUser() {
  showSpinner();
  fetch('https://randomuser.me/api/')
    .then((res) => {
      if (!res.ok) {
        throw new Error(
          `Request failed with code ${res.status}:${res.statusText}`
        );
      }
      res.json();
    })
    .then((data) => {
      console.log(data);
      hideSpinner();
      processUser(data.results[0]);
    })
    .catch((err) => {
      hideSpinner();
      console.error(err);
    });
}

function showSpinner() {
  spinner.classList.remove('hidden');
}
function hideSpinner() {
  spinner.classList.add('hidden');
}

generateBtn.addEventListener('click', fetchUser);

function processUser(user) {
  if (user.gender === 'female') {
    container.classList.remove('background-ml');
    container.classList.add('background-fml');
  } else if (user.gender === 'male') {
    container.classList.remove('background-fml');
    container.classList.add('background-ml');
  } else {
    // todo: handle
    return;
  }
  document.querySelector('#user-picture').src = user.picture.medium;
  document.querySelector(
    '#user-name'
  ).textContent = `${user.name.first} ${user.name.last}`;
  document.querySelector('#user-email').textContent = user.email;
  document.querySelector('#user-phone').textContent = user.phone;
  document.querySelector('#user-location').textContent = user.location.city;
  document.querySelector('#user-age').textContent = user.dob.age;
}
