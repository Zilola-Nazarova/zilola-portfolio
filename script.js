const menuBtn = document.querySelector('.menu');
menuBtn.addEventListener('click', () => {
  const mobilePopup = document.querySelector('.mobile-menu');
  mobilePopup.classList.toggle('visible');
});