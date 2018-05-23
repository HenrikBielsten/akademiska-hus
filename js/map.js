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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),

/***/ 6:
/***/ (function(module, exports) {

(function initMap() {

  definePopupClass();
  // Styles a map in night mode.
  var map = new google.maps.Map(document.querySelector('.map'), {
    center: { lat: 23.124124, lng: 32.123123 },
    zoom: 17,
    styles: [{
      featureType: "water",
      stylers: [{
        saturation: 43
      }, {
        lightness: -11
      }, {
        hue: "#0088ff"
      }]
    }, {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [{
        hue: "#ff0000"
      }, {
        saturation: -100
      }, {
        lightness: 99
      }]
    }, {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{
        color: "#808080"
      }, {
        lightness: 54
      }]
    }, {
      featureType: "landscape.man_made",
      elementType: "geometry.fill",
      stylers: [{
        color: "#ece2d9"
      }]
    }, {
      featureType: "poi.park",
      elementType: "geometry.fill",
      stylers: [{
        color: "#ccdca1"
      }]
    }, {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{
        color: "#767676"
      }]
    }, {
      featureType: "road",
      elementType: "labels.text.stroke",
      stylers: [{
        color: "#ffffff"
      }]
    }, {
      featureType: "poi",
      stylers: [{
        visibility: "on"
      }]
    }, {
      featureType: "landscape.natural",
      elementType: "geometry.fill",
      stylers: [{
        visibility: "on"
      }, {
        color: "#b8cb93"
      }]
    }, {
      featureType: "poi.park",
      stylers: [{
        visibility: "on"
      }]
    }, {
      featureType: "poi.sports_complex",
      stylers: [{
        visibility: "on"
      }]
    }, {
      featureType: "poi.medical",
      stylers: [{
        visibility: "on"
      }]
    }, {
      featureType: "poi.business",
      stylers: [{
        visibility: "on"
      }]
    }]
  });

  // setTimeout(function () {
  //
  //   var marker = new google.maps.Marker({
  //     animation: google.maps.Animation.DROP,
  //     position: {lat: 57.70536269999999, lng: 11.936256799999999},
  //     map: map,
  //     title: 'Hello World!'
  //   });
  // }, 1000);

  var popup = new Popup(new google.maps.LatLng(57.70536269999999, 11.936251799999999), document.querySelector('.popupContent'));
  popup.setMap(map);
})();

function definePopupClass() {
  /**
  * A customized popup on the map.
  * @param {!google.maps.LatLng} position
  * @param {!Element} content
  * @constructor
  * @extends {google.maps.OverlayView}
  */
  Popup = function Popup(position, content) {
    this.position = position;

    content.classList.add('popup-bubble-content');

    var pixelOffset = document.createElement('div');
    pixelOffset.classList.add('popup-bubble-anchor');
    pixelOffset.appendChild(content);

    this.anchor = document.createElement('div');
    this.anchor.classList.add('popup-tip-anchor');
    this.anchor.appendChild(pixelOffset);

    // Optionally stop clicks, etc., from bubbling up to the map.
    this.stopEventPropagation();
  };

  // NOTE: google.maps.OverlayView is only defined once the Maps API has
  // loaded. That is why Popup is defined inside initMap().
  Popup.prototype = Object.create(google.maps.OverlayView.prototype);

  /** Called when the popup is added to the map. */
  Popup.prototype.onAdd = function () {
    this.getPanes().floatPane.appendChild(this.anchor);
  };

  /** Called when the popup is removed from the map. */
  Popup.prototype.onRemove = function () {
    if (this.anchor.parentElement) {
      this.anchor.parentElement.removeChild(this.anchor);
    }
  };

  /** Called when the popup needs to draw itself. */
  Popup.prototype.draw = function () {
    var divPosition = this.getProjection().fromLatLngToDivPixel(this.position);
    // Hide the popup when it is far out of view.
    var display = Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000 ? 'block' : 'none';

    if (display === 'block') {
      this.anchor.style.left = divPosition.x + 'px';
      this.anchor.style.top = divPosition.y + 'px';
    }
    if (this.anchor.style.display !== display) {
      this.anchor.style.display = display;
    }
  };

  /** Stops clicks/drags from bubbling up to the map. */
  Popup.prototype.stopEventPropagation = function () {
    var anchor = this.anchor;
    anchor.style.cursor = 'auto';

    ['click', 'dblclick', 'contextmenu', 'wheel', 'mousedown', 'touchstart', 'pointerdown'].forEach(function (event) {
      anchor.addEventListener(event, function (e) {
        e.stopPropagation();
      });
    });
  };
}

/***/ })

/******/ });