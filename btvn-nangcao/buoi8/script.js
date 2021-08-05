const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
let interval;
let hour = 0;
let minute = 0;
let second = 0;
hours.innerText = "00";
minutes.innerText = "00";
seconds.innerText = "00";

function pause() {
  clearInterval(interval);
}

function start() {
  pause();
  interval = setInterval(timer, 1000);
}

function reset() {
  pause();
  hour = 0;
  minute = 0;
  second = 0;
  hours.innerText = "00";
  minutes.innerText = "00";
  seconds.innerText = "00";
}

function timer() {
  if ((second += 1) == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 00;
    hour++;
  }
  hours.innerText = formatTime(hour);
  minutes.innerText = formatTime(minute);
  seconds.innerText = formatTime(second);
}

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

document.querySelector(".btn-start").addEventListener("click", start);
document.querySelector(".btn-pause").addEventListener("click", pause);
document.querySelector(".btn-reset").addEventListener("click", reset);
document.querySelector(".btn-save").addEventListener("click", save);

function save() {
  let save = document.querySelector(".save-list");
  let li = document.createElement("li");
  li.innerHTML = `# ${hours.innerText}:${minutes.innerText}:${seconds.innerText}`;
  save.prepend(li);
}
