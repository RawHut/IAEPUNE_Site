document.addEventListener('DOMContentLoaded', () => {
  const cards = Array.from(document.querySelectorAll('.card'));
  let current = 0;

  function updateActive() {
    cards.forEach((c,i) => c.classList.toggle('active', i === current));
  }

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    // one viewport per card after the space
    const idx = Math.floor((scrollPos - window.innerHeight + 100) / window.innerHeight) + 1;
    const newIndex = Math.max(0, Math.min(cards.length - 1, idx));
    if (newIndex !== current) {
      current = newIndex;
      updateActive();
    }
  });
});
