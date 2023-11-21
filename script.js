let hr = (min = sec = ms = "0" + 0),
  startTimer;

const startBtn = document.querySelector(".start"),
  stopBtn = document.querySelector(".stop"),
  resetBtn = document.querySelector(".reset"),
  recordBtn = document.querySelector(".record");

startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
recordBtn.addEventListener("click", record);

function start() {
  startBtn.classList.add("active");
  stopBtn.classList.remove("stopActive");

  startTimer = setInterval(() => {
    ms++;
    ms = ms < 10 ? "0" + ms : ms;

    if (ms == 100) {
      sec++;
      sec = sec < 10 ? "0" + sec : sec;
      ms = "0" + 0;
    }
    if (sec == 60) {
      min++;
      min = min < 10 ? "0" + min : min;
      sec = "0" + 0;
    }
    if (min == 60) {
      hr++;
      hr = hr < 10 ? "0" + hr : hr;
      min = "0" + 0;
    }

    putValue();
  }, 10);
}

function stop() {
  startBtn.classList.remove("active");
  stopBtn.classList.add("stopActive");
  clearInterval(startTimer);
}

function reset() {
  startBtn.classList.remove("active");
  stopBtn.classList.remove("stopActive");
  clearInterval(startTimer);
  hr = min = sec = ms = "0" + 0;
  putValue();
}

// function record() {
//   recordBtn.classList.toggle("active");
//   let timeRecorded = document.querySelector(".time-recorded").value;
//   console.log(hr, min, sec, ms);
//   const recordedTime = `${hr}:${min}:${sec}.${ms}`;
//   localStorage.setItem(`timer_${timeRecorded}`, recordedTime);
//   alert(`Your timer has been saved as ${timeRecorded}`);
// }

// function record() {
//   const timeRecorded = document.querySelector(".time-recorded").value;
//   const recordedTime = formatTime(timeRecorded);
//   localStorage.setItem(`timer_${timeRecorded}`, recordedTime);
//   alert(`Your timer has been saved as ${timeRecorded}`);
//  }
// function formatTime(timeRecorded) {
//   const time = new Date(timeRecorded * 1000).toISOString().substr(11, 8);
//   const [hr, min, sec] = time.split(':');
//   const [ms] = (sec + '00').substr(2, 3).split('');
//   return `${hr}:${min}:${sec}.${ms}`;
// }

function putValue() {
  document.querySelector(".millisecond").innerText = ms;
  document.querySelector(".second").innerText = sec;
  document.querySelector(".minute").innerText = min;
  document.querySelector(".hour").innerText = hr;
}
