const menuBtn = document.querySelector('.menu');
menuBtn.addEventListener('click', () => {
  const mobilePopup = document.querySelector('.mobile-menu');
  mobilePopup.classList.toggle('visible');
  const restOfThePage = document.querySelectorAll('section, footer');
  for (let i = 0; i < restOfThePage.length; i += 1) {
    restOfThePage[i].classList.toggle('unvisible');
  }
});

document.getElementById('close-btn').addEventListener('click',()=>{
  const mobilePopup = document.querySelector('.mobile-menu');
  mobilePopup.classList.toggle('visible');
  const restOfThePage = document.querySelectorAll('section, footer');
  for (let i = 0; i < restOfThePage.length; i += 1) {
    restOfThePage[i].classList.toggle('unvisible');
  }
});

const linkBtn = document.querySelectorAll('.menu-list a');
for (let i = 0; i < linkBtn.length; i += 1) {
  linkBtn[i].addEventListener('click',()=>{
    const mobilePopup = document.querySelector('.mobile-menu');
    mobilePopup.classList.toggle('visible');
    const restOfThePage = document.querySelectorAll('section, footer');
  for (let i = 0; i < restOfThePage.length; i += 1) {
    restOfThePage[i].classList.toggle('unvisible');
  }
  });
  
}