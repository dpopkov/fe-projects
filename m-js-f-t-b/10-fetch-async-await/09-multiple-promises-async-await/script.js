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
  console.log('Catched:', msg);
}

const url = '../../09-asynchronous-js/10-promises-vs-callback-hell';

async function getAll() {
  try {
    const movies = await getData(url + '/movies.json');
    logData(movies);
    const actors = await getData(url + '/actors.json');
    logData(actors);
    const directors = await getData(url + '/directors.json');
    logData(directors);
  } catch (err) {
    logError(err);
  }
}

// getAll();
// console.log('This string does not wait for finishing all requests');

// ----------------------------
// Using async/await with fetch
// ----------------------------
async function getAllWithFetch() {
  const moviesRes = await fetch(url + '/movies.json');
  const movies = await moviesRes.json();
  logData(movies);
  const actorsRes = await fetch(url + '/actors.json');
  const actors = await actorsRes.json();
  logData(actors);
  const directorsRes = await fetch(url + '/directors.json');
  const directors = await directorsRes.json();
  logData(directors);
}

// getAllWithFetch();

// -------------------
// Using Promise.all()
// -------------------
async function getAllWithPromiseAll() {
  const [moviesRes, actorsRes, directorsRes] = await Promise.all([
    fetch(url + '/movies.json'),
    fetch(url + '/actors.json'),
    fetch(url + '/directors.json'),
  ]);

  const movies = await moviesRes.json();
  const actors = await actorsRes.json();
  const directors = await directorsRes.json();

  console.log(movies, actors, directors);
}

async function getAllWithPromiseAll2() {
  const [movies, actors, directors] = await Promise.all([
    fetch(url + '/movies.json').then((res) => res.json()),
    fetch(url + '/actors.json').then((res) => res.json()),
    fetch(url + '/directors.json').then((res) => res.json()),
  ]);

  console.log(movies, actors, directors);
}

// getAllWithPromiseAll();
getAllWithPromiseAll2();
