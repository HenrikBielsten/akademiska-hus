import { fetchBuilding } from './fetchBuilding.js';

    fetchBuilding().then(returnedBuilding => {

    document.getElementById("campus").innerHTML = returnedBuilding['campus'];
    document.getElementById("building").innerHTML = returnedBuilding['building_name'];
    document.querySelector(".popupAdress").innerHTML = returnedBuilding['building_address'];
    document.querySelector(".popupCampus").innerHTML = returnedBuilding['campus'];
    document.querySelector(".popupBuilding").innerHTML = returnedBuilding['building_name'];
    localStorage.setItem('building_id', returnedBuilding['id']);
});


function fetchBuildings() {
return fetch('http://localhost:8888/api/buildings')
.then(response => response.json())
.then(data => {

  let resultCampus = [...new Set(data.data.map(o => o.campus))];

jQuery.each(resultCampus, function(index, item) {
    $(".chooseCampus .wrapper .content ul").append("<li><span class='campus_name'>" + this + "</span></li>");
});
})
}
fetchBuildings();
