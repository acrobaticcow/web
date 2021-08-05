const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

let minute = Number(minutes.value);
let second = Number(seconds.value);
let interval = setInterval(timer, 1000); 
seconds.value = '00'
minutes.value = '00'

function start() {
  pause();
  second;
  minute;
  interval = setInterval(timer, 1000);
}

function pause() {
    clearInterval(interval);
}

function reset() {
   pause();
   second
   minute
  minutes.value = '00';
  seconds.value = '00';
}

function timer () {
    if ((second -= 1 ) < 0) {
        second = 59;
        minute--;
    }
    if(minute == 0 && second == 0) {
        reset();
        alert('Congrat, now pump those number up')
    }
    seconds.value = formatTime(second);
    minutes.value = formatTime(minute);
}

function formatTime (time) {
    return time < 10 && time > 0 ? `0${time}` : time
}
document.getElementById('start').addEventListener('click',  start);
document.getElementById('reset').addEventListener('click',  reset);