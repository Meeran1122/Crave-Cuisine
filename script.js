  // Slideshow functionality
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slideshow img');

  function showSlides() {
      slides.forEach(slide => (slide.className = ''));
      slideIndex++;
      if (slideIndex > slides.length) slideIndex = 1;
      slides[slideIndex - 1].className = 'active';
      setTimeout(showSlides, 4000); // Change slide every 4 seconds
  }
  showSlides();

  // Responsive Navbar Toggle
  const navLinks = document.querySelector('.nav-links');
  const menuIcon = document.querySelector('.menu-icon');
  
  function toggleMenu() {
      navLinks.classList.toggle('active');
  }