const timeDisplay = document.getElementById("time-display");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

let timer = null;
let seconds = 0;

// Format the time as HH:MM:SS
function formatTime(secs) {
  const hours = String(Math.floor(secs / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
  const remainingSecs = String(secs % 60).padStart(2, "0");
  return `${hours}:${minutes}:${remainingSecs}`;
}

// Start the stopwatch
startBtn.addEventListener("click", () => {
  if (timer) return; // Avoid multiple timers
  timer = setInterval(() => {
    seconds++;
    timeDisplay.textContent = formatTime(seconds);
  }, 1000);
});

// Stop the stopwatch
stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

// Reset the stopwatch
resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  timeDisplay.textContent = "00:00:00";
});
