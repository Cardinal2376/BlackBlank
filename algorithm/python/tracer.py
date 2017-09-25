#!/usr/bin/python
# -*- coding: UTF-8 -*-

import json

class TracerList(object):
    def __init__(self):
        self.TracerCount = 0
        self.mylist = []
    def count(self):
        self.TracerCount += 1
        return self.TracerCount
    def append(self, value):
        self.mylist.append(value)
    def info(self):
        #fp = open("sort.txt", "w")
        #for var in self.mylist:
            #fp.write(str(var))
           # print(var)
	print(json.dumps(self.mylist))
tracerlist = TracerList()

class Array2DTracer(object):

    def __init__(self, name=""):
        self.name = name
        self.id = tracerlist.count()
        self.type = "Array2DTracer"
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "init", "Data": {"name": name}}
        tracerlist.append(JSONObject)

    def palatte(self, obj):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "palette", "Data": {"obj": obj}}
        tracerlist.append(JSONObject)
        return self

    def setData(self, D):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "setData", "Data": D}
        tracerlist.append(JSONObject)
        return self

    def notify(self, x, y, v):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "notify", "Data": {"x": x, "y": y, "v": v}}
        tracerlist.append(JSONObject)
        return self
    def denotify(self, x, y):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "denotify", "Data": {"x": x, "y": y}}
        tracerlist.append(JSONObject)
        return self

    def select(self, sx, sy, ex, ey):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "selectRT", "Data": {"sx": sx, "sy": sy, "ex": ex, "ey": ey}}
        tracerlist.append(JSONObject)
        return self
    def deselect(self, sx, sy, ex, ey):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "deselectRT", "Data": {"sx": sx, "sy": sy, "ex": ex, "ey": ey}}
        tracerlist.append(JSONObject)
        return self

    def select(self, x, y):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "select", "Data": {"x": x, "y": y}}
        tracerlist.append(JSONObject)
        return self
    def deselect(self, x, y):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "deselect", "Data": {"x": x, "y": y}}
        tracerlist.append(JSONObject)
        return self

    def selectRow(self, x, sy, ey):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "selectRow", "Data": {"x": x, "sy": sy, "ey": ey}}
        tracerlist.append(JSONObject)
        return self
    def deselectRow(self, x, sy, ey):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "deselectRow", "Data": {"x": x, "sy": sy, "ey": ey}}
        tracerlist.append(JSONObject)
        return self

    def selectCol(self, y, sx, ex):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "selectCol", "Data": {"y": y, "sx": sx, "ex": ex}}
        tracerlist.append(JSONObject)
        return self
    def deselectCol(self, y, sx, ex):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "deselectCol", "Data": {"y": y, "sx": sx, "ex": ex}}
        tracerlist.append(JSONObject)
        return self

    def separate(self, x, y):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "separate", "Data": {"x": x, "y": y}}
        tracerlist.append(JSONObject)
        return self
    def separateRow(self, x):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "separateRow", "Data": {"x": x}}
        tracerlist.append(JSONObject)
        return self
    def separateCol(self, y):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "separateCol", "Data": {"y": y}}
        tracerlist.append(JSONObject)
        return self

    def deseparate(self, x, y):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "deseparate", "Data": {"x": x, "y": y}}
        tracerlist.append(JSONObject)
        return self
    def deseparateRow(self, x):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "deseparateRow", "Data": {"x": x}}
        tracerlist.append(JSONObject)
        return self
    def deseparateCol(self, y):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "deseparateCol", "Data": {"y": y}}
        tracerlist.append(JSONObject)
        return self

    def wait(self, line):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "wait", "Data": {"line": line}}
        tracerlist.append(JSONObject)
        return self

    def clear(self):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "clear", "Data": {}}
        tracerlist.append(JSONObject)
        return self

    def attach(self, id):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "attach", "Data": {"id": id}}
        tracerlist.append(JSONObject)
        return self



class Array1DTracer(object):

    def __init__(self, name=""):
        self.name = name
        self.id = tracerlist.count()
        self.type = "Array1DTracer"
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "init", "Data": {"name": name}}
        tracerlist.append(JSONObject)

    def palatte(self, obj):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "palette", "Data": {"obj": obj}}
        tracerlist.append(JSONObject)
        return self

    def setData(self, D):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "setData", "Data": D}
        tracerlist.append(JSONObject)
        return self

    def notify(self, x, v):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "notify", "Data": {"x": x, "v": v}}
        tracerlist.append(JSONObject)
        return self

    def denotify(self, x):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "denotify", "Data": {"x": x}}
        tracerlist.append(JSONObject)
        return self

    def select(self, s, e):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "selectR", "Data": {"s": s, "e": e}}
        tracerlist.append(JSONObject)
        return self

    def deselect(self, s, e):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "deselectR", "Data": {"s": s, "e": e}}
        tracerlist.append(JSONObject)
        return self

    def select(self, x):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "select", "Data": {"x": x}}
        tracerlist.append(JSONObject)
        return self

    def deselect(self, x):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "deselect", "Data": {"x": x}}
        tracerlist.append(JSONObject)
        return self

    def separate(self, x):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "separate", "Data": {"x": x}}
        tracerlist.append(JSONObject)
        return self
    def deseparate(self, x):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "deseparate", "Data": {"x": x}}
        tracerlist.append(JSONObject)
        return self

    def wait(self, line):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "wait", "Data": {"line": line}}
        tracerlist.append(JSONObject)
        return self

    def clear(self):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "clear", "Data": {}}
        tracerlist.append(JSONObject)
        return self

    def attach(self, id):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "attach", "Data": {"id": id}}
        tracerlist.append(JSONObject)
        return self


class LogTracer(object):

    def __init__(self, name=""):
        self.name = name
        self.id = tracerlist.count()
        self.type = "LogTracer"
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "init", "Data": {"name": name}}
        tracerlist.append(JSONObject)

    def Print(self, info):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "print", "Data": {"info": info}}
        tracerlist.append(JSONObject)
        return self

    def wait(self, line):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "wait", "Data": {"line": line}}
        tracerlist.append(JSONObject)
        return self

    def clear(self):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "clear", "Data": {}}
        tracerlist.append(JSONObject)
        return self


class ChartTracer(object):

    def __init__(self, name=""):
        self.name = name
        self.id = tracerlist.count()
        self.type = "ChartTracer"
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "init", "Data": {"name": name}}
        tracerlist.append(JSONObject)

    def palatte(self, obj):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "palette", "Data": {"obj": obj}}
        tracerlist.append(JSONObject)
        return self

    def setData(self, D):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "setData", "Data": D}
        tracerlist.append(JSONObject)
        return self

    def notify(self, x, v):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "notify", "Data": {"x": x, "v": v}}
        tracerlist.append(JSONObject)
        return self
    def denotify(self, x):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "denotify", "Data": {"x": x}}
        tracerlist.append(JSONObject)
        return self

    def select(self, s, e):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "selectR", "Data": {"s": s, "e": e}}
        tracerlist.append(JSONObject)
        return self
    def deselect(self, s, e):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "deselectR", "Data": {"s": s, "e": e}}
        tracerlist.append(JSONObject)
        return self

    def select(self, x):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "select", "Data": {"x": x}}
        tracerlist.append(JSONObject)
        return self
    def deselect(self, x):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "deselect", "Data": {"x": x}}
        tracerlist.append(JSONObject)
        return self

    def wait(self, line):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "wait", "Data": {"line": line}}
        tracerlist.append(JSONObject)
        return self

    def clear(self):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "clear", "Data": {}}
        tracerlist.append(JSONObject)
        return self


class DirectedGraghTracer(object):

    def __init__(self, name=""):
        self.name = name
        self.id = tracerlist.count()
        self.type = "DirectedGraphTracer"
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "init", "Data": {"name": name}}
        tracerlist.append(JSONObject)

    def palatte(self, obj):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "palette", "Data": {"obj": obj}}
        tracerlist.append(JSONObject)
        return self

    def setTreeData(self, D):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "setTreeData", "Data": D}
        tracerlist.append(JSONObject)
        return self

    def setData(self, D):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "setData", "Data": D}
        tracerlist.append(JSONObject)
        return self

    def visit(self, t, s):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "visit", "Data": {"t": t, "s": s}}
        tracerlist.append(JSONObject)
        return self

    def leave(self, t, s):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "leave", "Data": {"t": t, "s": s}}
        tracerlist.append(JSONObject)
        return self

    def wait(self, line):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "wait", "Data": {"line": line}}
        tracerlist.append(JSONObject)
        return self

    def clear(self):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "clear", "Data": {}}
        tracerlist.append(JSONObject)
        return self

    def attach(self, id):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "attach", "Data": {"id": id}}
        tracerlist.append(JSONObject)
        return self


class UnDirectedGraghTracer(object):
    def __init__(self, name=""):
        self.name = name
        self.id = tracerlist.count()
        self.type = "UnDirectedGraphTracer"
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "init", "Data": {"name": name}}
        tracerlist.append(JSONObject)

    def palatte(self, obj):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "palette", "Data": {"obj": obj}}
        tracerlist.append(JSONObject)
        return self

    def setTreeData(self, D):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "setTreeData", "Data": D}
        tracerlist.append(JSONObject)
        return self

    def setData(self, D):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "setData", "Data": D}
        tracerlist.append(JSONObject)
        return self

    def visit(self, t, s):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "visit", "Data": {"t": t, "s": s}}
        tracerlist.append(JSONObject)
        return self

    def leave(self, t, s):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "leave", "Data": {"t": t, "s": s}}
        tracerlist.append(JSONObject)
        return self

    def wait(self, line):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "wait", "Data": {"line": line}}
        tracerlist.append(JSONObject)
        return self

    def clear(self):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "clear", "Data": {}}
        tracerlist.append(JSONObject)
        return self

    def attach(self, id):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "attach", "Data": {"id": id}}
        tracerlist.append(JSONObject)
        return self


class WeightedDirectedGraghTracer(object):
    def __init__(self, name=""):
        self.name = name
        self.id = tracerlist.count()
        self.type = "WeightedDirectedGraphTracer"
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "init", "Data": {"name": name}}
        tracerlist.append(JSONObject)

    def palatte(self, obj):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "palette", "Data": {"obj": obj}}
        tracerlist.append(JSONObject)
        return self

    def setTreeData(self, D, root):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "setTreeData", "Data": {"D": D, "root": root}}
        tracerlist.append(JSONObject)
        return self

    def setData(self, D):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "setData", "Data": D}
        tracerlist.append(JSONObject)
        return self

    def weight(self, t, w):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "weight", "Data": {"t": t, "w": w}}
        tracerlist.append(JSONObject)
        return self

    def visit(self, t, s, w):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "visit", "Data": {"t": t, "s": s, "w": w}}
        tracerlist.append(JSONObject)
        return self

    def leave(self, t, s, w):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "leave", "Data": {"t": t, "s": s, "w": w}}
        tracerlist.append(JSONObject)
        return self

    def wait(self, line):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "wait", "Data": {"line": line}}
        tracerlist.append(JSONObject)
        return self

    def clear(self):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "clear", "Data": {}}
        tracerlist.append(JSONObject)
        return self

    def attach(self, id):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "attach", "Data": {"id": id}}
        tracerlist.append(JSONObject)
        return self


class WeightedUnDirectedGraghTracer(object):
    def __init__(self, name=""):
        self.name = name
        self.id = tracerlist.count()
        self.type = "WeightedUnDirectedGraphTracer"
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "init", "Data": {"name": name}}
        tracerlist.append(JSONObject)

    def palatte(self, obj):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "palette", "Data": {"obj": obj}}
        tracerlist.append(JSONObject)
        return self

    def setTreeData(self, D, root):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "setTreeData", "Data": {"D": D, "root": root}}
        tracerlist.append(JSONObject)
        return self

    def setData(self, D):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "setData", "Data": D}
        tracerlist.append(JSONObject)
        return self

    def weight(self, t, w):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "weight", "Data": {"t": t, "w": w}}
        tracerlist.append(JSONObject)
        return self

    def visit(self, t, s, w):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "visit", "Data": {"t": t, "s": s, "w": w}}
        tracerlist.append(JSONObject)
        return self

    def leave(self, t, s, w):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "leave", "Data": {"t": t, "s": s, "w": w}}
        tracerlist.append(JSONObject)
        return self

    def wait(self, line):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "wait", "Data": {"line": line}}
        tracerlist.append(JSONObject)
        return self

    def clear(self):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "clear", "Data": {}}
        tracerlist.append(JSONObject)
        return self

    def attach(self, id):
        JSONObject = {"ID": self.id, "Type": self.type, "Event": "attach", "Data": {"id": id}}
        tracerlist.append(JSONObject)
        return self


import random
if __name__ == '__main__':
    A = []
    for i in range(10):
        A.append(random.randint(1, 100))
    tracer = Array1DTracer("A1D").setData(A)
    logger = LogTracer("Lt")
    A[0] = 100
    tracer.notify(0, A[0]).wait(1)
    tracer.denotify(0)
    A[1] = 1
    tracer.notify(1, A[1]).wait(1)
    for i in range(9):
        for j in range(9 - i):
            tracer.select(j)
            tracer.select(j + 1).wait(1)
            if A[j] > A[j + 1]:
                tmp = A[j + 1]
                A[j + 1] = A[j]
                A[j] = tmp
                tracer.notify(j, A[j])
                tracer.notify(j + 1, A[j + 1]).wait(1)

    #for i in range(10):
        #print(A[i])
    tracerlist.info()

#just test git push




