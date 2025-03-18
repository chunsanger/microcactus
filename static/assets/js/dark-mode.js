document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const body = document.body;
  
  // Check for saved theme preference or use user's system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial theme
  if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
    body.classList.add('dark-mode');
    updateIcon(true);
  } else {
    updateIcon(false);
  }
  
  // Toggle dark mode on click
  darkModeToggle.addEventListener('click', function() {
    const isDarkMode = body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateIcon(isDarkMode);
  });
  
  // Update the icon based on current theme
  function updateIcon(isDarkMode) {
    const iconPath = darkModeToggle.querySelector('svg path');
    if (isDarkMode) {
      iconPath.setAttribute('d', 'M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z');
    } else {
      iconPath.setAttribute('d', 'M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0m0 -9a9 9 0 0 0 9 9m-9 -15l0 3m-6.4 2.6l2.1 2.1m12.7 -2.1l-2.1 2.1m2.1 12.7l-2.1 -2.1m-12.7 2.1l2.1 -2.1m-3 -6.9l3 0');
    }
  }
}); 