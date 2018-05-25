const chooseAreaButton = document.querySelector('.chooseCampus');
const contentContainer = document.querySelector('.chooseCampus .wrapper .content');

$('.chooseCampus .wrapper .parent').click(function(){
  // $(".chooseBuilding").toggle();
  $(chooseAreaButton).toggleClass('top',400);
  $(contentContainer).toggleClass('active');

});

$('.chooseBuilding .wrapper .parent').click(function(){
  $(".chooseCampus").toggle();
  $(contentContainer).removeClass("active");
  $(chooseAreaButton).removeClass("top");
  $(".chooseBuilding").toggleClass('top',400);
  $(".chooseBuilding .wrapper .content").toggleClass('active');

});
