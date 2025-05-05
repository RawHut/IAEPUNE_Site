document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  let startY = 0;
  let currentIndex = 0;
  const SWIPE_THRESHOLD = 80;
  const WHEEL_THRESHOLD = 30;

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

  // TOUCH EVENTS
  window.addEventListener('touchstart', e => {
    startY = e.touches[0].clientY;
  });
  window.addEventListener('touchend', e => {
    const endY = e.changedTouches[0].clientY;
    const delta = startY - endY;

    if (delta > SWIPE_THRESHOLD) {
      // swipe up → flip forward
      flipCard(currentIndex);
      if (currentIndex < cards.length - 1) {
        setTimeout(() => {
          currentIndex++;
          scrollToCard(currentIndex);
        }, 700);
      }
    } else if (delta < -SWIPE_THRESHOLD) {
      // swipe down → flip back
      if (currentIndex > 0) {
        currentIndex--;
        unflipCard(currentIndex);
        scrollToCard(currentIndex);
      }
    }
  });

  // MOUSE WHEEL EVENTS
  window.addEventListener('wheel', e => {
    const delta = e.deltaY;

    if (delta > WHEEL_THRESHOLD) {
      // wheel down → flip forward
      flipCard(currentIndex);
      if (currentIndex < cards.length - 1) {
        setTimeout(() => {
          currentIndex++;
          scrollToCard(currentIndex);
        }, 700);
      }
    } else if (delta < -WHEEL_THRESHOLD) {
      // wheel up → flip back
      if (currentIndex > 0) {
        currentIndex--;
        unflipCard(currentIndex);
        scrollToCard(currentIndex);
      }
    }
  });
});
