# -*-encoding:utf-8-*-
from tracer import *
logger = LogTracer()
# var tracer = new DirectedGraphTracer().attach(new LogTracer());
tracer = DirectedGraghTracer.attach(logger.getID())
G = [ # G[i][j] indicates whether the path from the i-th node to the j-th node exists or not
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]
tracer.setData(G, 0)


def bfs(s):
    Q = []
    Q.append(s)
    l = 0
    tracer.visit(s).wait()
    while l < len(Q):
        u = Q[l]
        for i in range(len(G[u])):
            if G[u][i]:
                Q.append(i)
                tracer.visit(i, u).wait()
        l += 1


if __name__ == '__main__':
    bfs(0)
    tracerlist.info()