const hamburgerMenu2 = document.querySelector('.hamburgerMenu2');
const hamburger2 = document.querySelector('.hamburger2');
const hamburgerClose2 = document.querySelector('.hamburgerClose2');

hamburger2.addEventListener('click', (e) => {

    hamburgerMenu2.style.bottom = '0vh';


});

hamburgerClose2.addEventListener('click', (e) => {

  hamburgerMenu2.style.bottom = '-44vh';

});

// $(hamburger2).click(function() {
//
//     $(hamburgerMenu2).animate({right: '0vw'}, "fast");
//
//     hamburger2.style.display = 'none';
//     hamburgerClose2.style.display = 'block';
// });
//
// $(hamburgerClose2).click(function() {
//
//   $(hamburgerMenu2).animate({right: '-100vw'}, "fast");
//
//   hamburger2.style.display = 'block';
//   hamburgerClose2.style.display = 'none';
// });
