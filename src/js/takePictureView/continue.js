const locationText2 = document.querySelector('.locationText-2');


continueButton.addEventListener("click", (e) => {
  console.log(filesArray);
  console.log(myLocation);

  localStorage.setItem("latitude",latitude);
  localStorage.setItem("longitude",longitude);
})
