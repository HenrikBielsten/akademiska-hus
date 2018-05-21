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

    // var img = new Image();
    // img.src = "https://maps.googleapis.com/maps/api/js?=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
    //
    // img.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCYHmuFEeJ7F_eeR15nQv5gftsYLixa4b0&callback=initMap";
    //
    // output.appendChild(img);

  }

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }

  navigator.geolocation.getCurrentPosition(success, error);
}
