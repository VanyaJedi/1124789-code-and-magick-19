'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW_GAP = 10;
var PADDING = 20;
var BAR_WIDTH = 40;
var MAX_BAR_HEIGHT = 150;
var HIST_X = 130;
var HIST_Y = 80;
var HIST_GAP_X = 60;
var HIST_GAP_Y = 15;

var getMaxValue = function (arr) {
  var maxValue = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
};

window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = '#fff';
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.textBaseline = 'hanging';
  ctx.font = '16px PT MONO';
  ctx.fillStyle = '#000';
  ctx.fillText('ура, вы победили', CLOUD_X + PADDING, CLOUD_Y + PADDING);
  ctx.fillText('Список результатов:', CLOUD_X + PADDING, CLOUD_Y + PADDING * 2);

  var maxResult = getMaxValue(times);

  for (var i = 0; i < names.length; i++) {
    var barHeight = times[i] / maxResult * MAX_BAR_HEIGHT;
    var randomSaturate = Math.random() * 100 + '%';

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsla(240, 100%,' + randomSaturate + ', 1)';
    }
    ctx.fillRect(HIST_X + HIST_GAP_X * i + BAR_WIDTH * i, HIST_Y + (MAX_BAR_HEIGHT - barHeight), BAR_WIDTH, barHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), HIST_X + HIST_GAP_X * i + BAR_WIDTH * i, HIST_Y + (MAX_BAR_HEIGHT - barHeight) - HIST_GAP_Y);
    ctx.fillText(names[i], HIST_X + HIST_GAP_X * i + BAR_WIDTH * i, HIST_Y + MAX_BAR_HEIGHT + HIST_GAP_Y);
  }
};
