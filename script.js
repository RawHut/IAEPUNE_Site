// script.js
document.addEventListener("DOMContentLoaded", () => {
  const cardContainers = document.querySelectorAll(".card-container");
  const flipCards = document.querySelectorAll(".flip-card");

  // Flip‑on‑click
  flipCards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });

  // Scroll animations via IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("visible", entry.isIntersecting);
    });
  }, {
    root: null,
    threshold: 0.1
  });

  cardContainers.forEach(container => observer.observe(container));
});
