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
    instructions = document.querySelector(".instructions");

var filesArray = [];

if (localStorage.images) {
  filesArray = JSON.parse(localStorage.getItem('images'));
}

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
  var files = evt.target.files; // FileList object

  // Loop through the FileList and render image files images.
  for (var i = 0, f; f = files[i]; i++) {

    // Only process image files.
    if (!f.type.match('image.*')) {
      continue;
    }

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

          var data = resizeImage.resize(img, 200, 100, resizeImage.JPEG);
          var resized = new Image();
          resized.classList.add('selectedImage');
          resized.src = data;
          imgDiv.appendChild(resized);

          var encodedData = base64.encode(data);

          // document.querySelector('.imagePreview').insertBefore(imgDiv, null);

          $(".single-item").append(imgDiv);

          $('.single-item').slick('unslick')
          $(".single-item").append(imgDiv);

          $('.single-item').slick(getSliderSettings());

          filesArray.push(encodedData)

          console.log(filesArray);

          localStorage.setItem('images', JSON.stringify(filesArray));

          console.log('images: ' + localStorage.images);

        };

        info.style.display = 'none';
        instructions.style.display = 'none';
        $(".single-item").show();
      };
    })(f);

    if (filesArray.length >= 1) {
      continueButton.style.pointerEvents = 'all';
      continueIcon.style.opacity = '1';
    }

    if (filesArray.length >= 4) {
      fileSelect.style.pointerEvents = "none";
      fileSelect.style.opacity = '0.45';
    }

    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
  }
}

document.querySelector('.fileElem').addEventListener('change', handleFiles, false);

// If there are images in localstorage we display them

if(localStorage.images) {

  info.style.display = 'none';
  instructions.style.display = 'none';

  for (var i = 0, f; f = filesArray[i]; i++) {

    // function getSliderSettings(){
    //   return {
    //     dots: true
    //   }
    // }

    var decodedData = base64.decode(filesArray[i]);

    var imgDiv = document.createElement('div');
    // var img = document.createElement('img');
    //
    // img.classList.add('selectedImage');
    // img.src = decodedData;
    // imgDiv.appendChild(img);
    //
    // $(".single-item").append(imgDiv);
    //
    // $('.single-item').slick('unslick');
    // $(".single-item").append(imgDiv);
    //
    // $('.single-item').slick(getSliderSettings());
    //
    // $(".single-item").show();

    imgDiv.innerHTML += ['<img class="selectedImage" src="', decodedData,
    '" title="test"/>'].join('');

    document.querySelector('.imagePreview').insertBefore(imgDiv, null);


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
