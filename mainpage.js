document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popupdisplay');
    const openPopup = document.querySelector('.open-btn'); // Button to open the popup
    const closeButton = document.querySelector('.close-btn'); // Close button inside the popup
    const projects = document.querySelectorAll('.project'); // All project elements
  
    // Assigning the delay dynamically to each project based on its index
    projects.forEach((project, index) => {
      project.style.setProperty('--i', index + 1); // Index starts from 1, so add 1
    });
  
    // Show the popup
    openPopup.addEventListener('click', () => {
      popup.classList.add('active');
    });
  
    // Close the popup
    closeButton.addEventListener('click', () => {
      popup.classList.remove('active');
    });
  
    // Optional: Close popup by clicking outside the popup content
    document.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.classList.remove('active');
      }
    });
  });
  