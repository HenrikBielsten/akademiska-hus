window.URL = window.URL || window.webkitURL;

var fileSelect = document.querySelector(".fileSelect"),
    fileElem = document.querySelector(".fileElem"),
    fileList = document.querySelector(".fileList"),
    imagePreview = document.querySelector(".imagePreview"),
    container = document.querySelector(".container"),
    startText = document.querySelector(".startText"),
    continueButton = document.querySelector(".continueButton"),
    continueIcon = document.querySelector(".continueIcon");
    info = document.querySelector(".info");
    instructions = document.querySelector(".instructions");

var filesArray = [];

var images = localStorage.getItem('images');

console.log(images);

if (images) {

  for (var i = 0; i < images.length; i++) {

    var img = document.createElement("img");
    img.classList.add('selectedImage');
    img.src = images[i];

    imagePreview.appendChild(img);
  }
}

console.log(filesArray);

if (filesArray.length < 4) {
  fileSelect.addEventListener("click", (e) => {
    if (filesArray.length >= 4) {
      return;
    }
    if (fileElem) {
      fileElem.click();
    }
    e.preventDefault();
  }, false);
}

function handleFiles(files) {

  if (files.length + filesArray.length > 4) {

    const tooManyContainer = document.createElement("div");
    tooManyContainer.classList.add('tooManyContainer');
    imagePreview.appendChild(tooManyContainer);

    const tooMany = document.createElement("div");
    tooMany.classList.add('tooMany');
    tooMany.innerHTML = "<p>Too many files</p>";
    tooManyContainer.appendChild(tooMany);
    return;
  } else {

    info.style.display = 'none';
    instructions.style.display = 'none';

    for (var i = 0; i < files.length; i++) {

      var img = document.createElement("img");
      img.classList.add('selectedImage');
      img.src = window.URL.createObjectURL(files[i]);
      img.onload = function() {
        window.URL.revokeObjectURL(this.src);
      }
      imagePreview.appendChild(img);

      filesArray.push(img);

      console.log(filesArray);

      localStorage.setItem('images', img.src);

      console.log(localStorage.getItem('images'));

      if (filesArray.length >= 1) {
        continueButton.style.pointerEvents = 'all';
        continueIcon.style.opacity = '1';
      }

      if (filesArray.length >= 4) {
        fileSelect.style.pointerEvents = "none";
        fileSelect.style.opacity = '0.45';
      }
    }
  }
}
