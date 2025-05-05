function toggleInfo(card) {
  const text = card.querySelector(".info-text");
  const isVisible = text.classList.contains("visible");

  if (isVisible) {
    text.classList.remove("visible");
  } else {
    text.classList.add("visible");
  }
}