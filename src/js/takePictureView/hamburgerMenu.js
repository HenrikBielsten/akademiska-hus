const hamburgerMenu = document.querySelector('.hamburgerMenu');
const hamburger = document.querySelector('.hamburger');
const hamburgerClose = document.querySelector('.hamburgerClose');

$(hamburger).click(function() {

    $(hamburgerMenu).animate({right: '0vw'}, "fast");

    hamburger.style.display = 'none';
    hamburgerClose.style.display = 'block';
});

$(hamburgerClose).click(function() {

  $(hamburgerMenu).animate({right: '-100vw'}, "fast");

  hamburger.style.display = 'block';
  hamburgerClose.style.display = 'none';
});
