document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      if (target) {
        target.style.display = target.style.display === 'block' ? 'none' : 'block';
        btn.textContent = target.style.display === 'block' ? 'Less Info' : 'More Info';
      }
    });
  });
});
