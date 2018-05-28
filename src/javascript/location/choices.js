const chooseAreaButton = document.querySelector('.chooseCampus');
const contentContainer = document.querySelector('.chooseCampus .wrapper .content');

$('.chooseCampus .wrapper .parent').click(function(){

  $(chooseAreaButton).toggleClass('top',400);
  $(contentContainer).toggleClass('active');
  $('.chooseCampus .wrapper .parent .expand-icon').toggleClass('active');

});

$('.chooseBuilding .wrapper .parent').click(function(){

  $(".chooseCampus").toggle();
  $(contentContainer).removeClass("active");
  $(chooseAreaButton).removeClass("top");
  $(".chooseBuilding").toggleClass('top',400);
  $(".chooseBuilding .wrapper .content").toggleClass('active');
  $('.chooseBuilding .wrapper .parent .expand-icon').toggleClass('active');
  

});

$('.chooseCampus .wrapper .content ul li').click(function(){

  let choosenCampus = $(this).text();
  $('.chooseCampus .wrapper .parent p').text(choosenCampus);

});
