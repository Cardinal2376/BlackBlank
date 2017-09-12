'use strict';

const modules = require('../module');
const app = require('../app');
const Toast = require('../dom/toast');
function RunJson(json) {
	var remoteResult = JSON.parse(json);
	console.log(remoteResult);
	if(remoteResult.signal == 0) {
		var list = JSON.parse(remoteResult.data);
		RunningJson(list);
		/*
		if(isJSON(remoteResult.data)) {
			var list = JSON.parse(remoteResult.data);
			if(list.length) RunningJson(list);
		} else {
			Toast.showErrorToast("OUTPUT_ERROR\nPlease_do_not_using_stdout\n");
		}
		*/
		
	} else if(remoteResult.signal == -1) {
		Toast.showErrorToast("COMPLIE_ERROR\n" + remoteResult.error);
	} else if(remoteResult.signal == 1) {
		Toast.showErrorToast("CPU_TIME_LIMIT_EXCEEDED");
	} else if(remoteResult.signal == 2) {
		Toast.showErrorToast("REAL_TIME_LIMIT_EXCEEDED");
	} else if(remoteResult.signal == 3) {
		Toast.showErrorToast("MEMORY_LIMIT_EXCEEDED");
	} else if(remoteResult.signal == 4) {
		Toast.showErrorToast("RUNTIME_ERROR");
	} else if(remoteResult.signal == 5) {
		Toast.showErrorToast("SYSTEM_ERROR");
	}
}
function RunningJson(list) {
	var tracerlist = [];
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
function isJSON(str) {
        if (typeof str == 'string') {
            try {
                var obj=JSON.parse(str);
                if(str.indexOf('[')>-1){
                    return true;
                }else{
					console.log("error 2");
                    return false;
                }

            } catch(e) {
				console.log("error 3");
                console.log(e);
                return false;
            }
        }
		console.log("error 1");
        return false;
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