'use strict';

const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const stopBtn = document.getElementById('stop-btn');
const currentTime = document.getElementById('current-time');
const volume = document.getElementById('volume');

playBtn.addEventListener('click', () => audio.play());
pauseBtn.addEventListener('click', () => audio.pause());
stopBtn.addEventListener('click', (e) => {
  audio.pause();
  audio.currentTime = 0;
});
audio.addEventListener(
  'timeupdate',
  () => (currentTime.textContent = audio.currentTime)
);
volume.addEventListener('change', () => (audio.volume = volume.value));
