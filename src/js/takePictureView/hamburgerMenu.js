const hamburgerMenu = document.querySelector('.hamburgerMenu');
const hamburger = document.querySelector('.hamburger');

$(hamburger).click(function() {
  console.log('click');
  $(hamburgerMenu).animate({right: '0vw'}, "fast");
});
