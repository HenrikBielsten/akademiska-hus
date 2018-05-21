const urgentIconSmall = document.querySelector('.urgentIconSmall');
const urgentModalContainer = document.querySelector('.urgentModalContainer');
const urgentModal = document.querySelector('.urgentModal');
const modalOverlay = document.querySelector('.modalOverlay');

urgentIconSmall.addEventListener("click", (e) => {

  console.log('clicked');

  urgentModal.style.transform = 'translateX(0px)';
  modalOverlay.style.opacity = '.2';

})
