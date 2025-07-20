let timer;
let seconds = 0;
let isRunning = false;

function updateDisplay() {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  document.getElementById('timer').textContent = `${minutes}:${secs}`;
}

document.getElementById('startBtn').addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
  }
});

document.getElementById('pauseBtn').addEventListener('click', () => {
  clearInterval(timer);
  isRunning = false;
});

document.getElementById('resetBtn').addEventListener('click', () => {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  updateDisplay();
});

updateDisplay(); // initial display
