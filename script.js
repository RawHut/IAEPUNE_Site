document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  toggle.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
  });
});
