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

// if (localStorage.getItem('images')) {
//   filesArray = localStorage.getItem('images');
// }

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

      localStorage.setItem('images', filesArray);

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
const campusListButtons = document.querySelectorAll('.urgentChooseArea li');
const contentContainer = document.querySelector('.urgentChooseArea .wrapper .content');


urgentIconSmall.addEventListener("click", (e) => {


  modalOverlay.style.opacity = '.2';
  urgentModal.style.transform = 'translateX(0px)';

})

closeUrgentModalButton.addEventListener("click", (e) => {


  urgentModal.style.transform = 'translateX(-900px)';
  modalOverlay.style.opacity = '0';

  chooseAreaButton.className = chooseAreaButton.classList[0];
  contentContainer.className = contentContainer.classList[0];
  chooseAreaButton.classList.add("bottom");

})

campusListButtons.forEach(campusListButton => campusListButton.addEventListener("click", e => {

// campusListButton.style.background = 'rgba(223,223,223,1';

}));

$('.urgentChooseArea .wrapper .parent').click(function(){
  // if ($(chooseAreaButton).hasClass("top")) {
  //   $(".urgentChooseArea .wrapper .content").css("max-height", "0");
  // } else {
  //   $(".urgentChooseArea .wrapper .content").css("max-height", "65vh");
  // }

  $(chooseAreaButton).toggleClass('top',400);
  $(contentContainer).toggleClass('active');
//   $(this).removeClass('bottom');
// $(this).addClass('top',400);
  // if ($(this).hasClass("bottom")) {
  //   $(this).removeClass('bottom');
  //   $(this).addClass('top',400);
  // } else if ($(this).hasClass("top")) {
  //   $(this).removeClass('top');
  //   $(this).addClass('bottom',400);
  // }
});

const locationText2 = document.querySelector('.locationText-2');


continueButton.addEventListener("click", (e) => {

  localStorage.setItem("latitude",latitude);
  localStorage.setItem("longitude",longitude);
})

const hamburgerMenu = document.querySelector('.hamburgerMenu');
const hamburger = document.querySelector('.hamburger');

$(hamburger).click(function() {
  console.log('click');
  $(hamburgerMenu).animate({right: '0vw'}, "fast");
});
