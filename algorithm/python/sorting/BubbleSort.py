# by wyj
# for test py
from tracer import *
import random

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
