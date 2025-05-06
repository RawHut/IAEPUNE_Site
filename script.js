document.addEventListener("DOMContentLoaded", () => {
  /* Reveal sections on scroll using IntersectionObserver */
  const sections = document.querySelectorAll('.section');
  const observerOptions = { threshold: 0.2 };
  const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  /* Mobile Navigation Toggle */
  const toggleBtn = document.querySelector('.toggle-btn');
  const navLinks = document.querySelector('.nav-links');
  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
