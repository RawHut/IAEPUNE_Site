document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(255, 255, 255, 0.95)";
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.9)";
    }
  });
});
