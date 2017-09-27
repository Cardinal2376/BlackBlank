#-*-encoding:utf-8-*-
# fibonacci
# cww97
# 2017/09/26
from tracer import *
tracer = Array1DTracer('fib')
n = 15
fib = [0, 1]
for i in range(2, n):
    fib.append(0)
tracer.setData(fib)


if __name__ == '__main__':
    for i in range(2, n):
        # here is core code of fibonacci
        fib[i] = fib[i-1] + fib[i-2]
        tracer.select(i-2).select(i-1).wait()
        tracer.notify(i, fib[i]).wait()
        tracer.denotify(i).deselect(i-2).deselect(i-1)
    tracerlist.info()