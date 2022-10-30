let secondHand = document.querySelector(".secHand");
let minuteHand = document.querySelector(".minHand");
let hourHand = document.querySelector(".hourHand");

function setDate() {
  let now = new Date();
  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  let hours = now.getHours();
  let secondsDegrees = (seconds / 60) * 360 + 90;
  let minutesDegrees = (minutes / 60) * 360 + 90;
  let hoursDegrees = hours * 30 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
