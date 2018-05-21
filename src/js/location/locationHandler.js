// const map = document.querySelector('.map');

document.getElementById("locationCord").innerHTML = localStorage.getItem("longitude");

var latint = parseFloat(localStorage.getItem("latitude").replace(',','.').replace(' ',''))
var lngint = parseFloat(localStorage.getItem("longitude").replace(',','.').replace(' ',''))

fetch('http://localhost:8888/api/buildings')
.then(response => response.json())
.then(data => {

  userCoordinates = {
    latitude: latint,
    longitude: lngint
  }

  var keys = Object.entries(data.data).map(([inst, key]) => key);
  var returnedBuilding =
    keys.reduce((prevCord, thing) => {
      var dist = getDistance(userCoordinates.latitude, userCoordinates.longitude, thing.latitude, thing.longitude);
      var prevDist = getDistance(userCoordinates.latitude, userCoordinates.longitude, prevCord.latitude, prevCord.longitude);
      return dist < prevDist? thing : prevCord;
  }, keys[0]);

  function getDistance(lat1, lon1, lat2, lon2)
{
  var R = 6371; // km
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c;
  return d;
}

// Converts numeric degrees to radians
function toRad(Value)
{
    return Value * Math.PI / 180;
}
console.log(returnedBuilding['building_name']);


document.getElementById("campus").innerHTML = returnedBuilding['campus'];
document.getElementById("building").innerHTML = returnedBuilding['building_name'];
})
