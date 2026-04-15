// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const navlist = document.getElementById('navlist');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle mobile menu
  if (hamburgerMenu) {
    hamburgerMenu.addEventListener('click', () => {
      hamburgerMenu.classList.toggle('active');
      navlist.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburgerMenu.classList.remove('active');
        navlist.classList.remove('active');
      });
    });
  }

  // Highlight active link based on scroll position
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      navLinks.forEach(nav => nav.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Update active link on scroll
  window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });
});

// Typing effect for hero section
const textArray = ["Coder", "Frontend Developer", "Gamer"];
const typingSpan = document.querySelector(".typing");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  if (!typingSpan) return;
  
  const currentText = textArray[textIndex];
  if (!isDeleting) {
    typingSpan.textContent = currentText.slice(0, ++charIndex);
    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    typingSpan.textContent = currentText.slice(0, --charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % textArray.length;
    }
  }
  setTimeout(typeEffect, isDeleting ? 70 : 100);
}

// Only start typing if the span exists
if (typingSpan) {
  typeEffect();
}
