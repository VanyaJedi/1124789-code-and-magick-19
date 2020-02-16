'use strict';

(function () {


  var sortSimilarWizards = function (wizards, coat, eye) {
    var setRank = function (wizard) {
      var rank = 0;
      if (wizard.colorCoat === coat) {
        rank += 2;
      }
      if (wizard.colorEyes === eye) {
        rank += 1;
      }

      return rank;
    };

    wizards.sort(function (a, b) {
      return setRank(b) - setRank(a);
    });
  };

  window.sortSimilar = {
    sortSimilarWizards: sortSimilarWizards
  };
})();

