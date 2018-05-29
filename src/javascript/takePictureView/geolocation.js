var latitude = "";
var longitude = "";

const continueButton = document.querySelector(".continueButton");
const continueIcon = document.querySelector(".continueIcon");

const output = document.getElementById("out");
const button = document.querySelector('.fileSelect');

function success(position) {
  latitude  = position.coords.latitude;
  longitude = position.coords.longitude;

  localStorage.setItem('longitude', longitude)
  localStorage.setItem('latitude', latitude)

  console.log(latitude + ', ' + longitude);

  if (localStorage.images) {
    continueButton.style.pointerEvents = 'all';
    continueIcon.style.opacity = '1';
  }
}

function error() {
  $('.locationError').show().css('display', 'flex');
  $(".locationError").animate({left: '0vh'});

  $(".locationError .errorBox .close").click(function(){
    $(".locationError").animate({left: '-100vw'});
    $('.locationError').delay(300).hide(0);
  });
}

button.addEventListener('click', function () {

  navigator.geolocation.getCurrentPosition(success, error);
});
