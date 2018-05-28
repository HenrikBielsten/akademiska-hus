import { fetchBuilding } from './fetchBuilding.js';

    fetchBuilding().then(returnedBuilding => {

    document.getElementById("campus").innerHTML = returnedBuilding['campus'];
    document.getElementById("building").innerHTML = returnedBuilding['building_name'];
    document.querySelector(".popupAdress").innerHTML = returnedBuilding['building_address'];
    document.querySelector(".popupCampus").innerHTML = 'Campus: ' + returnedBuilding['campus'];
    document.querySelector(".popupBuilding").innerHTML = 'Byggnad: ' + returnedBuilding['building_name'];
});
