// const map = document.querySelector('.map');

document.getElementById("locationCord").innerHTML = localStorage.getItem("longitude");

var latint = parseFloat(localStorage.getItem("latitude").replace(',','.').replace(' ',''))
var lngint = parseFloat(localStorage.getItem("longitude").replace(',','.').replace(' ',''))

fetch('http://localhost:8888/api/buildings')
.then(response => response.json())
.then(data => {

  userCoords = {
    latitude: latint,
    longitude: lngint
  }

  const ok = Object.entries(data.data).map(([inst, key]) => key)
  .filter(thing => (thing.latitude > userCoords.latitude - .5 &&
     thing.latitude < userCoords.latitude + .5) &&
      (thing.longitude > userCoords.longitude -.5 &&
       thing.longitude < userCoords.longitude + .5));

console.log(ok[0]['building_name']);

document.getElementById("campus").innerHTML = ok[0]['building_name'];


})
