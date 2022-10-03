const secondsDisplayed = document.getElementById("seconds");
const minutesDisplayed = document.getElementById("minutes");
const hoursDisplayed = document.getElementById("hours");
const daysDisplayed = document.getElementById("days");

const secIn1Day = 86400;
const secIn1Hour = 3600;
const secIn1Min = 60;

let today = new Date().getTime();
let launchDate = new Date(2022, 09, 18, 15, 58).getTime();
let interval = Math.floor((launchDate - today) / 1000); // interval in seconds

let days = Math.floor(interval / secIn1Day);
let hours = Math.floor((interval / secIn1Hour) % 24);
let minutes = Math.floor((interval / secIn1Min) % 60);
let seconds = interval % 60;

let trialSeconds = 41;
let trialMinutes = 50;
let trialHours = 23;
let trialDays = 08;

function displayCountdown() {
  seconds < 10
    ? (secondsDisplayed.textContent = "0" + seconds)
    : (secondsDisplayed.textContent = seconds);
  minutes < 10
    ? (minutesDisplayed.textContent = "0" + minutes)
    : (minutesDisplayed.textContent = minutes);
  hours < 10
    ? (hoursDisplayed.textContent = "0" + hours)
    : (hoursDisplayed.textContent = hours);
  days < 10
    ? (daysDisplayed.textContent = "0" + days)
    : (daysDisplayed.textContent = days);
}

function countdown() {
  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(interval);
  } else if (hours === 0) {
    days--;
    hours = 24;
  } else if (minutes === 0) {
    hours--;
    minutes = 60;
  } else if (seconds === 0) {
    minutes--;
    seconds = 60;
  } else {
    seconds--;
  }
}

setInterval(() => {
  countdown();
  displayCountdown();
}, 1000);

countdown();
