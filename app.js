const elH1 = document.querySelector("[data-h1]");

const elDay = prompt("Day");
const elMonth = prompt("Month");
const elYear = prompt("Year");

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
let timer;

function countDown() {
  const date = new Date(`${elDay}-${elMonth}-${elYear} 00:00:00`) - new Date();
  const days = Math.floor(date / day);
  const hours = Math.floor((date % day) / hour);
  const minutes = Math.floor((date % hour) / minute);
  const seconds = Math.floor((date % minute) / second);

  elH1.innerHTML =
    days +
    " days " +
    hours +
    " hours " +
    minutes +
    " minutes " +
    seconds +
    " seconds";
}

timer = setInterval(countDown, second);
