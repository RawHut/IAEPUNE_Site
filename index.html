document.addEventListener('DOMContentLoaded', () => {
  const cards = Array.from(document.querySelectorAll('.card'));
  let startY = 0;
  let startCardIdx = null;
  let currentIndex = 0;

  const SWIPE_THRESHOLD = 80;
  const WHEEL_THRESHOLD = 30;
  const FLIP_DELAY = 700; // match your CSS transition

  // Helpers
  function flipCard(idx) {
    const c = cards[idx];
    if (c && !c.classList.contains('flipped')) {
      c.classList.add('flipped');
    }
  }
  function unflipCard(idx) {
    const c = cards[idx];
    if (c && c.classList.contains('flipped')) {
      c.classList.remove('flipped');
    }
  }
  function scrollToCard(idx) {
    const c = cards[idx];
    if (c) c.scrollIntoView({ behavior: 'smooth' });
  }

  // TOUCH EVENTS: only if touchstart began on the current card
  window.addEventListener('touchstart', e => {
    startY = e.touches[0].clientY;
    const cardEl = e.target.closest('.card');
    startCardIdx = cards.indexOf(cardEl);
  });

  window.addEventListener('touchend', e => {
    const endY = e.changedTouches[0].clientY;
    const delta = startY - endY;

    // ignore if the gesture didn't start on the active card
    if (startCardIdx !== currentIndex) return;

    if (delta > SWIPE_THRESHOLD) {
      // swipe up → flip forward
      flipCard(currentIndex);
      if (currentIndex < cards.length - 1) {
        setTimeout(() => {
          currentIndex++;
          scrollToCard(currentIndex);
        }, FLIP_DELAY);
      }
    } else if (delta < -SWIPE_THRESHOLD) {
      // swipe down → flip back
      if (currentIndex > 0) {
        unflipCard(currentIndex - 1);
        currentIndex--;
        scrollToCard(currentIndex);
      }
    }
  });

  // MOUSE WHEEL: listen on each card, only on the active one
  cards.forEach((card, idx) => {
    card.addEventListener('wheel', e => {
      // if it's not the current card, ignore
      if (idx !== currentIndex) return;

      e.preventDefault(); // stop native scroll

      const delta = e.deltaY;
      if (delta > WHEEL_THRESHOLD) {
        // wheel down → flip forward
        flipCard(currentIndex);
        if (currentIndex < cards.length - 1) {
          setTimeout(() => {
            currentIndex++;
            scrollToCard(currentIndex);
          }, FLIP_DELAY);
        }
      } else if (delta < -WHEEL_THRESHOLD) {
        // wheel up → flip back
        if (currentIndex > 0) {
          unflipCard(currentIndex - 1);
          currentIndex--;
          scrollToCard(currentIndex);
        }
      }
    }, { passive: false });
  });
});
