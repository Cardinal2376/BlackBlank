#include "jsoncppheader.h"
#include <string>
int N = 8;
int D[100] = {9,-1,8,6,1,0,1,8};
Array1DTracer tracer = Array1DTracer("Quicksort")._setData(D, N);
LogTracer logger = LogTracer();
void partition(int* D,int low,int high) {
    int i, j, s;
    while (high > low) {
        i = low;
        j = high;
        s = D[low];
        while (i < j) {
            tracer._select(high)._select(low)._wait(11);
            while (D[j] > s){ 
                tracer._select(j)._wait(16);
                tracer._deselect(j);
                j--;
            }
            D[i] = D[j];
            tracer._notify(i, D[j])._wait(21)._denotify(i);
            while (s >= D[i] && i < j){ 
                tracer._select(i)._wait(20);
                tracer._deselect(i);
                i++;
            }
            D[j] = D[i];
            tracer._notify(j, D[i])._wait(25)._denotify(j);
            tracer._deselect(high)._deselect(low);
        }
        D[i] = s;
        tracer._notify(i, s)._wait(29);
        tracer._denotify(i);
        partition(D, low, i-1);
        low = i+1;
    }
}

void quicksort(int* D) {
    partition(D, 0, N-1);
}
int main()
{
	string s = "original array = [";
	logger._print("original array = [");
	for(int i = 0; i < N - 1; i++)
		s+=to_string(D[i])+",";
	s+=to_string(D[N - 1])+"]";
	logger._print(s);
	quicksort(D);
	s = "original array = [";
	for(int i = 0; i < N - 1; i++)
		s+=to_string(D[i])+",";
	s+=to_string(D[N - 1])+"]";
	logger._print(s);
}