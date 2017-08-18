'use strict';

const app = require('../../app');

module.exports = () => {
  $(document).on('click', 'a', function (e) {
    const href = $(this).attr('href');
    if (/^(https?:\/\/).+/.test(href)) {
      e.preventDefault();
      if (!window.open(href, '_blank')) {
        alert('请允许弹出式窗口！');
      }
    }
  });

  $(document).mouseup(function (e) {
    app.getTracerManager().command('mouseup', e);
  });
};
