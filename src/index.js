//Current date and time code:
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = week[now.getDay()];
let dayAndTime = document.querySelector("#date");
dayAndTime.innerHTML = `${day} ${hours}:${minutes}`;

//City and weather feature:

function weatherFeature(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-search");
  let apiKey = "5e96109715e693faebfe6b3b1afdacba";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`;
  axios.get(url).then(weatherFeature);
}

let citySubmit = document.querySelector("#search-form");
citySubmit.addEventListener("submit", search);

//Current location button

function searchLocation(position) {
  let apiKey = "5e96109715e693faebfe6b3b1afdacba";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(url).then(weatherFeature);
}

function myLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let locationButton = document.querySelector("#button");
locationButton.addEventListener("click", myLocation);

//Fahrenheit to Celsius

function toCelsius(event) {
  event.preventDefault();
  document.querySelector("#temperature").innerHTML = 17;
}

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", toCelsius);

//Celsius to Fahrenheit

function toFahrenheit(event) {
  event.preventDefault();
  document.querySelector("#temperature").innerHTML = 63;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", toFahrenheit);
