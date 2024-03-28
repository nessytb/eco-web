    document.addEventListener('DOMContentLoaded', function() {
      var navbar = document.querySelector('.navbar');

      var threshold = 90; 
    
      function handleScroll() {
        if (window.scrollY > threshold) {
          navbar.classList.add('navbarafter');
        } else {
          navbar.classList.remove('navbarafter');
        }
      }
      window.addEventListener('scroll', handleScroll);
    });