'use strict';

var COUNT_WIZARD = 4;
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESCAPE_BTN = 'Escape';
var ENTER_BTN = 'Enter';
var wizardTemplate = document.querySelector('#similar-wizard-template').content.firstElementChild;
var setupPopup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setupPopup.querySelector('.setup-close');

var getRandomVaue = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var generateWizard = function (names, surnames, coatColors, eyesColors) {
  return {
    name: getRandomVaue(names),
    surname: getRandomVaue(surnames),
    coatColor: getRandomVaue(coatColors),
    eyesColor: getRandomVaue(eyesColors),
  };
};

var fillWizards = function (names, surnames, coatColors, eyesColors) {
  var wizards = [];
  for (var i = 0; i < COUNT_WIZARD; i++) {
    wizards.push(generateWizard(names, surnames, coatColors, eyesColors));
  }
  return wizards;
};

var renderWizard = function (wizardElement) {
  var wizardNode = wizardTemplate.cloneNode(true);
  wizardNode.querySelector('.setup-similar-label').innerText = wizardElement.name + ' ' + wizardElement.surname;
  wizardNode.querySelector('.wizard-coat').style.fill = wizardElement.coatColor;
  wizardNode.querySelector('.wizard-eyes').style.fill = wizardElement.eyesColor;
  return wizardNode;
};

var generateFragmentWizard = function (arr) {
  var fragmentWizard = document.createDocumentFragment();
  for (var i = 0; i < arr.length; i++) {
    fragmentWizard.appendChild(renderWizard(arr[i]));
  }
  return fragmentWizard;
};

var appendWizard = function () {
  document.querySelector('.setup-similar-list').appendChild(generateFragmentWizard(fillWizards(NAMES, SURNAMES, COAT_COLORS, EYES_COLORS)));
  document.querySelector('.setup-similar').classList.remove('hidden');
};

appendWizard();

var closeKeyEscHandler = function (evt) {
  if (evt.key === ESCAPE_BTN) {
    closeSetupPopup();
  }
};

var openSetupPopup = function () {
  setupPopup .classList.remove('hidden');
  document.addEventListener('keydown', closeKeyEscHandler);
};

var closeSetupPopup = function () {
  setupPopup .classList.add('hidden');
  document.removeEventListener('keydown', closeKeyEscHandler);
};

setupOpen.addEventListener('click', openSetupPopup);
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_BTN) {
    openSetupPopup();
  }
});
setupClose.addEventListener('click', closeSetupPopup);

setupPopup.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('wizard-coat')) {
    evt.target.style.fill = getRandomVaue(COAT_COLORS);
  } else if (evt.target.classList.contains('wizard-eyes')) {
    evt.target.style.fill = getRandomVaue(EYES_COLORS);
  } else if (evt.target.classList.contains('setup-fireball')) {
    evt.target.parentNode.style.background = getRandomVaue(FIREBALL_COLORS);
  }
});
