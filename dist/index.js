/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/SelectedAreas.js":
/*!******************************!*\
  !*** ./src/SelectedAreas.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass SelectedAreas {\r\n  constructor() {\r\n    this.weather = [];\r\n  }\r\n\r\n  add(weather) {\r\n    this.weather.push(weather);\r\n  }\r\n\r\n  remove(weather) {\r\n    this.weather = this.weather.filter(\r\n      (existingWeather) => existingWeather != weather\r\n    );\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectedAreas);\r\n\n\n//# sourceURL=webpack://weather_app3/./src/SelectedAreas.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SelectedAreas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectedAreas */ \"./src/SelectedAreas.js\");\n\r\n\r\nvar citySearch = document.querySelector(\"#search\");\r\nvar submitBtn = document.querySelector(\"#submit-btn\");\r\nvar cityResults = document.querySelector(\"#city-name\");\r\nvar description = document.querySelector(\"#description\");\r\nvar temp = document.querySelector(\"#temp\");\r\nvar wind = document.querySelector(\"#wind\");\r\nvar icon = document.querySelector(\"#icon\");\r\nvar tempToggle = document.querySelector(\"#tempToggle\");\r\nvar showFahr = true;\r\n\r\nvar listGroups = document.querySelector(\"#list-groups\");\r\nvar cityData = document.querySelector(\"#citydata\");\r\nvar cityDescript = document.querySelector(\"#citydescript\");\r\nvar cityTemp = document.querySelector(\"#citytemp\");\r\nvar cityWind = document.querySelector(\"#citywind\");\r\nvar addSaved = document.querySelector(\"#addSaved\");\r\n\r\nvar savedArea = new _SelectedAreas__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\naddSaved.addEventListener(\"click\", (event) => {\r\n  let city = cityResults.innerHTML;\r\n  let conditions = description.innerHTML;\r\n  let degrees = temp.innerHTML;\r\n  let breeze = wind.innerHTML;\r\n\r\n  let climate = { city, conditions, degrees, breeze };\r\n  savedArea.add(climate);\r\n\r\n  let ul = document.createElement(\"ul\");\r\n\r\n  let li = document.createElement(\"li\");\r\n  li.classList.add(\"list-group-item\");\r\n  li.textContent = climate.city;\r\n\r\n  //double click on saved location to remove\r\n\r\n  li.addEventListener(\"dblclick\", (event) => {\r\n    li.parentNode.removeChild(li);\r\n  });\r\n\r\n  // let li2 = document.createElement(\"li\");\r\n  // li2.classList.add(\"list-group-item\");\r\n  // li2.textContent = climate.conditions;\r\n\r\n  // let li3 = document.createElement(\"li\");\r\n  // li3.classList.add(\"list-group-item\");\r\n  // li3.textContent = climate.degrees;\r\n\r\n  // let li4 = document.createElement(\"li\");\r\n  // li4.classList.add(\"list-group-item\");\r\n  // li4.textContent = climate.breeze;\r\n\r\n  ul.appendChild(li);\r\n  // ul.appendChild(li2);\r\n  // ul.appendChild(li3);\r\n  // ul.appendChild(li4);\r\n\r\n  listGroups.appendChild(ul);\r\n});\r\n\r\nconst weather = {};\r\n\r\nconst api = \"\";\r\n\r\ntempToggle.addEventListener(\"click\", (event) => {\r\n  changeTempUnit();\r\n});\r\n\r\nfunction changeTempUnit() {\r\n  showFahr = !showFahr;\r\n  if (showFahr) {\r\n    temp.innerHTML = `Temperature: ${fahrConversion(\r\n      weather.temperature.value\r\n    )}F`;\r\n  } else {\r\n    temp.innerHTML = `Temperature: ${celConversion(\r\n      weather.temperature.value\r\n    )}C`;\r\n  }\r\n}\r\n\r\nfunction celConversion(val) {\r\n  return Math.round(val - 273);\r\n}\r\n\r\nfunction fahrConversion(val) {\r\n  return Math.round(1.8 * (val - 273) + 32);\r\n}\r\n\r\nsubmitBtn.addEventListener(\"click\", () => {\r\n  const url =\r\n    \"http://api.openweathermap.org/data/2.5/weather?q=\" +\r\n    citySearch.value +\r\n    \"&appid=\" +\r\n    api;\r\n  fetch(url)\r\n    .then((response) => {\r\n      return response.json();\r\n    })\r\n\r\n    .then((data) => {\r\n      weather.city = data.name;\r\n      weather.icon = data.weather[0].icon;\r\n      weather.description = data.weather[0].description;\r\n      weather.temperature = {};\r\n      weather.temperature.value = data.main.temp;\r\n      weather.windspeed = data.wind.speed;\r\n    })\r\n    .then(() => {\r\n      displayWeather();\r\n    })\r\n    .catch((err) =>\r\n      alert(\"This is an incorrect city name.  Please reenter again.\")\r\n    );\r\n\r\n  function displayWeather() {\r\n    cityResults.innerHTML = `Location: ${weather.city}`;\r\n    icon.src = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;\r\n    description.innerHTML = `Weather Outlook: ${weather.description}`;\r\n    wind.innerHTML = `Wind Speed: ${weather.windspeed}km/h`;\r\n    temp.innerHTML = `Temperature: ${fahrConversion(\r\n      weather.temperature.value\r\n    )}F`;\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://weather_app3/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;