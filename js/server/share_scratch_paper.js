'use strict';

const RSVP = require('rsvp');
const app = require('../app');

const postJSON = require('./ajax/post_json');

const {
  setPath
} = require('./helpers');

module.exports = () => {
  return new RSVP.Promise((resolve, reject) => {
    const {
      dataEditor,
      codeEditor
    } = app.getEditor();
	//console.log($("#name-input").text());
    const gist = {
      'description': 'temp',
      'public': true,
      'data': dataEditor.getValue(),
      'code': codeEditor.getValue(),
	  'author': $("#name-input").val()
    };
	
	
    $.post('http://localhost:3000/post', JSON.stringify(gist), function(id){
	  console.log(id);
	  app.setLoadedScratch(id);
      setPath('scratch', id);
      const {
        href
      } = location;
      $('#authorname').html($("#name-input").val());
      resolve(href);
    });
  });
};