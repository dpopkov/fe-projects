'use strict';

// ---------------------
// Test with response.ok
// ---------------------
function getHttpCodeResponseByOk(code) {
  fetch(`https://httpstat.us/${code}`)
    .then((resp) => {
      console.log('ok:', resp.ok);
      console.log('status:', resp.status);
      console.log('statusText:', resp.statusText);
      if (!resp.ok) {
        throw new Error('Request Failed');
      }
      resp.text();
    })
    .then((data) => console.log(data))
    .catch((err) => console.error('Catched error:', err));
}

// -------------------------
// Test with response.status
// -------------------------
function getHttpCodeResponseByStatus(code) {
  fetch(`https://httpstat.us/${code}`)
    .then((resp) => {
      console.log('ok:', resp.ok);
      console.log('status:', resp.status);
      console.log('statusText:', resp.statusText);
      if (resp.status === 404) {
        throw new Error('Not Found');
      } else if (resp.status === 500) {
        throw new Error('Server Error');
      } else if (resp.status !== 200) {
        throw new Error('Request Failed');
      }
      resp.text();
    })
    .then((data) => console.log(data))
    .catch((err) => console.error('Catched error:', err));
}

// function getHttpCodeResponse(code) {
//   fetch(`https://hello123.net/${code}`)
//     .then((resp) => resp.text())
//     .then((data) => console.log(data))
//     .catch((err) => console.error('Catched error:', err));
// }

const init = () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const code = document.querySelector('input#code-input').value.trim();
    getHttpCodeResponseByOk(code);
    // getHttpCodeResponseByStatus(code);
  });
};

init();
