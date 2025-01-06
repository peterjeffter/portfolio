document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popupdisplay');
    const openPopup = document.querySelector('.open-btn'); 
    const closeButton = document.querySelector('.close-btn'); 
    const projects = document.querySelectorAll('.project');
  
    
    projects.forEach((project, index) => {
      project.style.setProperty('--i', index + 1); 
    });
  
  
    openPopup.addEventListener('click', () => {
      popup.classList.add('active');
    });
  
    
    closeButton.addEventListener('click', () => {
      popup.classList.remove('active');
    });
  
    document.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.classList.remove('active');
      }
    });
  });
  
  //contact popup
  document.addEventListener('DOMContentLoaded', () => {
    const contactopen = document.querySelector('.connect-btn1');
    const contactshow = document.querySelector('.contact-popup');
    
   
    contactopen.addEventListener('click', (e) => {
      e.stopPropagation();
      contactshow.classList.add('contactactive');
    });
  
    
    document.addEventListener('click', (e) => {
      if (contactshow && !contactshow.contains(e.target)) {
        contactshow.classList.remove('contactactive');
      }
    });
  
    contactshow.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });

  
  document.getElementById('sendemail').addEventListener('click', () => {
    const email = 'peterjeffter1@gmail.com'; 
    const subject = "Let's Connect";
    const body = "Hi! I found your portfolio and wanted to reach out.";

  
    const mailtoURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    t
    window.open(mailtoURL, '_blank');
  });

  document.getElementById('sendwhatsapp').addEventListener('click', () => {
    const phoneNumber = '2349019887023';
    const message = "Hi! I found your portfolio and wanted to reach out.";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      
    
    window.open(whatsappURL, '_blank');
  });
