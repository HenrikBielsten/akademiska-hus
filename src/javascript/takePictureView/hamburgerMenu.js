const hamburgerMenu = document.querySelector('.hamburgerMenu');
const hamburger = document.querySelector('.hamburger');
const hamburgerClose = document.querySelector('.hamburgerClose');

$(hamburger).click(function() {

    $(hamburgerMenu).animate({right: '0vw'}, "fast");

    $(hamburgerMenu).show().css('display', 'flex');
    $(hamburger).hide(0);
    $(hamburgerClose).show().css('display', 'block');
});

$(hamburgerClose).click(function() {

  $(hamburgerMenu).animate({right: '-100vw'}, "fast");

  $(hamburgerMenu).delay(200).hide(0);

  $(hamburger).show().css('display', 'block');
  $(hamburgerClose).show().css('display', 'none');
});
