const navbar = document.querySelector('.navbar');
const mobileMenu = document.querySelector('#mobilemenu');
const navbarLinks = document.querySelector('#navbarlinks');

navbar.classList.add('visible');
window.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
    navbar.classList.add('visible');
  } else {
    navbar.classList.remove('visible');
  }
});

mobileMenu.addEventListener('click',()=>{
  navbarLinks.classList.toggle('show-navbar');
});


