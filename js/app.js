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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(13);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__takePictureView_infoArrow_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__takePictureView_infoArrow_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__takePictureView_infoArrow_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__takePictureView_geolocation_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__takePictureView_geolocation_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__takePictureView_geolocation_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__takePictureView_addFiles_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__takePictureView_urgentModal_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__takePictureView_urgentModal_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__takePictureView_urgentModal_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__takePictureView_continue_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__takePictureView_continue_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__takePictureView_continue_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__takePictureView_hamburgerMenu_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__takePictureView_hamburgerMenu_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__takePictureView_hamburgerMenu_js__);







// var myLocation = "";
//
// function geoFindMe() {
//   var output = document.getElementById("out");
// 
//   if (!navigator.geolocation){
//     output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
//     return;
//   }
//
//   function success(position) {
//     var latitude  = position.coords.latitude;
//     var longitude = position.coords.longitude;
//     myLocation = latitude + ', ' + longitude;
//
//     console.log('Your location is: ' + myLocation);
//
//     // output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
//     //
//     // var img = new Image();
//     // img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
//     //
//     // output.appendChild(img);
//   }
//
//   function error() {
//     output.innerHTML = "Unable to retrieve your location";
//   }
//
//   navigator.geolocation.getCurrentPosition(success, error);
// }
//
// window.URL = window.URL || window.webkitURL;
//
// var fileSelect = document.querySelector(".fileSelect"),
//     fileElem = document.querySelector(".fileElem"),
//     fileList = document.querySelector(".fileList"),
//     imagePreview = document.querySelector(".imagePreview"),
//     container = document.querySelector(".container"),
//     startText = document.querySelector(".startText"),
//     continueButton = document.querySelector(".continueButton"),
//     continueIcon = document.querySelector(".continueIcon");
//
//
//
// const filesArray = [];
//
// if (filesArray.length < 4) {
//   fileSelect.addEventListener("click", (e) => {
//     if (filesArray.length >= 4) {
//       return;
//     }
//     if (fileElem) {
//       fileElem.click();
//     }
//     e.preventDefault();
//   }, false);
// }
//
// function handleFiles(files) {
//
//   if (files.length + filesArray.length > 4) {
//
//     const tooManyContainer = document.createElement("div");
//     tooManyContainer.classList.add('tooManyContainer');
//     imagePreview.appendChild(tooManyContainer);
//
//     const tooMany = document.createElement("div");
//     tooMany.classList.add('tooMany');
//     tooMany.innerHTML = "<p>Too many files</p>";
//     tooManyContainer.appendChild(tooMany);
//     return;
//   } else {
//
//     startText.innerHTML = "";
//
//     for (var i = 0; i < files.length; i++) {
//
//       var img = document.createElement("img");
//       img.classList.add('selectedImage');
//       img.src = window.URL.createObjectURL(files[i]);
//       img.onload = function() {
//         window.URL.revokeObjectURL(this.src);
//       }
//       imagePreview.appendChild(img);
//
//       filesArray.push(img);
//
//       console.log(filesArray);
//
//       if (filesArray.length >= 1) {
//         continueButton.style.pointerEvents = 'all';
//         continueIcon.style.opacity = '1';
//       }
//
//       if (filesArray.length >= 4) {
//         fileSelect.style.pointerEvents = "none";
//         fileSelect.style.opacity = '0.45';
//       }
//     }
//   }
// }
//
// const urgentIconSmall = document.querySelector('.urgentIconSmall');
// const urgentModalContainer = document.querySelector('.urgentModalContainer');
// const urgentModal = document.querySelector('.urgentModal');
// const modalOverlay = document.querySelector('.modalOverlay');
//
// urgentIconSmall.addEventListener("click", (e) => {
//
//   console.log('clicked');
//
//   urgentModal.style.transform = 'translateX(0px)';
//   modalOverlay.style.opacity = '.2';
//
// })
//
// const locationText2 = document.querySelector('.locationText-2');
// continueButton.addEventListener("click", (e) => {
//   console.log(filesArray);
//   console.log(myLocation);
//   var locationData = myLocation;
//   localStorage.setItem("locationCordinates",locationData);
// })

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var infoArrow = document.querySelector('.infoArrow');
var info = document.querySelector('.info');
var instructions = document.querySelector('.instructions');

infoArrow.addEventListener("click", function (e) {
  info.style.display = 'none';
  instructions.style.display = 'flex';
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var latitude = "";
var longitude = "";

var output = document.getElementById("out");

var button = document.querySelector('.fileSelect');

function success(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;

  localStorage.setItem('longitude', longitude);
  localStorage.setItem('latitude', latitude);
}

function error() {
  output.innerHTML = "Unable to retrieve your location";
}

button.addEventListener('click', function () {

  if (!navigator.geolocation) {
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  navigator.geolocation.getCurrentPosition(success, error);
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_resize_image__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_resize_image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_resize_image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_base_64__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_base_64___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_base_64__);



window.URL = window.URL || window.webkitURL;

var fileSelect = document.querySelector(".fileSelect"),
    fileElem = document.querySelector(".fileElem"),
    fileList = document.querySelector(".fileList"),
    imagePreview = document.querySelector(".imagePreview"),
    container = document.querySelector(".container"),
    startText = document.querySelector(".startText"),
    continueButton = document.querySelector(".continueButton"),
    continueIcon = document.querySelector(".continueIcon"),
    info = document.querySelector(".info"),
    instructions = document.querySelector(".instructions");

var filesArray = [];

console.log('img1: ' + localStorage.img1);
console.log('img2: ' + localStorage.img2);
console.log('img3: ' + localStorage.img3);
console.log('img4: ' + localStorage.img4);

if (filesArray.length < 4) {
  fileSelect.addEventListener("click", function (e) {
    if (filesArray.length >= 4) {
      return;
    }
    if (fileElem) {
      fileElem.click();
    }
    e.preventDefault();
  }, false);
}

// localStorage.clear();

function handleFiles(evt) {
  var files = evt.target.files; // FileList object

  // Loop through the FileList and render image files images.
  for (var i = 0, f; f = files[i]; i++) {

    // Only process image files.
    if (!f.type.match('image.*')) {
      continue;
    }

    var reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = function (theFile) {
      return function (e) {

        function getSliderSettings() {
          return {
            dots: true
          };
        }

        var imgDiv = document.createElement('div');
        var img = new Image();
        img.src = e.target.result;

        img.onload = function () {

          var data = __WEBPACK_IMPORTED_MODULE_0_resize_image___default.a.resize(img, 200, 100, __WEBPACK_IMPORTED_MODULE_0_resize_image___default.a.JPEG);
          var resized = new Image();
          resized.classList.add('selectedImage');
          resized.src = data; // local image url
          imgDiv.appendChild(resized);

          var encodedData = __WEBPACK_IMPORTED_MODULE_1_base_64___default.a.encode(data);

          // document.querySelector('.imagePreview').insertBefore(imgDiv, null);

          $(".single-item").append(imgDiv);

          $('.single-item').slick('unslick');
          $(".single-item").append(imgDiv);

          $('.single-item').slick(getSliderSettings());

          if (!localStorage.img1) {
            localStorage.setItem('img1', encodedData);
          }

          if (localStorage.img1 && !localStorage.img2) {
            localStorage.setItem('img2', encodedData);
          }

          if (localStorage.img1 && localStorage.img2 && !localStorage.img3) {
            localStorage.setItem('img3', encodedData);
          }

          if (localStorage.img1 && localStorage.img2 && localStorage.img3 && !localStorage.img4) {
            localStorage.setItem('img4', encodedData);
          }
        };

        console.log('img1: ' + localStorage.img1);
        console.log('img2: ' + localStorage.img2);
        console.log('img3: ' + localStorage.img3);
        console.log('img4: ' + localStorage.img4);

        info.style.display = 'none';
        instructions.style.display = 'none';
        $(".single-item").show();
      };
    }(f);

    filesArray.push(imgDiv);

    if (filesArray.length >= 1) {
      continueButton.style.pointerEvents = 'all';
      continueIcon.style.opacity = '1';
    }

    if (filesArray.length >= 4) {
      fileSelect.style.pointerEvents = "none";
      fileSelect.style.opacity = '0.45';
    }

    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
  }
}

// If there are images in localstorage we display them

document.querySelector('.fileElem').addEventListener('change', handleFiles, false);

if (localStorage.img) {

  info.style.display = 'none';
  instructions.style.display = 'none';

  var imgDiv = document.createElement('div');
  imgDiv.innerHTML += ['<img class="selectedImage" src="', localStorage.img, '" title="test"/>'].join('');

  document.querySelector('.imagePreview').insertBefore(imgDiv, null);

  if (filesArray.length >= 1) {
    continueButton.style.pointerEvents = 'all';
    continueIcon.style.opacity = '1';
  }

  if (filesArray.length >= 4) {
    fileSelect.style.pointerEvents = "none";
    fileSelect.style.opacity = '0.45';
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

(function(root, factory) {
  'use strict';
  /* istanbul ignore else  */
  if (true) {
    // CommonJS
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    define(function() {
      return factory();
    });
  } else if (typeof define === 'function' && define.cmd) {
    // CMD
    define(function(require, exports, module) {
      module.exports = factory();
    });
  } else {
    // Global Variables
    root.ResizeImage = factory();
  }
})(this, function () {
  'use strict';
  var out = {};

  var IMG_TYPE_PNG = 'png';
  var IMG_TYPE = [IMG_TYPE_PNG, 'gif', 'bmp', 'jpeg', 'webp'];

  for (var i = 0; i < IMG_TYPE.length; i++) {
    out[IMG_TYPE[i].toUpperCase()] = IMG_TYPE[i];
  }

  /**
   * 计算新图片宽高
   * @private
   * @param  {Image}  img    an <img> or Image() or <canvas>
   * @param  {number} width  output image width
   * @param  {number} height output image height
   * @return {array<number>} [ width, height ]
   */
  function getNewImageDimentions(img, width, height) {
    var detImg = img.width / img.height;
    if (width > 0 && height > 0) {
      // 同时指定了宽高，按原图缩放
      if (width / height > detImg) {
        height = width / detImg;
      } else {
        width = height * detImg;
      }
      return [ width, height ];
    } else if (width > 0) {
      // 只指定宽度的情况
      return [ width, width / detImg ];
    } else if (height > 0) {
      // 只指定高度的情况
      return [ height * detImg, height ];
    } else {
      // 否则原 size 返回
      return [ img.width, img.height ];
    }
  }

  /**
   * resize an <img> or <canvas> to canvas
   * @param  {Image}  img    an <img> or Image() or <canvas>
   * @param  {number} width  output image width
   * @param  {number} height output image height
   * @return {Canvas}        output image canvas
   */
  function resize2Canvas(img, width, height) {
    if (!img) {
      return img;
    }
    // 计算新图片的宽高
    var newImageDimentions = getNewImageDimentions(img, width, height);
    width = newImageDimentions[0];
    height = newImageDimentions[1];
    
    // 画到 canvas 中
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, width, height);
    return canvas;
  }
  out.resize2Canvas = resize2Canvas;

  /**
   * resize an <img> or <canvas> to base64
   * @param  {Image}  img    an <img> or Image() or <canvas
   * @param  {number} width  output image width
   * @param  {number} height output image height
   * @param  {string} type   output image type
   * @return {string}        output image base64 string
   */
  out.resize = function resize(img, width, height, type) {
    if (IMG_TYPE.indexOf(type) < 0) {
      type = IMG_TYPE_PNG;
    }
    var canvas = resize2Canvas(img, width, height);
    var ctx = canvas.getContext('2d');
    // set backgrund color to #fff while output type is NOT PNG
    if (type !== IMG_TYPE_PNG) {
      ctx.globalCompositeOperation = 'destination-over';
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = '';
    }
    return canvas.toDataURL('image/' + type);
  };

  return out;
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! http://mths.be/base64 v0.1.0 by @mathias | MIT license */
;(function(root) {

	// Detect free variables `exports`.
	var freeExports = typeof exports == 'object' && exports;

	// Detect free variable `module`.
	var freeModule = typeof module == 'object' && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code, and use
	// it as `root`.
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var InvalidCharacterError = function(message) {
		this.message = message;
	};
	InvalidCharacterError.prototype = new Error;
	InvalidCharacterError.prototype.name = 'InvalidCharacterError';

	var error = function(message) {
		// Note: the error messages used throughout this file match those used by
		// the native `atob`/`btoa` implementation in Chromium.
		throw new InvalidCharacterError(message);
	};

	var TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	// http://whatwg.org/html/common-microsyntaxes.html#space-character
	var REGEX_SPACE_CHARACTERS = /[\t\n\f\r ]/g;

	// `decode` is designed to be fully compatible with `atob` as described in the
	// HTML Standard. http://whatwg.org/html/webappapis.html#dom-windowbase64-atob
	// The optimized base64-decoding algorithm used is based on @atk’s excellent
	// implementation. https://gist.github.com/atk/1020396
	var decode = function(input) {
		input = String(input)
			.replace(REGEX_SPACE_CHARACTERS, '');
		var length = input.length;
		if (length % 4 == 0) {
			input = input.replace(/==?$/, '');
			length = input.length;
		}
		if (
			length % 4 == 1 ||
			// http://whatwg.org/C#alphanumeric-ascii-characters
			/[^+a-zA-Z0-9/]/.test(input)
		) {
			error(
				'Invalid character: the string to be decoded is not correctly encoded.'
			);
		}
		var bitCounter = 0;
		var bitStorage;
		var buffer;
		var output = '';
		var position = -1;
		while (++position < length) {
			buffer = TABLE.indexOf(input.charAt(position));
			bitStorage = bitCounter % 4 ? bitStorage * 64 + buffer : buffer;
			// Unless this is the first of a group of 4 characters…
			if (bitCounter++ % 4) {
				// …convert the first 8 bits to a single ASCII character.
				output += String.fromCharCode(
					0xFF & bitStorage >> (-2 * bitCounter & 6)
				);
			}
		}
		return output;
	};

	// `encode` is designed to be fully compatible with `btoa` as described in the
	// HTML Standard: http://whatwg.org/html/webappapis.html#dom-windowbase64-btoa
	var encode = function(input) {
		input = String(input);
		if (/[^\0-\xFF]/.test(input)) {
			// Note: no need to special-case astral symbols here, as surrogates are
			// matched, and the input is supposed to only contain ASCII anyway.
			error(
				'The string to be encoded contains characters outside of the ' +
				'Latin1 range.'
			);
		}
		var padding = input.length % 3;
		var output = '';
		var position = -1;
		var a;
		var b;
		var c;
		var d;
		var buffer;
		// Make sure any padding is handled outside of the loop.
		var length = input.length - padding;

		while (++position < length) {
			// Read three bytes, i.e. 24 bits.
			a = input.charCodeAt(position) << 16;
			b = input.charCodeAt(++position) << 8;
			c = input.charCodeAt(++position);
			buffer = a + b + c;
			// Turn the 24 bits into four chunks of 6 bits each, and append the
			// matching character for each of them to the output.
			output += (
				TABLE.charAt(buffer >> 18 & 0x3F) +
				TABLE.charAt(buffer >> 12 & 0x3F) +
				TABLE.charAt(buffer >> 6 & 0x3F) +
				TABLE.charAt(buffer & 0x3F)
			);
		}

		if (padding == 2) {
			a = input.charCodeAt(position) << 8;
			b = input.charCodeAt(++position);
			buffer = a + b;
			output += (
				TABLE.charAt(buffer >> 10) +
				TABLE.charAt((buffer >> 4) & 0x3F) +
				TABLE.charAt((buffer << 2) & 0x3F) +
				'='
			);
		} else if (padding == 1) {
			buffer = input.charCodeAt(position);
			output += (
				TABLE.charAt(buffer >> 2) +
				TABLE.charAt((buffer << 4) & 0x3F) +
				'=='
			);
		}

		return output;
	};

	var base64 = {
		'encode': encode,
		'decode': decode,
		'version': '0.1.0'
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return base64;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}	else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = base64;
		} else { // in Narwhal or RingoJS v0.7.0-
			for (var key in base64) {
				base64.hasOwnProperty(key) && (freeExports[key] = base64[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.base64 = base64;
	}

}(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module), __webpack_require__(9)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var urgentIconSmall = document.querySelector('.urgentIconSmall');
var urgentModalContainer = document.querySelector('.urgentModalContainer');
var urgentModal = document.querySelector('.urgentModal');
var modalOverlay = document.querySelector('.modalOverlay');
var chooseAreaButton = document.querySelector('.chooseCampus');
var closeUrgentModalButton = document.querySelector('.closeUrgentModalIcon');
var contentContainer = document.querySelector('.chooseCampus .wrapper .content');
var container = document.querySelector('.container');

urgentIconSmall.addEventListener("click", function (e) {

  modalOverlay.style.opacity = '.2';
  urgentModal.style.transform = 'translateX(0px)';
  container.style.pointerEvents = 'none';
});

closeUrgentModalButton.addEventListener("click", function (e) {

  urgentModal.style.transform = 'translateX(-900px)';
  modalOverlay.style.opacity = '0';

  chooseAreaButton.className = chooseAreaButton.classList[0];
  contentContainer.className = contentContainer.classList[0];
  chooseAreaButton.classList.add("bottom");
  container.style.pointerEvents = 'all';
});

$('.chooseCampus .wrapper .parent').click(function () {

  $(chooseAreaButton).toggleClass('top', 400);
  $(contentContainer).toggleClass('active');
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

var locationText2 = document.querySelector('.locationText-2');
var continueButton = document.querySelector('.continueButton');

continueButton.addEventListener("click", function (e) {

  localStorage.setItem("latitude", latitude);
  localStorage.setItem("longitude", longitude);

  console.log(filesArray);
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var hamburgerMenu = document.querySelector('.hamburgerMenu');
var hamburger = document.querySelector('.hamburger');
var hamburgerClose = document.querySelector('.hamburgerClose');

$(hamburger).click(function () {

  $(hamburgerMenu).animate({ right: '0vw' }, "fast");

  hamburger.style.display = 'none';
  hamburgerClose.style.display = 'block';
});

$(hamburgerClose).click(function () {

  $(hamburgerMenu).animate({ right: '-100vw' }, "fast");

  hamburger.style.display = 'block';
  hamburgerClose.style.display = 'none';
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);