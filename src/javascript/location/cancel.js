const cancelButton = document.querySelector('.cancelButton');

$(cancelButton).click(function () {

  setTimeout(function () {
    localStorage.clear();
    window.location.href = 'index.html';
  }, 200);

})
