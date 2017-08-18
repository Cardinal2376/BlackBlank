'use strict';

const app = require('../../app');
const Toast = require('../toast');

const {
  parseFloat
} = Number;

const minInterval = 0.1;
const maxInterval = 10;
const startInterval = 0.5;
const stepInterval = 0.1;

const normalize = (sec) => {


  let interval;
  let message;
  if (sec < minInterval) {
    interval = minInterval;
    message = `时间间隔太小，请设置在${minInterval}秒以上。`;
  } else if (sec > maxInterval) {
    interval = maxInterval;
    message = `时间间隔太大，请设置在${maxInterval}秒以下。`;
  } else {
    interval = sec;
    message = `时间间隔被重置为${sec}秒。`
  }

  return [interval, message];
};

module.exports = () => {

  const $interval = $('#interval');
  $interval.val(startInterval);
  $interval.attr({
    max: maxInterval,
    min: minInterval,
    step: stepInterval
  });

  $('#interval').on('change', function() {
    const tracerManager = app.getTracerManager();
    const [seconds, message] = normalize(parseFloat($(this).val()));

    $(this).val(seconds);
    tracerManager.interval = seconds * 1000;
    Toast.showInfoToast(message);
  });
};
