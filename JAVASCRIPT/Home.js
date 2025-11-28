var index = 0;
function normalSlider() {
  setTimeout(normalSlider, 2500);
  const slide = document.querySelectorAll(".offer-slide");
  var x;
  for (x = 0; x < slide.length; x++) {
    slide[x].classList.remove("active");
  }
  index++;
  if (index > slide.length) {
    index = 1;
  }
  slide[index - 1].classList.add("active");
}
normalSlider();

function countDownTimer() {
  setTimeout(countDownTimer, 1000);
  const days = document.getElementById("days"),
    hours = document.getElementById("hours"),
    minutes = document.getElementById("minutes"),
    seconds = document.getElementById("seconds");

  if (
    parseInt(seconds.innerHTML) === 0 &&
    parseInt(minutes.innerHTML) === 0 &&
    parseInt(hours.innerHTML) === 0 &&
    parseInt(days.innerHTML) === 0
  ) {
    return;
  } else if (parseInt(seconds.innerHTML) > 0) {
    seconds.innerHTML = String(parseInt(seconds.innerHTML) - 1).padStart(
      2,
      "0"
    );
  } else if (
    parseInt(seconds.innerHTML) === 0 &&
    parseInt(minutes.innerHTML) !== 0
  ) {
    seconds.innerHTML = "59";
    minutes.innerHTML = String(parseInt(minutes.innerHTML) - 1).padStart(
      2,
      "0"
    );
  } else if (
    parseInt(minutes.innerHTML) === 0 &&
    parseInt(hours.innerHTML) !== 0
  ) {
    seconds.innerHTML = "59";
    minutes.innerHTML = "59";
    hours.innerHTML = String(parseInt(hours.innerHTML) - 1).padStart(2, "0");
  } else if (
    parseInt(hours.innerHTML) === 0 &&
    parseInt(days.innerHTML) !== 0
  ) {
    seconds.innerHTML = "59";
    minutes.innerHTML = "59";
    hours.innerHTML = "23";
    days.innerHTML = String(parseInt(days.innerHTML) - 1).padStart(2, "0");
  }
}
countDownTimer();
