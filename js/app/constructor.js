'use strict';

const Editor = require('../editor');
const TracerManager = require('../tracer_manager');
const DOM = require('../dom/setup');

const {
  showLoadingSlider,
  hideLoadingSlider
} = require('../dom/loading_slider');

const Cache = require('./cache');

const state = {
  isLoading: null,
  editor: null,
  tracerManager: null,
  categories: null,
  loadedScratch: null,
  language: null
};

const initState = (tracerManager) => {
  state.isLoading = false;
  state.editor = new Editor(tracerManager);
  state.tracerManager = tracerManager;
  state.categories = {};
  state.loadedScratch = null;
  state.language = "javascript";
};

/**
 * Global application singleton.
 */
const App = function () {

  this.getIsLoading = () => {
    return state.isLoading;
  };

  this.setIsLoading = (loading) => {
    state.isLoading = loading;
    if (loading) {
      showLoadingSlider();
    } else {
      hideLoadingSlider();
    }
  };

  this.getEditor = () => {
    return state.editor;
  };

  this.getCategories = () => {
    return state.categories;
  };

  this.getCategory = (name) => {
    return state.categories[name];
  };

  this.setCategories = (categories) => {
    state.categories = categories;
  };

  this.updateCategory = (name, updates) => {
    $.extend(state.categories[name], updates);
  };

  this.getTracerManager = () => {
    return state.tracerManager;
  };

  this.getLoadedScratch = () => {
    return state.loadedScratch;
  };

  this.setLoadedScratch = (loadedScratch) => {
    state.loadedScratch = loadedScratch;
  };
  
  this.getLanguageState = () => {
    return state.language;
  }
  
  this.setLanguageState = (language) => {
    state.language = language;
    $("#languageSelect").text("Language: " +language);
  }
  
  this.setEditorMode = (language) => {
    if(language == "javascript") {
      $(".data_container").removeClass('hide');
      state.editor.dataEditor.setValue("");
      state.editor.codeEditor.setValue("");
      $(".code_container").css('top', '40%');
      state.editor.codeEditor.session.setMode('ace/mode/javascript');
    } else if(language == "cpp"){
      $(".data_container").addClass('hide');
      state.editor.dataEditor.setValue("");
      state.editor.codeEditor.setValue("");
      $(".code_container").css('top', '0');
      state.editor.codeEditor.session.setMode('ace/mode/c_cpp');
    } else if(language == "java") {
      $(".data_container").addClass('hide');
      state.editor.dataEditor.setValue("");
      state.editor.codeEditor.setValue("");
      $(".code_container").css('top', '0');
      state.editor.codeEditor.session.setMode('ace/mode/java');
    } else if(language == "python") {
      $(".data_container").addClass('hide');
      state.editor.dataEditor.setValue("");
      state.editor.codeEditor.setValue("");
      $(".code_container").css('top', '0');
      state.editor.codeEditor.session.setMode('ace/mode/python');
    }
    state.language = language;
  };
  const tracerManager = TracerManager.init();

  initState(tracerManager);
  DOM.setup(tracerManager);

};

App.prototype = Cache;

module.exports = App;
