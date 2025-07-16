const panels = document.querySelectorAll('.panel');
const toggleBtn = document.querySelector('.theme-toggle');
let current = 0;

// Click to expand
panels.forEach((panel, i) => {
  panel.addEventListener('click', () => {
    current = i;
    activatePanel(current);
    resetTimer();
  });
});

// Remove all and activate selected
function activatePanel(index) {
  panels.forEach(p => p.classList.remove('active'));
  panels[index].classList.add('active');
}

// Light/Dark mode toggle
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  toggleBtn.classList.toggle('on');
  toggleBtn.innerHTML = document.body.classList.contains('light')
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

// Auto-slider
let sliderInterval = setInterval(() => {
  current = (current + 1) % panels.length;
  activatePanel(current);
}, 5000); // every 5 sec

function resetTimer() {
  clearInterval(sliderInterval);
  sliderInterval = setInterval(() => {
    current = (current + 1) % panels.length;
    activatePanel(current);
  }, 5000);
}
