# counting sort
# by cww97
# 2017/09/26
from tracer import *
import random


# define values
n = 10
data = []
max_val = 10
data.append([])  # array
data.append([])  # counts
data.append([])  # sortedArray

# define tracer & logger
tracer = Array2DTracer("A2D").setData(data)
logger = LogTracer("Lt")


def init():
    # fill data
    for i in range(n):
        data[1].append(0)
        data[2].append(0)
        tracer.notify(1, i, 0)
        tracer.notify(2, i, 0)
        tracer.denotify(1, i)
        tracer.denotify(2, i)
    for i in range(n):
        x = random.randint(0, max_val - 1)
        data[0].append(x)  # array
        data[1][x] += 1  # counts
        tracer.select(0, i)
        tracer.notify(1, x, data[1][x]).wait(1)
        tracer.deselect(0, i)
        tracer.denotify(1, data[0][i]).wait(1)


def counting_sort(data):
    # -----sort-----here is the core algorithm-----
    i = 0
    j = 0
    for j in range(max_val):
        while data[1][j] > 0:
            tracer.select(1, j).wait(1)
            data[2][i] = j
            data[1][j] -= 1
            tracer.notify(1, j, data[1][j])
            tracer.notify(2, i, data[2][i]).wait(1)
            tracer.deselect(1, j)
            tracer.denotify(1, j)
            tracer.denotify(2, i).wait(1)
            i += 1


if __name__ == '__main__':
    init()
    counting_sort(data)
    # print ans
    for i in range(n):
        logger.Print(data[2][i])
    tracerlist.info()
