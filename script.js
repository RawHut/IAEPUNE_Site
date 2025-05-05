document.addEventListener('DOMContentLoaded', () => {
  const cards = Array.from(document.querySelectorAll('.card'));
  let currentIndex = 0;
  let isAnimating = false;
  const SWIPE_THRESHOLD = 80;
  const WHEEL_THRESHOLD = 30;
  let touchStartY = 0;

  // 1) Track the active card via IntersectionObserver
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        currentIndex = cards.indexOf(entry.target);
      }
    });
  }, { threshold: 0.6 });

  cards.forEach(card => observer.observe(card));

  // 2) Flip helpers
  function flip(idx) {
    if (isAnimating) return;
    isAnimating = true;
    cards[idx].classList.add('flipped');
    setTimeout(() => {
      isAnimating = false;
    }, 600); // must match CSS transition
  }
  function unflip(idx) {
    if (isAnimating) return;
    isAnimating = true;
    cards[idx].classList.remove('flipped');
    setTimeout(() => {
      isAnimating = false;
    }, 600);
  }
  function goTo(idx) {
    if (idx < 0 || idx >= cards.length) return;
    cards[idx].scrollIntoView({ behavior: 'smooth' });
  }

  // 3) Touch: swipe up/down on the viewport
  window.addEventListener('touchstart', e => {
    touchStartY = e.touches[0].clientY;
  });
  window.addEventListener('touchend', e => {
    if (isAnimating) return;
    const deltaY = touchStartY - e.changedTouches[0].clientY;
    if (deltaY > SWIPE_THRESHOLD) {
      // swipe up = flip forward
      flip(currentIndex);
      setTimeout(() => goTo(currentIndex + 1), 600);
    } else if (deltaY < -SWIPE_THRESHOLD) {
      // swipe down = flip backward
      unflip(currentIndex - 1);
      setTimeout(() => goTo(currentIndex - 1), 600);
    }
  });

  // 4) Wheel: only on the container
  const container = document.querySelector('.card-container');
  container.addEventListener('wheel', e => {
    e.preventDefault();
    if (isAnimating) return;
    if (e.deltaY > WHEEL_THRESHOLD) {
      flip(currentIndex);
      setTimeout(() => goTo(currentIndex + 1), 600);
    } else if (e.deltaY < -WHEEL_THRESHOLD) {
      unflip(currentIndex - 1);
      setTimeout(() => goTo(currentIndex - 1), 600);
    }
  }, { passive: false });

});
