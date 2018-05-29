const hamburgerMenu2 = document.querySelector('.hamburgerMenu2');
const hamburger2 = document.querySelector('.hamburger2');
const hamburgerClose2 = document.querySelector('.hamburgerClose2');

$(hamburger2).click(function() {

    $(hamburgerMenu2).animate({bottom: '0vh'}, "fast");
    hamburgerMenu2.style.display = 'flex';
});

$(hamburgerClose2).click(function() {

  $(hamburgerMenu2).animate({bottom: '-44vh'}, "fast");
  hamburgerMenu2.style.bottom = '-44vh';

  setTimeout(function () {
    hamburgerMenu2.style.display = 'none';
  }, 500);
});
