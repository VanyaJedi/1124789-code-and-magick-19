'use strict';

var COUNT_WIZARD = 4;
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var wizardTemplate = document.querySelector('#similar-wizard-template').content.firstElementChild;

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
  document.querySelector('.setup').classList.remove('hidden');
  document.querySelector('.setup-similar-list').appendChild(generateFragmentWizard(fillWizards(NAMES, SURNAMES, COAT_COLORS, EYES_COLORS)));
  document.querySelector('.setup-similar').classList.remove('hidden');
};

appendWizard();
