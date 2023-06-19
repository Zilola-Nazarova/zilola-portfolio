const menuBtn = document.querySelector('.menu');
menuBtn.addEventListener('click', () => {
  const mobilePopup = document.querySelector('.mobile-menu');
  mobilePopup.classList.toggle('visible');
});

document.getElementById('close-btn').addEventListener('click',()=>{
  const mobilePopup = document.querySelector('.mobile-menu');
  mobilePopup.classList.toggle('visible');
});

const linkBtn = document.querySelectorAll('.menu-list a');
for (let i = 0; i < linkBtn.length; i += 1) {
  linkBtn[i].addEventListener('click',()=>{
    const mobilePopup = document.querySelector('.mobile-menu');
    mobilePopup.classList.toggle('visible');
  });
}