document.addEventListener("DOMContentLoaded", () => {
  const cardContainers = document.querySelectorAll(".card-container")
  const flipCards = document.querySelectorAll(".flip-card")

  // Initialize visible cards array
  let visibleCards = []

  // Handle card flipping on click
  flipCards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped")
    })
  })

  // Handle scroll animations
  function handleScroll() {
    cardContainers.forEach((container, index) => {
      const rect = container.getBoundingClientRect()
      const isVisible = rect.top >= 0 && rect.top <= window.innerHeight * 0.7

      if (isVisible && !visibleCards.includes(index)) {
        // Card entering viewport
        container.classList.add("visible")
        visibleCards.push(index)
      } else if (!isVisible && visibleCards.includes(index)) {
        // Card leaving viewport
        if (rect.top < 0) {
          container.classList.add("exit")
          container.classList.remove("visible")
        } else {
          container.classList.remove("visible")
          container.classList.remove("exit")
        }

        // Remove from visible cards array
        visibleCards = visibleCards.filter((i) => i !== index)
      }
    })
  }

  // Add scroll event listener
  window.addEventListener("scroll", handleScroll)

  // Initialize on page load
  handleScroll()
})
