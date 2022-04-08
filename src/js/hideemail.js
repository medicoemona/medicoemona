(function () {
  /**
   * "Decrypt email"
   * @param {string} encoded - base64 of email string
   */
  function decryptEmail(encoded) {
    return atob(encoded);
  }

  const email = 'aW5mb0BtZWRpY29lbW9uYS5zaQ==';

  document.querySelectorAll('.insertEmail').forEach(function (el) {
    el.textContent = decryptEmail(email);

    el.addEventListener('pointerdown', function () {
      window.location.href = 'mailto:' + decryptEmail(email);
    });
  });
})();
