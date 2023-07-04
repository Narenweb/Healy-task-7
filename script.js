document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const navbarHeight = navbar.offsetHeight;
    const closeIcon = document.querySelector('.close-icon');
    const hamburger=document.querySelector('.hamburger');
  
    // For scrolling event
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;

      if (scrollPosition >= navbarHeight) {
        navbar.classList.add('navbar-fixed');
      } else {
        navbar.classList.remove('navbar-fixed');
        navbar.classList.remove('slide-navbar');
      }
    });
    
     // For sliding event
    hamburger.addEventListener('click', function (){
       navbar.classList.add('slide-navbar');
    });
   
    closeIcon.addEventListener('click', function() {
      navbar.classList.remove('slide-navbar');
    });
    
  });
 

