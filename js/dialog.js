'use strict';
(function () {
  var setupPopup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setupPopup.querySelector('.setup-close');
  var setupUserName = setupPopup.querySelector('.setup-user-name');
  var uploadBtn = setupPopup.querySelector('.upload input');
  var setupSimilarList = setupPopup.querySelector('.setup-similar-list');

  var closeKeyEscHandler = function (evt) {
    var isFocused = (document.activeElement === setupUserName);
    if (evt.key === window.util.ESCAPE_BTN && !isFocused) {
      closeSetupPopup();
    }
  };

  var openSetupPopup = function () {
    setupPopup .classList.remove('hidden');
    document.addEventListener('keydown', closeKeyEscHandler);
  };

  var closeSetupPopup = function () {
    setupPopup.classList.add('hidden');
    document.removeEventListener('keydown', closeKeyEscHandler);
    setupPopup.style.top = window.util.dialogInitY;
    setupPopup.style.left = window.util.dialogInitX;
  };

  setupOpen.addEventListener('click', openSetupPopup);
  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === window.util.ENTER_BTN) {
      openSetupPopup();
    }
  });
  setupClose.addEventListener('click', closeSetupPopup);
  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === window.util.ENTER_BTN) {
      closeSetupPopup();
    }
  });

  var updateListWizard = window.debounce(function (wizards, randomCoat, randomEye) {
    window.sortSimilar.sortSimilarWizards(window.backend.wizardsInit, randomCoat, randomEye);
    setupSimilarList.innerHTML = '';
    window.appendWizard(wizards);
  });

  setupPopup.addEventListener('click', function (evt) {
    var randomCoat = getComputedStyle(document.querySelector('.wizard-coat')).fill;
    var randomEye = getComputedStyle(document.querySelector('.wizard-eyes')).fill;
    if (evt.target.classList.contains('wizard-coat')) {
      randomCoat = window.util.getRandomValue(window.util.COAT_COLORS);
      evt.target.style.fill = randomCoat;
      updateListWizard(window.backend.wizardsInit, randomCoat, randomEye);

    } else if (evt.target.classList.contains('wizard-eyes')) {
      randomEye = window.util.getRandomValue(window.util.EYES_COLORS);
      evt.target.style.fill = randomEye;
      updateListWizard(window.backend.wizardsInit, randomCoat, randomEye);
    } else if (evt.target.classList.contains('setup-fireball')) {
      evt.target.parentNode.style.background = window.util.getRandomValue(window.util.FIREBALL_COLORS);
    }
  });

  uploadBtn.addEventListener('mousedown', function (evt) {
    var isDrag = false;
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      isDrag = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupPopup.style.top = (setupPopup.offsetTop - shift.y) + 'px';
      setupPopup.style.left = (setupPopup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function () {

      if (isDrag) {
        var isDragChecking = function (clickEvt) {
          clickEvt.preventDefault();
          uploadBtn.removeEventListener('click', isDragChecking);
        };
        uploadBtn.addEventListener('click', isDragChecking);
      }

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
