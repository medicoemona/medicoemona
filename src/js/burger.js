'use strict';

document.addEventListener('pointerdown', function (e) {
  let pressedNav = false;
  if (document.querySelector('nav').contains(e.target)) {
    pressedNav = true;
  }
  if (!pressedNav) {
    document.getElementById('mainnav').checked = false;
  }
});

document.addEventListener('visibilitychange', function () {
  document.getElementById('mainnav').checked = false;
});
