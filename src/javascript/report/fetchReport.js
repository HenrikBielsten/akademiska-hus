const buildingId = 1;


function fetchReport() {

  return fetch('http://localhost:8888/api/problem_reports')
  .then(response => response.json())
  .then(data => {


    var lastItem = data.data.pop()

console.log(lastItem)

document.getElementById("name").innerHTML = lastItem['name'];
document.getElementById("email").innerHTML = lastItem['email'];
document.getElementById("phone").innerHTML = lastItem['phone'];
document.getElementById("message").innerHTML = lastItem['message'];

$('.reportImg').attr('src', './Ahuslaravelapp' + lastItem['image_1']);

return fetch('http://localhost:8888/api/buildings')
.then(response => response.json())
.then(data => {


console.log(data.data.find(x => x.id === buildingId));

let returnedBuilding = data.data.find(x => x.id === buildingId);


document.getElementById("address").innerHTML = returnedBuilding['building_address'];
document.getElementById("building").innerHTML = returnedBuilding['building_name'];



})


  })
}

fetchReport();
