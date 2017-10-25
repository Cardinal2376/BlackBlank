#include "jsoncppheader.h"
#include <string>
int D[4][100] = {
    {3,2,4,1,5,7,3,0},
    {0,1,2,3,4,5,6,7},
    {0,0,0,0,0,0,0,0},
    {0,0,0,0,0,0,0,0}
};
Array2DTracer tracer = Array2DTracer();
int A[100] =  {3,2,4,1,5,7,3,0};
int sortedA[100] = {0,0,0,0,0,0,0,0};
int counts[100] =  {0,0,0,0,0,0,0,0};
int main()
{
    tracer.setData(D[0],100,4,8);
    for (int i = 0; i < 8; i++) {
        tracer.select(0, i).wait();
        counts[A[i]]++;
        tracer.notify(2, A[i], counts[A[i]]).wait();
        tracer.deselect(0, i);
        tracer.denotify(2, A[i]).wait();
    }
    int i = 0;
    for (int j = 0; j < 8; j++) {
        while (counts[j] > 0) {
            tracer.select(1, j).wait();
            sortedA[i] = j;
            counts[j]--;
            tracer.notify(2, j, counts[j]);
            tracer.notify(3, i, sortedA[i]).wait();
            tracer.deselect(2, j);
            tracer.denotify(2, j);
            tracer.denotify(3, i).wait();
            tracer.deselect(1, j);
            i++;
        }
    }
}