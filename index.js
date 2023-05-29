function formatDate(dateDay) {
  let allDay = dateDay.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let hours = dateDay.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = dateDay.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let day = days[allDay];

  return `${day} ${hours}:${minutes}`;
}

function weather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
  let apiKey = "c819171fe0abdc14039af4ef5dda283b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchInput.value}&key=${apiKey}&units=metric`;
  function showTemperature(response) {
    let h2 = document.querySelector("h2");
    h2.innerHTML = `${Math.round(response.data.temperature.current)}°C`;
  }
  axios.get(apiUrl).then(showTemperature);
}
let form = document.querySelector("form");
form.addEventListener("submit", search);

function showPosition(position) {
  alert(
    `Your latitude is ${position.coords.latitude} and your longitude is ${position.coords.longitude}`
  );
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);
