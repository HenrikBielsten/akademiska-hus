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

// console.log(localStorage.img1);
// console.log(localStorage.img2);
// console.log(localStorage.img3);
// console.log(localStorage.img4);

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

// function handleFiles(files) {
//
//   if (files.length + filesArray.length > 4) {
//
//     const tooManyContainer = document.createElement("div");
//     tooManyContainer.classList.add('tooManyContainer');
//     imagePreview.appendChild(tooManyContainer);
//
//     const tooMany = document.createElement("div");
//     tooMany.classList.add('tooMany');
//     tooMany.innerHTML = "<p>Too many files</p>";
//     tooManyContainer.appendChild(tooMany);
//     return;
//   } else {
//
//     info.style.display = 'none';
//     instructions.style.display = 'none';
//
//     for (var i = 0; i < files.length; i++) {
//
//       var imgDiv = document.createElement("div");
//       imagePreview.appendChild(imgDiv);
//
//       var img = document.createElement("img");
//       img.classList.add('selectedImage');
//       img.src = window.URL.createObjectURL(files[i]);
//       img.onload = function() {
//         window.URL.revokeObjectURL(this.src);
//       }
//       imagePreview.appendChild(img);
//
//       filesArray.push(img);
//
//       console.log(filesArray);
//
//       localStorage.setItem('images', img.src);
//
//       console.log(localStorage.getItem('images'));
//
//       if (filesArray.length >= 1) {
//         continueButton.style.pointerEvents = 'all';
//         continueIcon.style.opacity = '1';
//       }
//
//       if (filesArray.length >= 4) {
//         fileSelect.style.pointerEvents = "none";
//         fileSelect.style.opacity = '0.45';
//       }
//     }
//   }
// }


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

        let image = ['<div><img class="selectedImage" src="', e.target.result,
                          '" title="', escape(theFile.name), '"/></div>'].join('');

        $(".single-item").append(image);

        $('.single-item').slick('unslick')
        $(".single-item").append(image);

        $('.single-item').slick(getSliderSettings());


        if (localStorage.img1) {
          localStorage.setItem('img2', e.target.result);
        }

        if (localStorage.img1 && localStorage.img2) {
          localStorage.setItem('img3', e.target.result);
        }

        if (localStorage.img1 && localStorage.img2 && localStorage.img3) {
          localStorage.setItem('img4', e.target.result);
        } else {
          localStorage.setItem('img1', e.target.result);
        }

        // console.log(localStorage.img1);
        // console.log(localStorage.img2);
        // console.log(localStorage.img3);
        // console.log(localStorage.img4);

        info.style.display = 'none';
        instructions.style.display = 'none';
        $(".single-item").show();
      };
    })(f);

    filesArray.push(imgDiv);

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


if(localStorage.img) {


  info.style.display = 'none';
  instructions.style.display = 'none';

  // for (var i = 0, f; f = localStorage.img[i]; i++) {

    var imgDiv = document.createElement('div');
    imgDiv.innerHTML += ['<img class="selectedImage" src="', localStorage.img,
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

  // }

  // localStorage.clear();

  }

  // (function () {
  //   // localStorage with image
  //   var storageFiles = JSON.parse(localStorage.getItem("storageFiles")) || {},
  //       elephant = document.getElementById("elephant"),
  //       storageFilesDate = storageFiles.date,
  //       date = new Date(),
  //       todaysDate = (date.getMonth() + 1).toString() + date.getDate().toString();
  //
  //   // Compare date and create localStorage if it's not existing/too old
  //   if (typeof storageFilesDate === "undefined" || storageFilesDate < todaysDate) {
  //       // Take action when the image has loaded
  //       elephant.addEventListener("load", function () {
  //           var imgCanvas = document.createElement("canvas"),
  //               imgContext = imgCanvas.getContext("2d");
  //
  //           // Make sure canvas is as big as the picture
  //           imgCanvas.width = elephant.width;
  //           imgCanvas.height = elephant.height;
  //
  //           // Draw image into canvas element
  //           imgContext.drawImage(elephant, 0, 0, elephant.width, elephant.height);
  //
  //           // Save image as a data URL
  //           storageFiles.elephant = imgCanvas.toDataURL("image/png");
  //
  //           // Set date for localStorage
  //           storageFiles.date = todaysDate;
  //
  //           // Save as JSON in localStorage
  //           try {
  //               localStorage.setItem("storageFiles", JSON.stringify(storageFiles));
  //           }
  //           catch (e) {
  //                   console.log("Storage failed: " + e);
  //           }
  //       }, false);
  //
  //       // Set initial image src
  //       elephant.setAttribute("src", "elephant.png");
  //   }
  //   else {
  //       // Use image from localStorage
  //       elephant.setAttribute("src", storageFiles.elephant);
  //   }

  function ResizeImage() {
    var filesToUpload = document.getElementById('imageFile').files;
    var file = filesToUpload[0];

    // Create an image
    var img = document.createElement("img");
    // Create a file reader
    var reader = new FileReader();
    // Set the image once loaded into file reader
    reader.onload = function(e) {
            img.src = e.target.result;

            var canvas = document.createElement("canvas");
            //var canvas = $("<canvas>", {"id":"testing"})[0];
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);

            var MAX_WIDTH = 400;
            var MAX_HEIGHT = 400;
            var width = img.width;
            var height = img.height;

            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            } else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }
            canvas.width = width;
            canvas.height = height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);

            var dataurl = canvas.toDataURL("image/png");
            document.getElementById('output').src = dataurl;
        }
        // Load files into file reader
    reader.readAsDataURL(file);
}
