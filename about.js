// Initialize AOS
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ duration: 600, once: true });

  // Flip cards on tap/click
  document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
});