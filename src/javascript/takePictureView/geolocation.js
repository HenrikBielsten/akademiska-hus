var latitude = "";
var longitude = "";

const output = document.getElementById("out");
const button = document.querySelector('.fileSelect');

function success(position) {
  latitude  = position.coords.latitude;
  longitude = position.coords.longitude;

  localStorage.setItem('longitude', longitude)
  localStorage.setItem('latitude', latitude)

  console.log(latitude + ', ' + longitude);
}

function error() {
  output.innerHTML = "Unable to retrieve your location";

}

button.addEventListener('click', function () {

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  navigator.geolocation.getCurrentPosition(success, error);
});
