#-*-encoding:utf-8-*-
from tracer import *
st1 = 'AGGTAB'
st2 = 'GXTXAYB'
m = len(st1)
n = len(st2)
f = []
for i in range(m+1):
    f.append([])
    for j in range(n+1):
        f[i].append(0)

tracer1 = Array1DTracer('string1').setData(st1)
tracer2 = Array1DTracer('string2').setData(st2)
tracer3 = Array2DTracer('MemoTable').setData(f)
logger = LogTracer('Output')


def dp():
    # Build the memo table in bottom up fashion
    for i in range(1, m+1):
        for j in range(1, n+1):
            if st1[i-1] == st2[j-1]:
                tracer1.select(i-1).wait()
                tracer2.select(j-1).wait()
                tracer3.select(i-1,j-1).wait()

                f[i][j] = f[i-1][j-1] + 1

                tracer1.deselect(i-1)
                tracer2.deselect(j-1)
                tracer3.deselect(i-1, j-1)
            else:
                tracer3.select(i-1, j).wait()
                tracer3.select(i, j-1).wait()

                f[i][j] = max(f[i-1][j], f[i][j-1])

                tracer3.deselect(i-1, j)
                tracer3.deselect(i, j-1)
        tracer3.notify(i, j, f[i][j]).wait().denotify(i, j)


def get_ans():
    ans = ''
    i = m
    j = n
    while i >= 1 and j >= 1:
        tracer3.select(i, j).wait()
        if st1[i-1] == st2[j-1]:
            tracer1.select(i-1).wait()
            tracer2.select(j-1).wait()

            ans = st1[i-1] + ans
        elif f[i-1][j] > f[i][j-1]:
            i -= 1
        else:
            j -= 1
    ans1 = u'Longest Common Subsequence Length is %d' % f[m][n]
    ans2 = u'Longest Common Subsequence is %s' % ans
    logger.Print(ans1)
    logger.Print(ans2)


if __name__ == '__main__':
    dp()
    get_ans()
    tracerlist.info()