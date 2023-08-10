const hoursHand = document.querySelector(".hour-hand");
const minutesHand = document.querySelector(".min-hand");
const secondsHand = document.querySelector(".second-hand");
const timeD = document.querySelector(".time");

function setDate() {
  const now = new Date();
  const sec = now.getSeconds();
  const min = now.getMinutes();
  const hour = now.getHours();

  const secToDeg = sec * 6 + 90;
  const minToDeg = min * 6 + 90;
  const hoursToDeg = hour * 30 + 90;

  secondsHand.style.transform = `rotate(${secToDeg}deg)`;
  minutesHand.style.transform = `rotate(${minToDeg}deg)`;
  hoursHand.style.transform = `rotate(${hoursToDeg}deg)`;

  timeD.textContent = `${displayHours()}:${displayMinutes()}:${displaySeconds()}`;

  function displayMinutes() {
    if (min.toString().length < 2) {
      return `0${min.toString()}`;
    } else return min;
  }

  function displaySeconds() {
    if (sec.toString().length < 2) {
      return `0${sec.toString()}`;
    } else return sec;
  }

  function displayHours() {
    if (hour.toString().length < 2) {
      return `0${hour.toString()}`;
    } else return hour;
  }
}

setInterval(setDate, 1000);
