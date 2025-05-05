document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  function onScroll() {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      // when top of card reaches mid‑viewport
      if (rect.top >= 0 && rect.top <= window.innerHeight * 0.5) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll);
  onScroll(); // initialize on load
});
