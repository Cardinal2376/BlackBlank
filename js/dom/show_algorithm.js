'use strict';

const app = require('../app');
const utils = require('../utils');
const showDescription = require('./show_description');
const addFiles = require('./add_files');
const Server = require('../server');
module.exports = (category, algorithm, data) => {
  let $menu;
  let category_name;
  let algorithm_name;

	$menu = $('#scratch-paper');
	category_name = 'Scratch Paper';
	algorithm_name = algorithm ? 'Shared' : 'Temporary';

  $('#category').html(category_name);
  $('#algorithm').html(algorithm_name);
  $('#explanation').html('');

  Server.loadFile(category, algorithm, data);
  //utils.renderMathJax();
};
