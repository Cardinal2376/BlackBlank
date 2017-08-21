'use strict';

const Server = require('../server');

const {
  each
} = $;

const addFileToDOM = (category, algorithm, file, explanation) => {
    Server.loadFile(category, algorithm, file, explanation);
};

module.exports = (category, algorithm, files, requestedFile) => {
  each(files, (file, explanation) => {
    addFileToDOM(category, algorithm, file, explanation);
  });
};
