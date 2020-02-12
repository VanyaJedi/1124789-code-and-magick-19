'use strict';

(function () {

  var form = document.querySelector('.setup-wizard-form');
  var setupPopup = document.querySelector('.setup');

  var formSend = function () {
    setupPopup.classList.add('hidden');
  };

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), formSend, window.util.errorHandler);
  });

})();
