import resizeImage from 'resize-image';
import base64 from 'base-64';

window.URL = window.URL || window.webkitURL;

var fileSelect = document.querySelector(".fileSelect"),
    fileElem = document.querySelector(".fileElem"),
    fileList = document.querySelector(".fileList"),
    imagePreview = document.querySelector(".imagePreview"),
    container = document.querySelector(".container"),
    startText = document.querySelector(".startText"),
    continueButton = document.querySelector(".continueButton"),
    continueIcon = document.querySelector(".continueIcon"),
    info = document.querySelector(".info"),
    instructions = document.querySelector(".instructions"),
    tooManyContainer = document.querySelector('.tooManyContainer');

// Displays a message if you choose too many files
function tooMany() {
  $(tooManyContainer).animate({top: '-6vh'}, 'fast');
};

// Animates the message out of view agian on next page interaction
$(window).click(function(e) {
  $(tooManyContainer).animate({top: '-21vh'}, 'fast');
});

var filesArray = [];

// If there is anything in our localStorage we parse the string and sets the new values to our filesArray
if (localStorage.images) {
  filesArray = JSON.parse(localStorage.getItem('images'));
}

// Makes sure that you can't choose more than 4 pictures (this is if you try to add more after the limit has been reached)
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

// localStorage.clear();

function handleFiles(evt) {
  var files = evt.target.files; // These are the files chosen/pictures taken

  // Loops through the files, render images, resize images and save in localStorage
  for (var i = 0, f; f = files[i]; i++) {

    if (filesArray.length + files.length <= 4) {
      console.log('ok');

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {

          function getSliderSettings(){
            return {
              dots: true
            }
          }

          var imgDiv = document.createElement('div');
          var img = new Image();
          img.src = e.target.result;

          img.onload= function () {

            // Resize the image
            var data = resizeImage.resize(img, 414, 736, resizeImage.JPEG);
            var resized = new Image();
            resized.classList.add('selectedImage');
            resized.src = data;
            imgDiv.appendChild(resized);

            // Decode the data to base64 so we can save it in localStorage
            var encodedData = base64.encode(data);

            // Create a nice slider to display images
            $(".single-item").append(imgDiv);

            $('.single-item').slick('unslick')
            $(".single-item").append(imgDiv);

            $('.single-item').slick(getSliderSettings());

            // Add it to our filesArray
            filesArray.push(encodedData)

            // Takes the filesArray and creates a string of it. Then saves the string in localStorage.
            localStorage.setItem('images', JSON.stringify(filesArray));

            if (filesArray.length >= 1) {
              continueButton.style.pointerEvents = 'all';
              continueIcon.style.opacity = '1';
            }

            if (filesArray.length >= 4) {
              fileSelect.style.pointerEvents = "none";
              fileSelect.style.opacity = '0.45';
            }

          };

          info.style.display = 'none';
          instructions.style.display = 'none';

          $(".single-item").show();

        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    } else {
      console.log('too many');
      tooMany();
      return;
    }

  }
}

document.querySelector('.fileElem').addEventListener('change', handleFiles, false);

// If there are images in localstorage we display them
if (localStorage.images) {

  info.style.display = 'none';
  instructions.style.display = 'none';

  // Loops through the images in the filesArray (which is base64)
  for (var i = 0, f; f = filesArray[i]; i++) {

    // Decodes the base64
    var decodedData = base64.decode(filesArray[i]);

    // Creates the images and puts them in a nice slider
    var imgDiv = document.createElement('div');
    imgDiv.innerHTML += ['<img class="selectedImage" src="', decodedData,
    '" title="test"/>'].join('');

    $(".single-item").append(imgDiv);
    $(".single-item").show();

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
