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



        var html = '<div class="box">' +
                      '<div class="boxWrapper">' +
                        '<div class="topSection">' +
                          '<div class="content">' +
                            '<h2>' + buildingValue.building_name + '</h2>' +
                            '<h2>' + buildingValue.campus + '</h2>' +
                            '<p class="status ' + value.status + '">' + '<span>Status</span>: ' + value.status + '</p>' +
                            '<p>' + 'Anmälningsnr: ' + value.report_id + '</p>' +
                            '<p>' + 'Inskickad: ' + value.created_at['date'].split(" ")[0] + '</p>' +
                        '</div>' +
                        '<div class="image">' +
                        '<img src="./Ahuslaravelapp' + value.image_1 + '" alt="">' +
                        '</div>' +
                      '</div>' +
                      '<textarea>' + value.message +'</textarea>' +
                      '</div>' +
                    '<div class="expand"></div>' +
                   '</div>';
        $('.container').append(html);
      }
      });
  });
})
})
}
fetchReports();


$(document).on('click', '.expand', function(){
    let targetParent  = $(this).parents('.box')[0];
    $(targetParent).toggleClass('active',400);
    console.log(this);
    $(this).toggleClass('active',400);
});
