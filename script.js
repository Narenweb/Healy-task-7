document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const navbarHeight = navbar.offsetHeight;
  
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;

      if (scrollPosition >= navbarHeight) {
        navbar.classList.add('navbar-fixed');
      } else {
        navbar.classList.remove('navbar-fixed');
      }
    });
  });