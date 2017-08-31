'use strict';

const modules = require('../module');
const app = require('../app');

function RunJson(json) {
	var tracer = new WeightedDirectedGraphTracer();
	console.log(tracer._setData);
	var tracerlist = [];
	var list = JSON.parse(json);
	var tracerManager = app.getTracerManager();
	try {
		tracerManager.deallocateAll();
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var itemData = item.Data;
			//console.log("has run");
			//console.log(item);
			if(item.Event == "init") {
				switch(item.Type) {
					case "Array2DTracer":
						tracerlist[item.ID] = new Array2DTracer(itemData.name);
						break;
					case "Array1DTracer":
						tracerlist[item.ID] = new Array1DTracer(itemData.name);
						break;
					case "LogTracer":
						tracerlist[item.ID] = new LogTracer(itemData.name);
						break;
					case "ChartTracer":
						tracerlist[item.ID] = new ChartTracer(itemData.name);
						break;
					case "DirectedGraphTracer":
						tracerlist[item.ID] = new DirectedGraphTracer(itemData.name);
						break;
					case "UndirectedGraphTracer":
						tracerlist[item.ID] = new UndirectedGraphTracer(itemData.name);
						break;
					case "WeightedDirectedGraphTracer":
						tracerlist[item.ID] = new WeightedDirectedGraphTracer(itemData.name);
						break;
					case "WeightedUndirectedGraphTracer":
						tracerlist[item.ID] = new WeightedUndirectedGraphTracer(itemData.name);
						break;
				}
			} else if(item.Event == "setData") {
				tracerlist[item.ID]._setData(itemData);
			} else if(item.Event == "clear") {
				tracerlist[item.ID]._clear();
			} else if(item.Event == "wait") {
				tracerlist[item.ID]._wait(itemData.line);
			} else {
				if(item.Type == "Array2DTracer") {
					if(item.Event == "palette") {
						tracerlist[item.ID].palette(itemData);
					} else if(item.Event == "notify") {
						tracerlist[item.ID]._notify(itemData.x, itemData.y, itemData.v);
					} else if(item.Event == "denotify") {
						tracerlist[item.ID]._denotify(itemData.x, itemData.y);
					} else if(item.Event == "selectRT") {
						tracerlist[item.ID]._select(itemData.sx, itemData.sy, itemData.ex, itemData.ey);
					} else if(item.Event == "select") {
						tracerlist[item.ID]._select(itemData.x, itemData.y);
					} else if(item.Event == "selectRow") {
						tracerlist[item.ID]._selectRow(itemData.x, itemData.sy, itemData.ey);
					} else if(item.Event == "selectCol") {
						tracerlist[item.ID]._selectCol(itemData.y, itemData.sx, itemData.ex);
					} else if(item.Event == "deselectRT") {
						tracerlist[item.ID]._deselect(itemData.sx, itemData.sy, itemData.ex, itemData.ey);
					} else if(item.Event == "deselect") {
						tracerlist[item.ID]._deselect(itemData.x, itemData.y);
					} else if(item.Event == "deselectRow") {
						tracerlist[item.ID]._deselectRow(itemData.x, itemData.sy, itemData.ey);
					} else if(item.Event == "deselectCol") {
						tracerlist[item.ID]._deselectCol(itemData.y, itemData.sx, itemData.ex);
					} else if(item.Event == "separate") {
						tracerlist[item.ID]._separate(itemData.x, itemData.y);
					} else if(item.Event == "separateRow") {
						tracerlist[item.ID]._separateRow(itemData.x);
					} else if(item.Event == "separateCol") {
						tracerlist[item.ID]._separateCol(itemData.y);
					} else if(item.Event == "deseparate") {
						tracerlist[item.ID]._deseparate(itemData.x, itemData.y);
					} else if(item.Event == "deseparateRow") {
						tracerlist[item.ID]._deseparateRow(itemData.x);
					} else if(item.Event == "deseparateCol") {
						tracerlist[item.ID]._deseparateCol(itemData.y);
					} else if(item.Event == "attach") {
						tracerlist[item.ID].attach(tracerlist[itemData.id]);
					}
				} else if(item.Type == "LogTracer") {
					if(item.Event == "print") {
						tracerlist[item.ID]._print(itemData.info);
					}
				} else if(item.Type == "Array1DTracer") {
					if(item.Event == "palette") {
						tracerlist[item.ID].palette(itemData);
					} else if(item.Event == "notify") {
						tracerlist[item.ID]._notify(itemData.x, itemData.v);
					} else if(item.Event == "denotify") {
						tracerlist[item.ID]._denotify(itemData.x);
					} else if(item.Event == "selectR") {
						tracerlist[item.ID]._select(itemData.s, itemData.e);
					} else if(item.Event == "select") {
						tracerlist[item.ID]._select(itemData.x);
					} else if(item.Event == "deselectR") {
						tracerlist[item.ID]._deselect(itemData.s, itemData.e);
					} else if(item.Event == "deselect") {
						tracerlist[item.ID]._deselect(itemData.x);
					} else if(item.Event == "separate") {
						tracerlist[item.ID]._separate(itemData.x);
					} else if(item.Event == "deseparate") {
						tracerlist[item.ID]._deseparate(itemData.x);
					} else if(item.Event == "attach") {
						tracerlist[item.ID].attach(tracerlist[itemData.id]);
					}
				} else if(item.Type == "ChartTracer") {
					if(item.Event == "palette") {
						tracerlist[item.ID].palette(itemData);
					} else if(item.Event == "notify") {
						tracerlist[item.ID]._notify(itemData.x, itemData.v);
					} else if(item.Event == "denotify") {
						tracerlist[item.ID]._denotify(itemData.x);
					} else if(item.Event == "selectR") {
						tracerlist[item.ID]._select(itemData.s, itemData.e);
					} else if(item.Event == "select") {
						tracerlist[item.ID]._select(itemData.x);
					} else if(item.Event == "deselectR") {
						tracerlist[item.ID]._deselect(itemData.s, itemData.e);
					} else if(item.Event == "deselect") {
						tracerlist[item.ID]._deselect(itemData.x);
					}
				} else if(item.Type == "DirectedGraphTracer") {
					if(item.Event == "palette") {
						tracerlist[item.ID].palette(itemData);
					} else if(item.Event == "setTreeData") {
						tracerlist[item.ID]._setTreeData(itemData);
					} else if(item.Event == "visit") {
						tracerlist[item.ID]._visit(itemData.t, itemData.s);
					} else if(item.Event == "leave") {
						tracerlist[item.ID]._leave(itemData.t, itemData.s);
					} else if(item.Event == "attach") {
						tracerlist[item.ID].attach(tracerlist[itemData.id]);
					}
				} else if(item.Type == "UndirectedGraphTracer") {
					if(item.Event == "palette") {
						tracerlist[item.ID].palette(itemData);
					} else if(item.Event == "setTreeData") {
						tracerlist[item.ID]._setTreeData(itemData);
					} else if(item.Event == "visit") {
						tracerlist[item.ID]._visit(itemData.t, itemData.s);
					} else if(item.Event == "leave") {
						tracerlist[item.ID]._leave(itemData.t, itemData.s);
					} else if(item.Event == "attach") {
						tracerlist[item.ID].attach(tracerlist[itemData.id]);
					}
				} else if(item.Type == "WeightedDirectedGraphTracer") {
					if(item.Event == "palette") {
						tracerlist[item.ID].palette(itemData);
					} else if(item.Event == "setTreeData") {
						tracerlist[item.ID]._setTreeData(itemData);
					} else if(item.Event == "weight") {
						tracerlist[item.ID]._weight(itemData.t, itemData.w);
					} else if(item.Event == "visit") {
						tracerlist[item.ID]._visit(itemData.t, itemData.s, itemData.w);
					} else if(item.Event == "leave") {
						tracerlist[item.ID]._leave(itemData.t, itemData.s, itemData.w);
					}
				} else if(item.Type == "WeightedUndirectedGraphTracer") {
					if(item.Event == "palette") {
						tracerlist[item.ID].palette(itemData);
					} else if(item.Event == "setTreeData") {
						tracerlist[item.ID]._setTreeData(itemData);
					} else if(item.Event == "weight") {
						tracerlist[item.ID]._weight(itemData.t, itemData.w);
					} else if(item.Event == "visit") {
						tracerlist[item.ID]._visit(itemData.t, itemData.s, itemData.w);
					} else if(item.Event == "leave") {
						tracerlist[item.ID]._leave(itemData.t, itemData.s, itemData.w);
					}
				}
			}
		}
		
		tracerManager.visualize();
	} catch (err) {
		console.log(err);
		return err;
	} finally {
		tracerManager.removeUnallocated();
	}
	app.setIsLoading(false);
}
module.exports = RunJson;

/*
		for(var i = 0; i < list.length ; i++) {
			var item = list[i];
			var itemData = item.Data;
			if(item.Event == "init") {
				switch(item.ID) {
					case 1:
						tracerlist[item.ID] = new Array2DTracer();
						break;
					case 0:
						tracerlist[item.ID] = new LogTracer();
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
		*/