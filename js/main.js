const btn = document.querySelector('.list__burger');
const burger = document.querySelector('.header__burger')
burger.addEventListener('click', click);

function click() {
  btn.classList.toggle('click');
}