'use strict';
(function () {
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.firstElementChild;

  var generateWizard = function (names, surnames, coatColors, eyesColors) {
    return {
      name: window.util.getRandomValue(names),
      surname: window.util.getRandomValue(surnames),
      coatColor: window.util.getRandomValue(coatColors),
      eyesColor: window.util.getRandomValue(eyesColors),
    };
  };

  var fillWizards = function (names, surnames, coatColors, eyesColors) {
    var wizards = [];
    for (var i = 0; i < window.util.COUNT_WIZARD; i++) {
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
    document.querySelector('.setup-similar-list').appendChild(generateFragmentWizard(fillWizards(window.util.NAMES, window.util.SURNAMES, window.util.COAT_COLORS, window.util.EYES_COLORS)));
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  appendWizard();

})();
