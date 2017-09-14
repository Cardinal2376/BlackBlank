'use strict';

const RSVP = require('rsvp');
const app = require('../app');

const {
  getFileDir
} = require('../utils');

const getJSON = require('./ajax/get_json');
const loadAlgorithm = require('./load_algorithm');


module.exports = (gistID) => {
  return new RSVP.Promise((resolve, reject) => {
    app.setLoadedScratch(gistID);
    $.get(`http://182.92.182.233:3000/${gistID}`, function(files) {
    files = JSON.parse(files);
    console.log("files");
    console.log(files);
    
    const category = 'scratch';
    const algorithm = gistID;

    loadAlgorithm(category, algorithm).then((data) => {
		
		const algoLanguage = files['language'];
		var algoData = "";
    if(algoLanguage == 'javascript') algoData = files['data'];
		app.setLanguageState(algoLanguage);
    
    const algoCode = files['code'];
		const authorname = files['author'];
		//console.log("authorname");
		//console.log(authorname);
    $("#authorname").html(authorname);
        // update scratch paper algo code with the loaded gist code
		const {
			  dataEditor,
			  codeEditor
		} = app.getEditor();
		app.setEditorMode(algoLanguage);
    dataEditor.setValue(algoData);
    codeEditor.setValue(algoCode);
        const dir = getFileDir(category, algorithm, 'scratch_paper');
        app.updateCachedFile(dir, {
          data: algoData,
          code: algoCode,
          'CREDIT.md': 'Shared by a user'
        });
        resolve({
          category,
          algoLanguage,
          algorithm,
          data
        });
      });
    });
  });

};