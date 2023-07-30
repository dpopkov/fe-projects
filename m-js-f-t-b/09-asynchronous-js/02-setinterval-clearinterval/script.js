const h1 = document.querySelector('h1');
const startBtn = document.getElementById('btn-start');
const stopBtn = document.getElementById('btn-stop');
const intervalInput = document.getElementById('interval');
let intervalId;

function changeColor() {
  h1.classList.toggle('green');
}

startBtn.addEventListener('click', (e) => {
  if (!intervalId) {
    const intervalStr = intervalInput.value.trim();
    const interval = intervalStr ? parseInt(intervalStr) : 2000;
    console.log(`Setting interval ${interval}`);
    intervalId = setInterval(changeColor, interval);
  } else {
    alert('You need to stop the running timer');
  }
});
stopBtn.addEventListener('click', (e) => {
  if (intervalId) {
    clearInterval(intervalId);
    console.log(`Timer ${intervalId} cleared`);
    intervalId = null;
  }
});
