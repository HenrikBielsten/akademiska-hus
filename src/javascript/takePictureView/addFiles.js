import resizeImage from 'resize-image';

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

console.log(localStorage.img1);
console.log(localStorage.img2);
console.log(localStorage.img3);
console.log(localStorage.img4);

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

localStorage.clear();

// function handleFiles(evt) {
//   var files = evt.target.files; // FileList object
//
//   // Loop through the FileList and render image files images.
//   for (var i = 0, f; f = files[i]; i++) {
//
//     // Only process image files.
//     if (!f.type.match('image.*')) {
//       continue;
//     }
//
//     var reader = new FileReader();
//
//     // Closure to capture the file information.
//     reader.onload = (function(theFile) {
//       return function(e) {
//
//         var imgDiv = document.createElement('div');
//         var img = new Image();
//         img.src = e.target.result;
//
//         img.onload= function () {
//           var data = resizeImage.resize(img, 200, 100, resizeImage.JPEG);
//
//           var resized = new Image();
//           resized.classList.add('selectedImage');
//           resized.src = data; // local image url
//           imgDiv.appendChild(resized);
//         };
//         // imgDiv.innerHTML = '<img class="selectedImage" src="', e.target.result,
//         //                   '" title="', escape(theFile.name), '"/>';
//
//         document.querySelector('.imagePreview').insertBefore(imgDiv, null);
//
//         if (localStorage.img1) {
//           localStorage.setItem('img2', e.target.result);
//         }
//
//         if (localStorage.img1 && localStorage.img2) {
//           localStorage.setItem('img3', e.target.result);
//         }
//
//         if (localStorage.img1 && localStorage.img2 && localStorage.img3) {
//           localStorage.setItem('img4', e.target.result);
//         } else {
//           localStorage.setItem('img1', e.target.result);
//         }
//
//         console.log(localStorage.img1);
//         console.log(localStorage.img2);
//         console.log(localStorage.img3);
//         console.log(localStorage.img4);
//
//
//         info.style.display = 'none';
//         instructions.style.display = 'none';
//       };
//     })(f);
//
//     filesArray.push(imgDiv);
//
//     if (filesArray.length >= 1) {
//       continueButton.style.pointerEvents = 'all';
//       continueIcon.style.opacity = '1';
//     }
//
//     if (filesArray.length >= 4) {
//       fileSelect.style.pointerEvents = "none";
//       fileSelect.style.opacity = '0.45';
//     }
//
//     // Read in the image file as a data URL.
//     reader.readAsDataURL(f);
//   }
// }
//
// // If there are images in localstorage we display them
//
// document.querySelector('.fileElem').addEventListener('change', handleFiles, false);
//
//
// if(localStorage.img) {
//
//
//   info.style.display = 'none';
//   instructions.style.display = 'none';
//
//   // for (var i = 0, f; f = localStorage.img[i]; i++) {
//
//     var imgDiv = document.createElement('div');
//     imgDiv.innerHTML += ['<img class="selectedImage" src="', localStorage.img,
//     '" title="test"/>'].join('');
//
//     document.querySelector('.imagePreview').insertBefore(imgDiv, null);
//
//     if (filesArray.length >= 1) {
//       continueButton.style.pointerEvents = 'all';
//       continueIcon.style.opacity = '1';
//     }
//
//     if (filesArray.length >= 4) {
//       fileSelect.style.pointerEvents = "none";
//       fileSelect.style.opacity = '0.45';
//     }
//
//   // }
//
//   // localStorage.clear();
//
//   }
