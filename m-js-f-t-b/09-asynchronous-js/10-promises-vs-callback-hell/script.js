function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          const data = JSON.parse(this.responseText);
          resolve(data);
        } else {
          reject(
            `For endpoint "${endpoint}" received response code ${this.status}`
          );
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, randomMilliseconds());
  });
}

function randomMilliseconds() {
  const ms = Math.floor(Math.random() * 3000) + 1000;
  console.log(`generated ${ms} milliseconds`);
  return ms;
}

function logData(data) {
  console.log(data);
}
function logError(msg) {
  console.error(msg);
}

getData('./movies.json')
  .then((movies) => {
    logData(movies);
    return getData('./actors.json');
  })
  .then((actors) => {
    logData(actors);
    return getData('./directors.json');
  })
  .then((directors) => {
    logData(directors);
  })
  .catch(logError);
