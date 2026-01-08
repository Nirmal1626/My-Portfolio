// script.js
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navlist a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(nav => nav.classList.remove('active'));
      link.classList.add('active');
    });
  });
});
const textArray = ["Coder", "Frontend Developer", "Gamer"];
const typingSpan = document.querySelector(".typing");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = textArray[textIndex];
  if (!isDeleting) {
    typingSpan.textContent = currentText.slice(0, ++charIndex);
    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1200); // wait before deleting
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

typeEffect();
