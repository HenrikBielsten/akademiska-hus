const urgentIconSmall = document.querySelector('.urgentIconSmall');
const urgentModalContainer = document.querySelector('.urgentModalContainer');
const urgentModal = document.querySelector('.urgentModal');
const modalOverlay = document.querySelector('.modalOverlay');
const chooseAreaButton = document.querySelector('.urgentChooseArea');
const closeUrgentModalButton = document.querySelector('.closeUrgentModalIcon');


urgentIconSmall.addEventListener("click", (e) => {

  console.log('clicked');

  // urgentModalContainer.style.display = 'flex';
  // modalOverlay.style.display = 'flex';
  modalOverlay.style.opacity = '.2';
  urgentModal.style.transform = 'translateX(0px)';

})

closeUrgentModalButton.addEventListener("click", (e) => {

  console.log('clicked');

  urgentModal.style.transform = 'translateX(-900px)';
  modalOverlay.style.opacity = '0';

})

chooseAreaButton.addEventListener("click", (e) => {
  // chooseAreaButton.style.top = 0;
})

    $(document).ready(function(){

      $(".urgentChooseArea").click(function() {

        $(".urgentChooseArea").animate(

          {

            top: 0


          }, 200, 'linear');

      });//animate

    });//Doc ready
