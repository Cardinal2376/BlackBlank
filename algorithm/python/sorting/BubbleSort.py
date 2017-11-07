from tracer import *
import random

A = []
n = 12
for i in range(n):
    A.append(random.randint(1, 100))
chart = ChartTracer("Chart")
tracer = Array1DTracer("Array1D").setData(A)
tracer.attach(chart.id)
logger = LogTracer("Logger")
logger.Print("the origin array : " + str(A))
for i in range(n - 1):
    tracer.select(n - 1 - i)
    for j in range(n - 1 - i):
        tracer.select(j).wait()
        if A[j] > A[j + 1]:
            tmp = A[j + 1]
            A[j + 1] = A[j]
            A[j] = tmp
            tracer.notify(j, A[j])
            tracer.notify(j + 1, A[j + 1]).wait()
            tracer.denotify(j)
            tracer.denotify(j+1)
        tracer.deselect(j)
    tracer.deselect(n - 1 - i)
logger.Print("the sorted array : " + str(A))
tracerlist.info()
