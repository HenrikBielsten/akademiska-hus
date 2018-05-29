const tooManyContainer = document.querySelector('.tooManyContainer');

function tooMany() {

  $(tooManyContainer).animate({top: '-6vh'}, 'fast');

  setTimeout(function () {
    $(tooManyContainer).animate({top: '-21vh'}, 'fast');
  }, 2000);
}
