function toggleInfo(card) {
  const paragraph = card.querySelector("p");
  const isVisible = paragraph.classList.contains("visible");

  // Hide all others
  document.querySelectorAll(".info-card p.visible").forEach(p => {
    p.classList.remove("visible");
    setTimeout(() => {
      p.style.display = "none";
    }, 400);
  });

  // Show clicked one if it wasn't already visible
  if (!isVisible) {
    paragraph.style.display = "block";
    setTimeout(() => {
      paragraph.classList.add("visible");
    }, 10);
  }
}