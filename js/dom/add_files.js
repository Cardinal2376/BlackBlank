'use strict';

const Server = require('../server');

const {
  each
} = $;

const addFileToDOM = (category, algorithm, file, explanation) => {
	console.log("executed");
    Server.loadFile(category, algorithm, file, explanation);
};

module.exports = (category, algorithm, files, requestedFile) => {
	console.log("add_file" + category);
	console.log("add_file" + algorithm);
	console.log("file");
	console.log(files);
  each(files, (file, explanation) => {
    addFileToDOM(category, algorithm, file, explanation);
  });
};
