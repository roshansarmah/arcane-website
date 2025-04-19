// script.js

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Optional: Highlight active nav item (based on scroll)
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll("section");
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    if (
      scrollPos > section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
      const activeLink = document.querySelector(`nav a[href='#${section.id}']`);
      if (activeLink) activeLink.classList.add("active");
    }
  });
});