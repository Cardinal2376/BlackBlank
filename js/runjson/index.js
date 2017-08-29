'use strict';

const modules = require('../module');
const app = require('../app');

function RunJson(json) {
	
	var tracerlist = [];
	var list = JSON.parse(json);
	var tracerManager = app.getTracerManager()
	console.log(list);
	try {
		tracerManager.deallocateAll();
		for(var i = 0; i < list.length ; i++) {
			var item = list[i];
			var itemData = item.Data;
			if(item.Event == "init") {
				switch(itemData.type) {
					case "Array2DTracer":
						tracerlist[item.ID] = new modules.Array2DTracer();
						break;
					case "LogTracer" :
						tracerlist[item.ID] = new modules.LogTracer();
						break;
				}
			} else if(item.Event == "setData") {
				tracerlist[item.ID]._setData(itemData);
			} else if(item.Event == "attach") {
				//tracerlist[item.ID].attach(tracerlist[itemData.id]);
			} else if(item.Event == "print") {
				tracerlist[item.ID]._print(itemData.info);
			} else if(item.Event == "notify") {
				tracerlist[item.ID]._notify(itemData.x, itemData.y, itemData.z);
			} else if(item.Event == "denotify") {
				tracerlist[item.ID]._denotify(itemData.x, itemData.y);
			} else if(item.Event == "select") {
				tracerlist[item.ID]._select(itemData.x, itemData.y);
			} else if(item.Event == "deselect") {
				tracerlist[item.ID]._deselect(itemData.x, itemData.y);
			} else if(item.Event == "wait") {
				tracerlist[item.ID]._wait(itemData.line);
			}
		}
		tracerManager.visualize();
	} catch (err) {
		return err;
	} finally {
		tracerManager.removeUnallocated();
	}
}
module.exports = RunJson;