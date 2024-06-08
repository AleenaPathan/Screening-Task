import DarkModeToggle from './dark-mode-toggle';

const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('dark-mode-toggle', () => {
  console.log('Dark mode toggled!');
});
