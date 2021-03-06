const urgentIconSmall = document.querySelector('.urgentIconSmall');
const urgentModalContainer = document.querySelector('.urgentModalContainer');
const urgentModal = document.querySelector('.urgentModal');
const modalOverlay = document.querySelector('.modalOverlay');
const chooseAreaButton = document.querySelector('.chooseCampus');
const closeUrgentModalButton = document.querySelector('.closeUrgentModalIcon');
const contentContainer = document.querySelector('.chooseCampus .wrapper .content');
const container = document.querySelector('.container');


urgentIconSmall.addEventListener("click", (e) => {


  modalOverlay.style.opacity = '.2';
  urgentModal.style.transform = 'translateX(0px)';
  container.style.pointerEvents = 'none';

})

closeUrgentModalButton.addEventListener("click", (e) => {


  urgentModal.style.transform = 'translateX(-900px)';
  modalOverlay.style.opacity = '0';

  chooseAreaButton.className = chooseAreaButton.classList[0];
  contentContainer.className = contentContainer.classList[0];
  chooseAreaButton.classList.add("bottom");
  container.style.pointerEvents = 'all';

})


$('.chooseCampus .wrapper .parent').click(function(){

  $(chooseAreaButton).toggleClass('top',400);
  $(contentContainer).toggleClass('active');

});
