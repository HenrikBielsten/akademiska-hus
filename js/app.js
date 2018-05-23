var latitude = "";
var longitude = "";
var myLocation = "";

function geoFindMe() {
  var output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    latitude  = position.coords.latitude;
    longitude = position.coords.longitude;
    myLocation = latitude + ', ' + longitude;

    console.log('Your location is: ' + myLocation);
  }

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }

  navigator.geolocation.getCurrentPosition(success, error);
}

window.URL = window.URL || window.webkitURL;

var fileSelect = document.querySelector(".fileSelect"),
    fileElem = document.querySelector(".fileElem"),
    fileList = document.querySelector(".fileList"),
    imagePreview = document.querySelector(".imagePreview"),
    container = document.querySelector(".container"),
    startText = document.querySelector(".startText"),
    continueButton = document.querySelector(".continueButton"),
    continueIcon = document.querySelector(".continueIcon");



const filesArray = [];

if (filesArray.length < 4) {
  fileSelect.addEventListener("click", (e) => {
    if (filesArray.length >= 4) {
      return;
    }
    if (fileElem) {
      fileElem.click();
    }
    e.preventDefault();
  }, false);
}

function handleFiles(files) {

  if (files.length + filesArray.length > 4) {

    const tooManyContainer = document.createElement("div");
    tooManyContainer.classList.add('tooManyContainer');
    imagePreview.appendChild(tooManyContainer);

    const tooMany = document.createElement("div");
    tooMany.classList.add('tooMany');
    tooMany.innerHTML = "<p>Too many files</p>";
    tooManyContainer.appendChild(tooMany);
    return;
  } else {

    startText.innerHTML = "";

    for (var i = 0; i < files.length; i++) {

      var img = document.createElement("img");
      img.classList.add('selectedImage');
      img.src = window.URL.createObjectURL(files[i]);
      img.onload = function() {
        window.URL.revokeObjectURL(this.src);
      }
      imagePreview.appendChild(img);

      filesArray.push(img);

      console.log(filesArray);

      if (filesArray.length >= 1) {
        continueButton.style.pointerEvents = 'all';
        continueIcon.style.opacity = '1';
      }

      if (filesArray.length >= 4) {
        fileSelect.style.pointerEvents = "none";
        fileSelect.style.opacity = '0.45';
      }
    }
  }
}

const urgentIconSmall = document.querySelector('.urgentIconSmall');
const urgentModalContainer = document.querySelector('.urgentModalContainer');
const urgentModal = document.querySelector('.urgentModal');
const modalOverlay = document.querySelector('.modalOverlay');
const chooseAreaButton = document.querySelector('.urgentChooseArea');
const closeUrgentModalButton = document.querySelector('.closeUrgentModalIcon');


urgentIconSmall.addEventListener("click", (e) => {

  console.log('clicked');

  // urgentModalContainer.style.display = 'flex';
  // modalOverlay.style.display = 'flex';
  modalOverlay.style.opacity = '.2';
  urgentModal.style.transform = 'translateX(0px)';

})

closeUrgentModalButton.addEventListener("click", (e) => {

  console.log('clicked');

  urgentModal.style.transform = 'translateX(-900px)';
  modalOverlay.style.opacity = '0';

})

chooseAreaButton.addEventListener("click", (e) => {
  // chooseAreaButton.style.top = 0;
})

    $(document).ready(function(){

      $(".urgentChooseArea").click(function() {

        $(".urgentChooseArea").animate(

          {

            top: 0


          }, 200, 'linear');

      });//animate

    });//Doc ready

const locationText2 = document.querySelector('.locationText-2');


continueButton.addEventListener("click", (e) => {
  console.log(filesArray);
  console.log(myLocation);

  localStorage.setItem("latitude",latitude);
  localStorage.setItem("longitude",longitude);
})
