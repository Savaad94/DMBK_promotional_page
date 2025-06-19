// === Player 1 ===
const DURATION1 = 215; 
const audio1 = document.getElementById('audio1');
const playBtn1 = document.getElementById('play-btn1');
const progress1 = document.getElementById('progress1');
const currentTimeEl1 = document.getElementById('current-time1');
progress1.max = DURATION1;

playBtn1.addEventListener('click', () => {
  if (audio1.paused) {
    audio1.play();
    playBtn1.textContent = '⏸';
  } else {
    audio1.pause();
    playBtn1.textContent = '▶';
  }
});

audio1.addEventListener('timeupdate', () => {
  progress1.value = audio1.currentTime;
  currentTimeEl1.textContent = formatTime(audio1.currentTime);
});

progress1.addEventListener('input', () => {
  audio1.currentTime = progress1.value;
});


// === Player 2 ===
const DURATION2 = 319; 
const audio2 = document.getElementById('audio2');
const playBtn2 = document.getElementById('play-btn2');
const progress2 = document.getElementById('progress2');
const currentTimeEl2 = document.getElementById('current-time2');
progress2.max = DURATION2;

playBtn2.addEventListener('click', () => {
  if (audio2.paused) {
    audio2.play();
    playBtn2.textContent = '⏸';
  } else {
    audio2.pause();
    playBtn2.textContent = '▶';
  }
});

audio2.addEventListener('timeupdate', () => {
  progress2.value = audio2.currentTime;
  currentTimeEl2.textContent = formatTime(audio2.currentTime);
});

progress2.addEventListener('input', () => {
  audio2.currentTime = progress2.value;
});


// === Player 3 ===
const DURATION3 = 215; 
const audio3 = document.getElementById('audio3');
const playBtn3 = document.getElementById('play-btn3');
const progress3 = document.getElementById('progress3');
const currentTimeEl3 = document.getElementById('current-time3');
progress3.max = DURATION3;

playBtn3.addEventListener('click', () => {
  if (audio3.paused) {
    audio3.play();
    playBtn3.textContent = '⏸';
  } else {
    audio3.pause();
    playBtn3.textContent = '▶';
  }
});

audio3.addEventListener('timeupdate', () => {
  progress3.value = audio3.currentTime;
  currentTimeEl3.textContent = formatTime(audio3.currentTime);
});

progress3.addEventListener('input', () => {
  audio3.currentTime = progress3.value;
});


// === Player 4 ===
const DURATION4 = 216; 
const audio4 = document.getElementById('audio4');
const playBtn4 = document.getElementById('play-btn4');
const progress4 = document.getElementById('progress4');
const currentTimeEl4 = document.getElementById('current-time4');
progress4.max = DURATION4;

playBtn4.addEventListener('click', () => {
  if (audio4.paused) {
    audio4.play();
    playBtn4.textContent = '⏸';
  } else {
    audio4.pause();
    playBtn4.textContent = '▶';
  }
});

audio4.addEventListener('timeupdate', () => {
  progress4.value = audio4.currentTime;
  currentTimeEl4.textContent = formatTime(audio4.currentTime);
});

progress4.addEventListener('input', () => {
  audio4.currentTime = progress4.value;
});


// === Tiempo formateado para todos ===
function formatTime(time) {
  const min = Math.floor(time / 60);
  const sec = Math.floor(time % 60).toString().padStart(2, '0');
  return `${min}:${sec}`;
}
