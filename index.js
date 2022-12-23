var citySearch = document.querySelector("#search");
var submitBtn = document.querySelector("#submit-btn");
var cityResults = document.querySelector("#city-name");
var description = document.querySelector("description");
var temp = document.querySeleector("temp");
var wind = document.querySelector("wind");

const api = "";

function celConversion(val) {
  return (val - 273).toFixed(2);
}

submitBtn.addEventListener("click", () => {
  console.log("data");
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=" +
      citySearch.value +
      "&APPID" +
      api
  )
    .then((response) => response.json())
    .then((data) => {
      var name = data["name"];
      var descript = data["weather"]["0"]["descript"];
      var temperature = data["main"]["temp"];
      var windsp = data["wind"]["speed"];

      cityResults.innerHTML = `Location: <span>${name}</span>`;
      temp.innerHTML = `Temperature: <span>${celConversion(
        temperature
      )}</span>`;
      description.innerHTML = `Weather Outlook: <span>${descript}</span>`;
      wind.innerHTML = `Wind Speed: <span>${windsp} km/h</span>`;
    })
    .catch((err) =>
      alert("This is an incorrect city name.  Please reenter again.")
    );
});
