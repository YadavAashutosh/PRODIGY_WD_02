let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

document.getElementById("startStop").addEventListener("click", () => {
  if (!isRunning) {
    timer = setInterval(updateTime, 1000);
    isRunning = true;
    document.getElementById("startStop").innerText = "Pause";
  } else {
    clearInterval(timer);
    isRunning = false;
    document.getElementById("startStop").innerText = "Start";
  }
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
  seconds = minutes = hours = 0;
  document.getElementById("display").innerText = "00:00:00";
  document.getElementById("startStop").innerText = "Start";
  document.getElementById("lapList").innerHTML = "";
});

document.getElementById("lap").addEventListener("click", () => {
  const lapTime = document.getElementById("display").innerText;
  const li = document.createElement("li");
  li.innerText = lapTime;
  document.getElementById("lapList").appendChild(li);
});

function updateTime() {
  seconds++;
  if (seconds === 60) { seconds = 0; minutes++; }
  if (minutes === 60) { minutes = 0; hours++; }
  
  const h = hours.toString().padStart(2, "0");
  const m = minutes.toString().padStart(2, "0");
  const s = seconds.toString().padStart(2, "0");
  document.getElementById("display").innerText = `${h}:${m}:${s}`;
}
