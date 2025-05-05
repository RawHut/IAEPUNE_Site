document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  let startY = 0;
  let isFlipped = new Set();

  // Touch start position
  window.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
  });

  // Touch move and detect swipe
  window.addEventListener('touchend', (e) => {
    const endY = e.changedTouches[0].clientY;
    const swipeDistance = startY - endY;

    if (swipeDistance > 80) { // Swipe up threshold
      const visibleCard = Array.from(cards).find(card => {
        const rect = card.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight;
      });

      if (visibleCard && !isFlipped.has(visibleCard)) {
        visibleCard.classList.add('flipped');
        isFlipped.add(visibleCard);

        // Scroll to next card after flip
        setTimeout(() => {
          const next = visibleCard.nextElementSibling;
          if (next && next.classList.contains('card')) {
            next.scrollIntoView({ behavior: 'smooth' });
          }
        }, 700); // Match flip transition
      }
    }
  });
});
