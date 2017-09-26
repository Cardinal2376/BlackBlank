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
    tracer.setData(D[0],100,3,8);
    for (int i = 0; i < 8; i++) {
        tracer.select(0, i).wait();
        counts[A[i]]++;
        tracer.notify(1, A[i], counts[A[i]]).wait();
        tracer.deselect(0, i);
        tracer.denotify(1, A[i]).wait();
    }
    int i = 0;
    for (int j = 0; j <= 9; j++) {
        while (counts[j] > 0) {
            tracer.select(1, j).wait();
            sortedA[i] = j;
            counts[j]--;
            tracer.notify(1, j, counts[j]);
            tracer.notify(2, i, sortedA[i]).wait();
            tracer.deselect(1, j);
            tracer.denotify(1, j);
            tracer.denotify(2, i).wait();
            i++;
        }
    }
}