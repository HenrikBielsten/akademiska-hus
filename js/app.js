const infoArrow = document.querySelector('.infoArrow');

infoArrow.addEventListener("click", (e) => {
  info.style.display = 'none';
  instructions.style.display = 'flex';
})

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
    info = document.querySelector(".info");
    instructions = document.querySelector(".instructions");

var filesArray = [];

var images = localStorage.getItem('images');

console.log(images);

if (images) {

  for (var i = 0; i < images.length; i++) {

    var img = document.createElement("img");
    img.classList.add('selectedImage');
    img.src = images[i];

    imagePreview.appendChild(img);
  }
}

console.log(filesArray);

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

    info.style.display = 'none';
    instructions.style.display = 'none';

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

      localStorage.setItem('images', img.src);

      console.log(localStorage.getItem('images'));

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
const chooseAreaButton = document.querySelector('.chooseCampus');
const closeUrgentModalButton = document.querySelector('.closeUrgentModalIcon');
const contentContainer = document.querySelector('.chooseCampus .wrapper .content');


urgentIconSmall.addEventListener("click", (e) => {


  modalOverlay.style.opacity = '.2';
  urgentModal.style.transform = 'translateX(0px)';
  container.style.pointerEvents = 'none';

})

closeUrgentModalButton.addEventListener("click", (e) => {


  urgentModal.style.transform = 'translateX(-900px)';
  modalOverlay.style.opacity = '0';

  chooseAreaButton.className = chooseAreaButton.classList[0];
  contentContainer.className = contentContainer.classList[0];
  chooseAreaButton.classList.add("bottom");
  container.style.pointerEvents = 'all';

})


$('.chooseCampus .wrapper .parent').click(function(){

  $(chooseAreaButton).toggleClass('top',400);
  $(contentContainer).toggleClass('active');

});

const locationText2 = document.querySelector('.locationText-2');


continueButton.addEventListener("click", (e) => {

  localStorage.setItem("latitude",latitude);
  localStorage.setItem("longitude",longitude);
})

const hamburgerMenu = document.querySelector('.hamburgerMenu');
const hamburger = document.querySelector('.hamburger');
const hamburgerClose = document.querySelector('.hamburgerClose');

$(hamburger).click(function() {

    $(hamburgerMenu).animate({right: '0vw'}, "fast");

    hamburger.style.display = 'none';
    hamburgerClose.style.display = 'block';
});

$(hamburgerClose).click(function() {

  $(hamburgerMenu).animate({right: '-100vw'}, "fast");

  hamburger.style.display = 'block';
  hamburgerClose.style.display = 'none';
});
