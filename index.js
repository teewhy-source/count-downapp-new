// const hoursInput = document.getElementById("hours");
// const minutesInput = document.getElementById("minutes");
// const secondsInput = document.getElementById("seconds");
// const showTimerButton = document.getElementById("showTimer");
// const startCountdownButton = document.getElementById("startButton");
// const stopCountdownButton = document.getElementById("stopButton");
// const resetButton = document.getElementById("reset");
// const popupTimer = document.getElementById("popup");
// const canc = document.getElementById("cancel");

// const clickEl = document.getElementById("clicker");
// // const textEl = document.getElementById("text");

// showTimerButton.addEventListener("click", () => {
//   popupTimer.style.display = "flex";
// });

// canc.addEventListener("click", () => {
//   popupTimer.style.display = "none";
// });

// startCountdownButton.addEventListener("click", () => {
//   let hours = parseInt(hoursInput.value);
//   let minutes = parseInt(minutesInput.value);
//   let seconds = parseInt(secondsInput.value);

//   let totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;

//   let countdownElement = document.getElementById("countdown");

//   let countdownInterval = setInterval( () => {
//     if (totalTimeInSeconds <= 0) {
//       // clearInterval(countdownInterval);
//       countdownElement.textContent = "Countdown Finished!, YOU MADE IT";

//       return;
//     }

//     let remainingHours = Math.floor(totalTimeInSeconds / 3600);
//     let remainingMinutes = Math.floor((totalTimeInSeconds % 3600) / 60);
//     let remainingSeconds = totalTimeInSeconds % 60;

//     countdownElement.textContent = remainingHours + "h " + remainingMinutes + "m " + remainingSeconds + "s";

//     totalTimeInSeconds--;
//   }, 1000);
// });


// function resetCountdown() {
//   clearInterval(countdownInterval);
//   hoursInput.value = 0;
//   minutesInput.value = 0;
//   secondsInput.value = 0;
//   countdownElement.textContent = "";
// }

// resetButton.addEventListener("click", resetCountdown);

// stopCountdownButton.addEventListener("click", () => {
//   clearInterval(countdownInterval);
//   hoursInput.value = 0;
//   minutesInput.value = 0;
//   secondsInput.value = 0;
// });


const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const showTimerButton = document.getElementById("showTimer");
const startCountdownButton = document.getElementById("startButton");
// const stopCountdownButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");
const popupTimer = document.getElementById("popup");
const canc = document.getElementById("cancel");

const clickEl = document.getElementById("clicker");

showTimerButton.addEventListener("click", () => {
  popupTimer.style.display = "flex";
});

canc.addEventListener("click", () => {
  popupTimer.style.display = "none";
});

startCountdownButton.addEventListener("click", () => {
  let hours = parseInt(hoursInput.value);
  let minutes = parseInt(minutesInput.value);
  let seconds = parseInt(secondsInput.value);

  let totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;

  let countdownElement = document.getElementById("countdown");

  countdownInterval = setInterval(() => {
    if (totalTimeInSeconds <= 0) {
      clearInterval(countdownInterval);
      countdownElement.textContent = "Countdown Finished!, YOU MADE IT";

      return;
    }

    let remainingHours = Math.floor(totalTimeInSeconds / 3600);
    let remainingMinutes = Math.floor((totalTimeInSeconds % 3600) / 60);
    let remainingSeconds = totalTimeInSeconds % 60;

    countdownElement.textContent =
      remainingHours + "hours " + remainingMinutes + "minutes " + remainingSeconds + "seconds";

    totalTimeInSeconds--;
  }, 1000);
});

function resetCountdown() {
  clearInterval(countdownInterval);
  hoursInput.value = 0;
  minutesInput.value = 0;
  secondsInput.value = 0;
  countdownElement.textContent = "";
}

resetButton.addEventListener("click", resetCountdown);

stopCountdownButton.addEventListener("click", () => {
  clearInterval(countdownInterval);
  hoursInput.value = 0;
  minutesInput.value = 0;
  secondsInput.value = 0;
});

