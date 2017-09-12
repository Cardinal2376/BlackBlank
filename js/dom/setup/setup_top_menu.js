'use strict';

const app = require('../../app');
const Server = require('../../server');
const Toast = require('../toast');
const TopMenu = require('../top_menu');
const RunJson = require('../../runjson');
module.exports = () => {
	
  // shared
  $('#shared').mouseup(function () {
    $(this).select();
  });

  $('#btn_share').click(function () {
	var name = $("#name-input").val();
	console.log("name");
	console.log(name);
    Server.shareScratchPaper().then((url) => {
	  $('#author').text($('#name-input').val());
	  $('#shared-link').text(url);
	  $('#myModal').modal();
    });
	
  });

  // control

  const $btnRun = $('#btn_run');
  const $btnTrace = $('#btn_trace');
  const $btnPause = $('#btn_pause');
  const $btnPrev = $('#btn_prev');
  const $btnNext = $('#btn_next');
  const $btnGenerate = $('#btn_generate');

  // initially, control buttons are disabled
  TopMenu.disableFlowControl();

  $btnRun.click(() => {
	//console.log(RunJson);
    var curLanguage = app.getLanguageState();
    $btnPause.removeClass('active');
    $btnRun.addClass('active');
    TopMenu.enableFlowControl();
    if(curLanguage == "javascript") {
      //$btnTrace.click();
      var err = app.getEditor().execute();
      if (err) {
        console.error(err);
        Toast.showErrorToast(err);
        TopMenu.resetTopMenuButtons();
      }
    } else {
	  const {
        dataEditor,
        codeEditor
     } = app.getEditor();
	 var jsonObject = new Object();
	 jsonObject.code = codeEditor.getValue();
	 jsonObject.lang = curLanguage;
	 console.log(jsonObject);
	  $.post("http://182.92.182.233:3000/dopost", jsonObject, function(data, textStatus, jqXHR) {
		RunJson(data);  
	  });
    }
    
  });

  $btnPause.click(() => {
    $btnRun.toggleClass('active');
    $btnPause.toggleClass('active');
    if (app.getTracerManager().isPause()) {
      app.getTracerManager().resumeStep();
    } else {
      app.getTracerManager().pauseStep();
    }
  });

  $btnPrev.click(() => {
    $btnRun.removeClass('active');
    $btnPause.addClass('active');
    app.getTracerManager().pauseStep();
    app.getTracerManager().prevStep();
  });

  $btnNext.click(() => {
    $btnRun.removeClass('active');
    $btnPause.addClass('active');
    app.getTracerManager().pauseStep();
    app.getTracerManager().nextStep();
  });
  
  $("#lang_js").click(() => {
     const {
        dataEditor,
        codeEditor
     } = app.getEditor();
     $(".data_container").removeClass('hide');
     dataEditor.setValue("");
     codeEditor.setValue("");
     $(".code_container").css('top', '40%');
     codeEditor.session.setMode('ace/mode/javascript');
     app.setLanguageState("javascript");
  });
  
  $("#lang_cpp").click(() => {
    const {
        dataEditor,
        codeEditor
    } = app.getEditor();
    $(".data_container").addClass('hide');
    dataEditor.setValue("");
    codeEditor.setValue("");
    $(".code_container").css('top', '0');
    codeEditor.session.setMode('ace/mode/c_cpp');
    app.setLanguageState("cpp");
  });
  
  $("#lang_java").click(() => {
    const {
      dataEditor,
      codeEditor
    } = app.getEditor();
    $(".data_container").addClass('hide');
    dataEditor.setValue("");
    codeEditor.setValue("");
    $(".code_container").css('top', '0');
    codeEditor.session.setMode('ace/mode/java');
    app.setLanguageState("java");
  });
};
