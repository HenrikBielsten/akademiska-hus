const hamburgerMenu2 = document.querySelector('.hamburgerMenu2');
const hamburger2 = document.querySelector('.hamburger2');
const hamburgerClose2 = document.querySelector('.hamburgerClose2');



$(".hamburger2").click(function(){

  $(hamburgerMenu2).show().css('display', 'flex');
  $(hamburgerMenu2).animate({bottom: '0vh'});
});

$(hamburgerClose2).click(function() {

  $(hamburgerMenu2).animate({bottom: '-44vh'});
  $(hamburgerMenu2).delay(500).hide(0);
});
