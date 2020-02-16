'use strict';
(function () {
  var wizardTemplate = document.querySelector('#similar-wizard-template').content.firstElementChild;

  var renderWizard = function (wizardElement) {
    var wizardNode = wizardTemplate.cloneNode(true);
    wizardNode.querySelector('.setup-similar-label').innerText = wizardElement.name;
    wizardNode.querySelector('.wizard-coat').style.fill = wizardElement.colorCoat;
    wizardNode.querySelector('.wizard-eyes').style.fill = wizardElement.colorEyes;
    return wizardNode;
  };

  var generateFragmentWizard = function (arr) {
    var fragmentWizard = document.createDocumentFragment();
    for (var i = 0; i < arr.length; i++) {
      fragmentWizard.appendChild(renderWizard(arr[i]));
    }
    return fragmentWizard;
  };

  var appendWizard = function (wizardsArray) {
    document.querySelector('.setup-similar-list').appendChild(generateFragmentWizard(wizardsArray.slice(0, window.util.COUNT_WIZARD)));
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.backend.load(appendWizard, window.util.errorHandler);

  window.appendWizard = appendWizard;

})();
