'use strict';
(function () {
  var COUNT_WIZARD = 4;
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var ESCAPE_BTN = 'Escape';
  var ENTER_BTN = 'Enter';

  var getRandomValue = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  var dialogInitX = getComputedStyle(document.querySelector('.setup')).left;
  var dialogInitY = getComputedStyle(document.querySelector('.setup')).top;

  var errorHandler = function (message) {
    document.querySelector('.error').classList.remove('hidden');
    document.querySelector('.error__message').innerText = message;
  };

  window.util = {
    COUNT_WIZARD: COUNT_WIZARD,
    NAMES: NAMES,
    SURNAMES: SURNAMES,
    COAT_COLORS: COAT_COLORS,
    EYES_COLORS: EYES_COLORS,
    FIREBALL_COLORS: FIREBALL_COLORS,
    ESCAPE_BTN: ESCAPE_BTN,
    ENTER_BTN: ENTER_BTN,
    getRandomValue: getRandomValue,
    dialogInitX: dialogInitX,
    dialogInitY: dialogInitY,
    errorHandler: errorHandler
  };
})();
