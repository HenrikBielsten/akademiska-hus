const urgentIconSmall = document.querySelector('.urgentIconSmall');
const urgentModalContainer = document.querySelector('.urgentModalContainer');
const urgentModal = document.querySelector('.urgentModal');
const modalOverlay = document.querySelector('.modalOverlay');
const chooseAreaButton = document.querySelector('.urgentChooseArea');
const closeUrgentModalButton = document.querySelector('.closeUrgentModalIcon');
const campusListButtons = document.querySelectorAll('.urgentChooseArea li');
const contentContainer = document.querySelector('.urgentChooseArea .wrapper .content');


urgentIconSmall.addEventListener("click", (e) => {


  modalOverlay.style.opacity = '.2';
  urgentModal.style.transform = 'translateX(0px)';

})

closeUrgentModalButton.addEventListener("click", (e) => {


  urgentModal.style.transform = 'translateX(-900px)';
  modalOverlay.style.opacity = '0';

  chooseAreaButton.className = chooseAreaButton.classList[0];
  contentContainer.className = contentContainer.classList[0];
  chooseAreaButton.classList.add("bottom");

})

campusListButtons.forEach(campusListButton => campusListButton.addEventListener("click", e => {

// campusListButton.style.background = 'rgba(223,223,223,1';

}));

$('.urgentChooseArea .wrapper .parent').click(function(){
  // if ($(chooseAreaButton).hasClass("top")) {
  //   $(".urgentChooseArea .wrapper .content").css("max-height", "0");
  // } else {
  //   $(".urgentChooseArea .wrapper .content").css("max-height", "65vh");
  // }

  $(chooseAreaButton).toggleClass('top',400);
  $(contentContainer).toggleClass('active');
//   $(this).removeClass('bottom');
// $(this).addClass('top',400);
  // if ($(this).hasClass("bottom")) {
  //   $(this).removeClass('bottom');
  //   $(this).addClass('top',400);
  // } else if ($(this).hasClass("top")) {
  //   $(this).removeClass('top');
  //   $(this).addClass('bottom',400);
  // }
});
