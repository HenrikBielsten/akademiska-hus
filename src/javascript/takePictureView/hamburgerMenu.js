const hamburgerMenu = document.querySelector('.hamburgerMenu');
const hamburger = document.querySelector('.hamburger');
const hamburgerClose = document.querySelector('.hamburgerClose');

$(hamburger).click(function() {

    $(hamburgerMenu).animate({right: '0vw'}, "fast");

    hamburgerMenu.style.display = 'flex';
    hamburger.style.display = 'none';
    hamburgerClose.style.display = 'block';
});

$(hamburgerClose).click(function() {

  $(hamburgerMenu).animate({right: '-100vw'}, "fast");

  setTimeout(function () {
    hamburgerMenu.style.display = 'none';
  }, 200);

  hamburger.style.display = 'block';
  hamburgerClose.style.display = 'none';
});
