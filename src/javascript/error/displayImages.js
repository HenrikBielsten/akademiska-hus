import base64 from 'base-64';

var filesArray = [];

// If there is anything in our localStorage we parse the string and sets the new values to our filesArray
if (localStorage.images) {
  filesArray = JSON.parse(localStorage.getItem('images'));
}

// If there are images in localstorage we display them
if (localStorage.images) {

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
  }
}
