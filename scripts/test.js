// Function to check if text is truncated
function checkTextOverflow() {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach((card) => {
      const description = card.querySelector('.card-description');
      const readMoreLink = card.querySelector('.read-more');
  
      // Check if the description's content exceeds its container
      if (description.scrollHeight > description.clientHeight) {
        readMoreLink.style.display = 'block'; // Show "Read More" link
      } else {
        readMoreLink.style.display = 'none'; // Hide "Read More" link
      }
    });
  }
  
  // Toggle full/short text on click
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('read-more')) {
      event.preventDefault();
      const card = event.target.closest('.card');
      const description = card.querySelector('.card-description');
  
      if (event.target.textContent === 'Read more') {
        description.style.webkitLineClamp = 'unset'; // Show full text
        event.target.textContent = 'Show less';
      } else {
        description.style.webkitLineClamp = '5'; // Truncate text again
        event.target.textContent = 'Read more';
      }
    }
  });
  
  // Run the check on page load and on window resize
  window.addEventListener('load', checkTextOverflow);
  window.addEventListener('resize', checkTextOverflow);
  
  