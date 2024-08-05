// Get the footer element
const footer = document.querySelector('footer');

// Add an event listener to the footer element
footer.addEventListener('click', () => {
  // Toggle the visibility of the footer contents
  footer.classList.toggle('show-contents');
});

// Add an event listener to the window object
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // If the scroll position is greater than 50% of the viewport height
  if (scrollPosition > window.innerHeight / 2) {
    // Add a class to the footer element to change its style
    footer.classList.add('scrolled');
  } else {
    // Remove the class from the footer element
    footer.classList.remove('scrolled');
  }
});

// Add an event listener to the window object
window.addEventListener('resize', () => {
  // Get the current viewport width
  const viewportWidth = window.innerWidth;

  // If the viewport width is less than 768px
  if (viewportWidth < 768) {
    // Add a class to the footer element to change its style
    footer.classList.add('mobile');
  } else {
    // Remove the class from the footer element
    footer.classList.remove('mobile');
  }
});