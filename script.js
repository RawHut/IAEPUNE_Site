document.addEventListener("DOMContentLoaded", () => {
  const cardContainers = document.querySelectorAll(".card-container");
  const flipCards = document.querySelectorAll(".flip-card");

  // —————————————
  // 1) Flip‑on‑click
  // —————————————
  flipCards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  });

  // —————————————
  // 2) Scroll animations via IntersectionObserver
  // —————————————
  const observerOptions = {
    root: null,           // viewport
    threshold: 0.1        // 10% of the card is visible
  };

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  cardContainers.forEach(container => {
    observer.observe(container);
  });
});
