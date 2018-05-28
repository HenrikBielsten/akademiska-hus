import './takePictureView/infoArrow.js';
import './takePictureView/geolocation.js';
import './takePictureView/addFiles.js';
import './takePictureView/urgentModal.js';
import './takePictureView/continue.js';
import './takePictureView/hamburgerMenu.js';

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