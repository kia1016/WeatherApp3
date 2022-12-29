import SelectedAreas from "./SelectedAreas";

var citySearch = document.querySelector("#search");
var submitBtn = document.querySelector("#submit-btn");
var cityResults = document.querySelector("#city-name");
var description = document.querySelector("#description");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var icon = document.querySelector("#icon");
var tempToggle = document.querySelector("#tempToggle");
var showFahr = true;

var listGroups = document.querySelector("#list-groups");
var cityData = document.querySelector("#citydata");
var cityDescript = document.querySelector("#citydescript");
var cityTemp = document.querySelector("#citytemp");
var cityWind = document.querySelector("#citywind");
var addSaved = document.querySelector("#addSaved");

var savedArea = new SelectedAreas();

addSaved.addEventListener("click", (event) => {
  let city = cityResults.innerHTML;
  let conditions = description.innerHTML;
  let degrees = temp.innerHTML;
  let breeze = wind.innerHTML;

  let climate = { city, conditions, degrees, breeze };
  savedArea.add(climate);

  let ul = document.createElement("ul");

  let li = document.createElement("li");
  li.classList.add("list-group-item");
  li.textContent = climate.city;

  //double click on saved location to remove

  li.addEventListener("dblclick", (event) => {
    li.parentNode.removeChild(li);
  });

  // let li2 = document.createElement("li");
  // li2.classList.add("list-group-item");
  // li2.textContent = climate.conditions;

  // let li3 = document.createElement("li");
  // li3.classList.add("list-group-item");
  // li3.textContent = climate.degrees;

  // let li4 = document.createElement("li");
  // li4.classList.add("list-group-item");
  // li4.textContent = climate.breeze;

  ul.appendChild(li);
  // ul.appendChild(li2);
  // ul.appendChild(li3);
  // ul.appendChild(li4);

  listGroups.appendChild(ul);
});

const weather = {};

const api = "";

tempToggle.addEventListener("click", (event) => {
  changeTempUnit();
});

function changeTempUnit() {
  showFahr = !showFahr;
  if (showFahr) {
    temp.innerHTML = `Temperature: ${fahrConversion(
      weather.temperature.value
    )}F`;
  } else {
    temp.innerHTML = `Temperature: ${celConversion(
      weather.temperature.value
    )}C`;
  }
}

function celConversion(val) {
  return Math.round(val - 273);
}

function fahrConversion(val) {
  return Math.round(1.8 * (val - 273) + 32);
}

submitBtn.addEventListener("click", () => {
  const url =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    citySearch.value +
    "&appid=" +
    api;
  fetch(url)
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      weather.city = data.name;
      weather.icon = data.weather[0].icon;
      weather.description = data.weather[0].description;
      weather.temperature = {};
      weather.temperature.value = data.main.temp;
      weather.windspeed = data.wind.speed;
    })
    .then(() => {
      displayWeather();
    })
    .catch((err) =>
      alert("This is an incorrect city name.  Please reenter again.")
    );

  function displayWeather() {
    cityResults.innerHTML = `Location: ${weather.city}`;
    icon.src = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;
    description.innerHTML = `Weather Outlook: ${weather.description}`;
    wind.innerHTML = `Wind Speed: ${weather.windspeed}km/h`;
    temp.innerHTML = `Temperature: ${fahrConversion(
      weather.temperature.value
    )}F`;
  }
});
