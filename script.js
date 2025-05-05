document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.info-box').forEach(box => {
    box.addEventListener('click', () => {
      const expanded = box.getAttribute('data-expanded') === 'true';
      box.setAttribute('data-expanded', expanded ? 'false' : 'true');
    });
  });
});
