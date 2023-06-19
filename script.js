const menuBtn = document.querySelector('.menu');
menuBtn.addEventListener('click', () => {
  const mobilePopup = document.querySelector('.mobile-menu');
  mobilePopup.classList.toggle('visible');
});

document.getElementById('close-btn').addEventListener('click',()=>{
  const mobilePopup = document.querySelector('.mobile-menu');
  mobilePopup.classList.toggle('visible');
});

document.querySelectorAll('.menu-list a') .addEventListener('click',()=>{
  const mobilePopup = document.querySelector('.mobile-menu');
  mobilePopup.classList.toggle('visible');
});