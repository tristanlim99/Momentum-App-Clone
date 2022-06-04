let clock = () => {
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let period = "AM";
  if (hrs == 0) {
    hrs = 12;
  } else if (hrs >= 12) {
    hrs = hrs - 12;
    period = "PM";
  }
  hrs = hrs < 10 ? "0" + hrs : hrs;
  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  let time = `${hrs}:${mins}:${secs} ${period}`;
  document.getElementById("clock").innerText = time;
  setTimeout(clock, 1000);
};
clock();

//greeting depending on time

let time = new Date().getHours();
let greeting;
if (time < 12) {
  greeting = "Ohayo,";
} else if (time < 18) {
  greeting = "Konnichiwa,";
} else {
  greeting = "Konbanwa,";
}
document.getElementById("greet").innerHTML = greeting;

// name input display

let dataName = document.getElementById("dataName");
let btn = document.getElementById("btn");
let showName = document.getElementById("showName");

function enterName() {
  showName.innerHTML = dataName.value + "!";
}
btn.addEventListener("click", enterName);

//background img depending on time

if (time < 12) {
  document.body.style.backgroundImage = "url('img/dayresto.jpg')";
} else if (time < 18) {
  document.body.style.backgroundImage = "url('img/noonresto.jpg')";
} else {
  document.body.style.backgroundImage = "url('img/nightresto.jpg')";
}

//
