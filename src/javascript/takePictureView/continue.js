const locationText2 = document.querySelector('.locationText-2');
const continueButton = document.querySelector('.continueButton');


continueButton.addEventListener("click", (e) => {

  localStorage.setItem("latitude",latitude);
  localStorage.setItem("longitude",longitude);

  console.log(filesArray);
})
