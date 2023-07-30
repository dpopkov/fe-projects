function getData(endpoint, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', endpoint);
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        const data = JSON.parse(this.responseText);
        cb(data);
      } else {
        console.error(`Response code ${this.status}`);
      }
    }
  };

  setTimeout(() => {
    xhr.send();
  }, randomMilliseconds());
}

function randomMilliseconds() {
  return Math.floor(Math.random() * 3000) + 1000;
}

getData('./movies.json', (data) => {
  console.log(data);
  getData('./actors.json', (data) => {
    console.log(data);
    getData('./directors.json', (data) => {
      console.log(data);
    });
  });
});
