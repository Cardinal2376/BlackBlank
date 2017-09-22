#include "jsoncppheader.h"
#include <string>
int D[3][100] = {
    {3,2,4,0,5,7,3,8},
    {0,0,0,0,0,0,0,0},
    {0,0,0,0,0,0,0,0}
};
Array2DTracer tracer = Array2DTracer();
int A[100] =  {3,2,4,0,5,7,3,8};
int sortedA[100] = {0,0,0,0,0,0,0,0};
int counts[100] =  {0,0,0,0,0,0,0,0};
int main()
{
    tracer._setData(D[0],8,8);
    for (int i = 0; i < 8; i++) {
        tracer._select(0, i)._wait();
        counts[A[i]]++;
        tracer._notify(1, A[i], counts[A[i]])._wait();
        tracer._deselect(0, i);
        tracer._denotify(1, A[i])._wait();
    }
    int i = 0;
    for (int j = 0; j <= 9; j++) {
        while (counts[j] > 0) {
            tracer._select(1, j)._wait();
            sortedA[i] = j;
            counts[j]--;
            tracer._notify(1, j, counts[j]);
            tracer._notify(2, i, sortedA[i])._wait();
            tracer._deselect(1, j);
            tracer._denotify(1, j);
            tracer._denotify(2, i)._wait();
            i++;
        }
    }
}