'use strict';

const RSVP = require('rsvp');
const app = require('./app');
const AppConstructor = require('./app/constructor');
const DOM = require('./dom');
const Server = require('./server');
const modules = require('./module');
const RunJson = require('./runjson');
const {
  extend
} = $;

$.ajaxSetup({
  cache: false,
  dataType: 'text'
});

const {
  isScratchPaper
} = require('./utils');

const {
  getHashValue,
  getParameterByName,
  getPath
} = require('./server/helpers');

//设置全局RSVP
RSVP.on('error', function (reason) {
  console.assert(false, reason);
});

$(() => {

  //初始化app
  const appConstructor = new AppConstructor();
  extend(true, app, appConstructor);

 
  
  
  //全局加载modules
  extend(true, window, modules);
/*
$.getJSON("http://localhost:3000/",function(result){
	console.log(result);
	RunJson(result);
  });
*/

  Server.loadCategories().then((data) => {
	 console.log(data);
    app.setCategories(data);
    DOM.addCategories();

    //FullScreen功能有效
    DOM.enableFullScreen();

    //解析路由
    const {
      category,
      algorithm,
      file
    } = getPath();
	
	//从gist上获取代码并可视化
	if(isScratchPaper(category)) {
		Server.loadScratchPaper(algorithm).then(({category, algorithm, data}) => {
		  DOM.showAlgorithm(category, algorithm, data);
		});
	}
		
  });
  var v1LoadedScratch = getHashValue('scratch-paper');
  var v2LoadedScratch = getParameterByName('scratch-paper');
  var vLoadedScratch = v1LoadedScratch || v2LoadedScratch;
  if (vLoadedScratch) {
    window.location.href = window.location.protocol + '//' + window.location.host + window.location.pathname + '#path=scratch/' + vLoadedScratch;
  }
  
});

