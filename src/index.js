function displayTemperature(response) {
  console.log(response.data);
  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temperature");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let weatherConditions = document.querySelector("#weather-conditions");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");

  cityElement.innerHTML = response.data.name;
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  weatherConditions.innerHTML = response.data.weather[0].description;
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

let city = "Rome";
let apiKey = "5e96109715e693faebfe6b3b1afdacba";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(url).then(displayTemperature);
