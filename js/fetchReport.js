/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ({

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(32);


/***/ }),

/***/ 32:
/***/ (function(module, exports) {

var buildingId = 1;

function fetchReport() {

  return fetch('http://localhost:8888/api/problem_reports').then(function (response) {
    return response.json();
  }).then(function (data) {

    var lastItem = data.data.pop();

    console.log(lastItem);

    document.getElementById("name").innerHTML = lastItem['name'];
    document.getElementById("email").innerHTML = lastItem['email'];
    document.getElementById("phone").innerHTML = lastItem['phone'];
    document.getElementById("message").innerHTML = lastItem['message'];

    $('.reportImg').attr('src', './Ahuslaravelapp' + lastItem['image_1']);

    return fetch('http://localhost:8888/api/buildings').then(function (response) {
      return response.json();
    }).then(function (data) {

      console.log(data.data.find(function (x) {
        return x.id === buildingId;
      }));

      var returnedBuilding = data.data.find(function (x) {
        return x.id === buildingId;
      });

      document.getElementById("address").innerHTML = returnedBuilding['building_address'];
      document.getElementById("building").innerHTML = returnedBuilding['building_name'];
    });
  });
}

fetchReport();

/***/ })

/******/ });