const chooseAreaButton = document.querySelector('.chooseCampus');
const contentContainer = document.querySelector('.chooseCampus .wrapper .content');

$('.chooseCampus .wrapper .parent').click(function(){

  $(chooseAreaButton).toggleClass('top',400);
  $(contentContainer).toggleClass('active');
  $('.chooseCampus .wrapper .parent .expand-icon').toggleClass('active');

  if ($(".chooseBuilding .wrapper .content").hasClass("active")) {
    $(".chooseBuilding").toggleClass('top',400);
    $(".chooseBuilding .wrapper .content").toggleClass('active');
    $('.chooseBuilding .wrapper .parent .expand-icon').toggleClass('active');
 }



});



$('.chooseBuilding .wrapper .parent').click(function(){

  if ($(".chooseCampus .wrapper .parent").text() != "Campus") {


  $(".chooseBuilding").toggleClass('top',400);
  $(".chooseBuilding .wrapper .content").toggleClass('active');
  $('.chooseBuilding .wrapper .parent .expand-icon').toggleClass('active');

   if ($(contentContainer).hasClass("active")) {
  $(chooseAreaButton).toggleClass('top',400);
  $(contentContainer).toggleClass("active");
  $('.chooseCampus .wrapper .parent .expand-icon').toggleClass('active');
  }
}
});


$(document).on('click', '.chooseCampus .wrapper .content ul li', function(){
  let choosenCampus = $(this).text();
    $('.chooseCampus .wrapper .parent p').text(choosenCampus);



    fetch('http://localhost:8888/api/buildings')
    .then(response => response.json())
    .then(data => {

    jQuery.each(data.data, function(index, item) {

        if (this['campus'] == $(".chooseCampus .wrapper .parent").text()) {

            $(".chooseBuilding .wrapper .content ul").append("<li><span class='campus_name'>" + this['building_name'] + "</span></li>");
        }
    });
    })
});

$(document).on('click', '.chooseBuilding .wrapper .content ul li', function(){
  let choosenBuilding = $(this).text();

    $('.chooseBuilding .wrapper .parent p').text(choosenBuilding);
  });
