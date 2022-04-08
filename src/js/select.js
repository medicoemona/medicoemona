'use strict';

document.addEventListener('pointerdown', function (e) {
  let pressedSelect = false;
  for (const select of document.querySelectorAll('.select')) {
    if (select.contains(e.target)) {
      this.querySelector('.arrow').classList.toggle('arrow_open');
      pressedSelect = true;
    }
  }
  if (!pressedSelect) {
    const arrow = document.querySelector('.arrow');
    if (arrow) {
      arrow.classList.remove('arrow_open');
    }
  }
});

for (const select of document.querySelectorAll('.select select')) {
  select.addEventListener('input', function () {
    document.querySelector('.arrow').classList.remove('arrow_open');
  });
}

document.addEventListener('visibilitychange', function () {
  const arrow = document.querySelector('.arrow');
  if (arrow) {
    arrow.classList.remove('arrow_open');
  }
});
