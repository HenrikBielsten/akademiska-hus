const infoArrow = document.querySelector('.infoArrow');
const info = document.querySelector('.info');
const instructions = document.querySelector('.instructions');

infoArrow.addEventListener("click", (e) => {
  info.style.display = 'none';
  instructions.style.display = 'flex';
})
