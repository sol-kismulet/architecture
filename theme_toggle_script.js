(function() {
  const themes = ['light-theme', 'dark-theme'];
  function setBodyClass(theme) {
    document.body.classList.remove(...themes);
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }

  window.cycleTheme = function() {
    const current = localStorage.getItem('theme') || 'light-theme';
    const next = current === 'light-theme' ? 'dark-theme' : 'light-theme';
    setBodyClass(next);
  };

  document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme') || 'light-theme';
    setBodyClass(savedTheme);
  });
})();
