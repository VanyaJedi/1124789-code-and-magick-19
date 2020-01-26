'use strict';

var COUNT_WIZARD = 4;
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var wizards = [];
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var fragmentWizard = document.createDocumentFragment();

var getRandomVaue = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var generateWizard = function () {
  return {
    name: getRandomVaue(names),
    surname: getRandomVaue(surnames),
    coatColor: getRandomVaue(coatColors),
    eyesColor: getRandomVaue(eyesColors),
  };
};

var fillWizards = function () {
  for (var i = 0; i < COUNT_WIZARD; i++) {
    wizards.push(generateWizard());
  }
};

var renderWizard = function (wizardElement) {
  var wizardNode = wizardTemplate.cloneNode(true);
  wizardNode.querySelector('.setup-similar-label').innerText = wizardElement.name + ' ' + wizardElement.surname;
  wizardNode.querySelector('.wizard-coat').style.fill = wizardElement.coatColor;
  wizardNode.querySelector('.wizard-eyes').style.fill = wizardElement.eyesColor;
  return wizardNode;
};

var appendWizard = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    fragmentWizard.appendChild(renderWizard(arr[i]));
  }
  document.querySelector('.setup-similar-list').appendChild(fragmentWizard);
};


document.querySelector('.setup').classList.remove('hidden');
fillWizards();
appendWizard(wizards);
document.querySelector('.setup-similar').classList.remove('hidden');
