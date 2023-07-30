const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');
let timerId = null;

function updateLoadingSeconds() {
  let seconds = parseInt(jokeElement.textContent.trim());
  if (isNaN(seconds)) {
    seconds = 0;
  }
  seconds = seconds + 1;
  jokeElement.textContent = seconds;
}

function startTimer() {
  timerId = setInterval(updateLoadingSeconds, 1000);
}

function stopTimer() {
  clearInterval(timerId);
  timerId = null;
}

function getJoke() {
  jokeElement.textContent = 'Loading...';
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        const data = JSON.parse(this.responseText);
        jokeElement.textContent = data.value;
      } else {
        console.error(`Response status ${this.status}`);
      }
      stopTimer();
    }
  };
  startTimer();
  xhr.send();
}

jokeBtn.addEventListener('click', getJoke);
