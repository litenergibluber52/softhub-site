// theme.js — переключатель темы FlyxHub. подключать на всех страницах
(function () {
  var KEY = 'flyx-theme';
  var saved = localStorage.getItem(KEY) || 'dark';
  document.documentElement.setAttribute('data-theme', saved);

  function applyBtn() {
    var b = document.getElementById('theme-toggle');
    if (b) b.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '🌙' : '☀️';
  }

  window.toggleTheme = function () {
    var cur = document.documentElement.getAttribute('data-theme');
    var next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(KEY, next);
    applyBtn();
  };

  document.addEventListener('DOMContentLoaded', applyBtn);
})();
