# -*-encoding:utf-8-*-
# QuickSort.py
# cww97
# 2017/09/26
from tracer import *
from random import randint
n = 10

# define tracers
chart = ChartTracer('Chart')
tracer = Array1DTracer('Array').attach(chart.getID()) # debugby wyj
logger = LogTracer('Output')

# init data
arr = []
logger.Print('original array:')
for i in range(n):
    arr.append(randint(0, 20))
    logger.Print(str(arr[i]))
tracer.setData(arr)

def qsort(l, r):
    i = l
    j = r
    mid = arr[(l + r) >> 1]
    while i <= j:
        tracer.select(l).select(r).wait(1)  # -1
        while arr[i] < mid:
            i += 1
            tracer.select(i).wait(1).deselect(i)  # -1
        while mid < arr[j]:
            j -= 1
            tracer.select(j).wait(1).deselect(j)  # -1
        if i <= j:
            arr[i], arr[j] = arr[j], arr[i]
            tracer.notify(i, arr[i]).notify(j, arr[j]).wait(1)  # -1
            tracer.denotify(i).denotify(j)
            i += 1
            j -= 1
    if i < r:
        qsort(i, r)
    if l < j:
        qsort(l, j)

if __name__ == '__main__':
    qsort(0, n - 1)
    logger.Print('sorted array:')
    for i in range(n):
        logger.Print(str(arr[i]))
    tracerlist.info()