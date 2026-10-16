/* ============================================================
   Mathayom 3 (Grade 9) — Shared JavaScript
   Mythology Theme (Greek · Norse · Egyptian · Arthurian)
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Tap feedback on nav buttons
  document.querySelectorAll('.nav-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (!this.classList.contains('disabled')) {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => { this.style.transform = ''; }, 150);
      }
    });
  });

  // Keyboard shortcuts: ← prev, → next, h home
  document.addEventListener('keydown', function (e) {
    var prev = document.querySelector('.prev-btn:not(.disabled)');
    var next = document.querySelector('.next-btn:not(.disabled)');
    var home = document.querySelector('.home-btn');

    if (e.key === 'ArrowLeft' && prev) {
      window.location.href = prev.href;
    } else if (e.key === 'ArrowRight' && next) {
      window.location.href = next.href;
    } else if (e.key.toLowerCase() === 'h' && home) {
      window.location.href = home.href;
    }
  });

  console.log('🏛️ Mathayom 3 — Mythology-themed lesson loaded successfully.');
});