const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
const toggleModeBtn = document.getElementById('toggleMode');
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

open.addEventListener('click', () => container.classList.add('show-nav'));
close.addEventListener('click', () => container.classList.remove('show-nav'));

toggleModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleModeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

btn.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus();
});