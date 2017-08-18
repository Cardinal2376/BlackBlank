'use strict';

const setupDividers = require('./setup_dividers');
const setupDocument = require('./setup_document');
const setupInterval = require('./setup_interval');
const setupModuleContainer = require('./setup_module_container');
const setupTopMenu = require('./setup_top_menu');
const setupWindow = require('./setup_window');

/**
 * Initializes elements once the app loads in the DOM.
 */
const setup = () => {

  $('.btn input').click((e) => {
    e.stopPropagation();
  });

  // dividers
  setupDividers();

  // document
  setupDocument();

  // interval
  setupInterval();

  // module container
  setupModuleContainer();

  // top menu
  setupTopMenu();

  // window
  setupWindow();

};

module.exports = {
  setup
};
