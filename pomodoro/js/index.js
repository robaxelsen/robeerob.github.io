var alertSound = new Audio('./audio/ship_bell.mp3');
alertSound.loop = false;
window.pomodoroCountdownId;
window.pomodoroButtonPressed = false;
window.pomodoroResetButton = document.getElementById('resetbutton');
window.resetCheck = window.pomodoroResetButton.value;
window.minutesSelect = document.getElementById('minutes-select');
window.pomodoroTime = 25;
window.pomodoroTimeLeft = document.getElementById('timeleft');
window.pomodoroGoButton = document.getElementById('gobutton');
window.pomodoroResetButton.addEventListener('click', function() {
  window.resetCheck = true;
})
window.minutesSelect.addEventListener('change', function(event) {
  window.pomodoroTime = event.target.value;
})
window.pomodoroGoButton.addEventListener('click', function() {
  console.log(window.pomodoroTime);
  window.pomodoroCountdown();
})
// TODO: Change to minutes (instead of seconds), by implementing
// a countdown of minutes and seconds
// TODO: Decide on some css to animate depending on seconds and/or minutes,
// for example a hourglass, circle being filled with color, or filling a
// circle gradually like a piechart
window.pomodoroShowNextSecond = function() {
  if (window.resetCheck === true) {
    window.pomodoroTimeLeft.innerHTML = '0, reset.';
    return;
  };
  if (window.pomodoroTime > 0) {
    window.pomodoroTime --;
    window.pomodoroTimeLeft.innerHTML = window.pomodoroTime;
  } else if (window.pomodoroButtonPressed && window.pomodoroTime === 0) {
    window.pomodoroButtonPressed = false;
    alertSound.play();
  }
}
window.pomodoroCountdown = function() {
  if (window.pomodoroButtonPressed === false) {
    window.pomodoroButtonPressed = true;
    window.pomodoroCountdownId = setInterval(window.pomodoroShowNextSecond, 1000);
  }
}
