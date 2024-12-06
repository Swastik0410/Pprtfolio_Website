// Sidebar Toggle
const sidebar = document.querySelector('.sidebar');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

sidebarBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Navbar Navigation
const navbarLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

navbarLinks.forEach((link, index) => {
  link.addEventListener('click', () => {
    navbarLinks.forEach(nav => nav.classList.remove('active'));
    link.classList.add('active');

    pages.forEach(page => page.classList.remove('active'));
    pages[index].classList.add('active');
  });
});

// Contact Form Validation
const form = document.querySelector('[data-form]');
const inputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

// Enable/Disable the Submit Button
const validateForm = () => {
  const isValid = [...inputs].every(input => input.value.trim() !== '');
  formBtn.disabled = !isValid;
};

inputs.forEach(input => {
  input.addEventListener('input', validateForm);
});

// Handle Form Submission
form.addEventListener('submit', e => {
  e.preventDefault(); // Prevent page refresh
  alert('Thank you for your message! I will get back to you soon.');
  form.reset(); // Clear the form
  formBtn.disabled = true; // Disable the button again
});

// Smooth Scrolling (Optional, for better navigation)
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
