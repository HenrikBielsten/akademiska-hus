const FakeUserId = 1;


function fetchReports() {

return fetch('http://localhost:8888/api/problem_reports')
.then(response => response.json())
.then(dataReports => {

return fetch('http://localhost:8888/api/buildings')
.then(response => response.json())
.then(dataBuildings => {

  $.each( dataReports.data, function( index, value ){
  $.each( dataBuildings.data, function( index2, buildingValue ){
      if (value.user_id == 1 && buildingValue.id == value.building_id) {

        if (value.status == "I kö") {
           let color = "grey";
        }

        if (value.status == "Pågående") {
          let color = "yellow";
        }

        if (value.status == "Färdig") {
          let color = "green";
        }

        var html = '<div class="box">' +
                      '<div class="content">' +
                        '<h2>' + buildingValue.building_name + '</h2>' +
                        '<h2>' + buildingValue.campus + '</h2>' +
                        '<p class="status ' + value.status + '">' + '<span>Status</span>: ' + value.status + '</p>' +
                        '<p>' + 'Anmälningsnr: ' + value.report_id + '</p>' +
                        '<p>' + 'Inskickad: ' + value.created_at['date'].split(" ")[0] + '</p>' +
                      '</div>' +
                   '</div>';



        $('.container').append(html);



      }
      });
  });



// console.log(dataBuildings.data);
// console.log(dataReports.data);
})
})
}
fetchReports();
