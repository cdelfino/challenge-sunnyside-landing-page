const navbar = document.querySelector('.navbar');
navbar.classList.add('visible');
window.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
    navbar.classList.add('visible');
  } else {
    navbar.classList.remove('visible');
  }
});
