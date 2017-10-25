#include "jsoncppheader.h"
#include <string>
int D[100] = {9,8,8,6,1,7,5,7,11,9,4,2};
int N = 12;
ChartTracer chart = ChartTracer("Chart");
Array1DTracer tracer = Array1DTracer("Quicksort").setData(D, N);
LogTracer logger = LogTracer();
void partition(int* D,int low,int high) {
    int i, j, s;
    while (high > low) {
        i = low;
        j = high;
        s = D[low];
        while (i < j) {
            tracer.select(high).select(low).wait();
            while (D[j] > s){ 
                tracer.select(j).wait();
                tracer.deselect(j);
                j--;
            }
            D[i] = D[j];
            tracer.notify(i, D[j]).wait().denotify(i);
            while (s >= D[i] && i < j){ 
                tracer.select(i).wait();
                tracer.deselect(i);
                i++;
            }
            D[j] = D[i];
            tracer.notify(j, D[i]).wait().denotify(j);
            tracer.deselect(high).deselect(low);
        }
        D[i] = s;
        tracer.notify(i, s).wait();
        tracer.denotify(i);
        partition(D, low, i-1);
        low = i+1;
    }
}

void quicksort(int* D) {
    partition(D, 0, N-1);
}
int main()
{
    tracer.attach(chart.id);
	string s = "original array = [";
	for(int i = 0; i < N - 1; i++)
		s+=to_string(D[i])+",";
	s+=to_string(D[N - 1])+"]";
	logger.print(s);
	quicksort(D);
	s = "sorted array = [";
	for(int i = 0; i < N - 1; i++)
		s+=to_string(D[i])+",";
	s+=to_string(D[N - 1])+"]";
	logger.print(s);
}