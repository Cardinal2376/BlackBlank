#include "jsoncppheader.h"
#include <string>
int main()
{
	int D[100] = {9,-1,8,6,1,0,1,8};
	int N = 8;
	Array1DTracer tracer = Array1DTracer("Buddlesort").setData(D, N);
    LogTracer logger = LogTracer();
	string s = "original array = [";
	logger.print("original array = [");
	for(int i = 0; i < 7; i++)
		s+=to_string(D[i])+",";
	s+=to_string(D[7])+"]";
	logger.print(s);
	bool swapped;
	do {
		swapped = false;
		tracer.select(N - 1).wait();
		for (int i = 1; i < N; i++) {
			tracer.select(i).wait();
			if (D[i - 1] > D[i]) {
				logger.print("swap " + to_string(D[i - 1]) + " and " + to_string(D[i]));
				int temp = D[i - 1];
				D[i - 1] = D[i];
				D[i] = temp;
				swapped = true;
				tracer.notify(i - 1, D[i - 1]).notify(i, D[i]).wait();
				tracer.denotify(i - 1).denotify(i);
			}
			tracer.deselect(i);
		}
		tracer.deselect(N - 1);
		N--;
	} while (swapped);
	s = "original array = [";
	for(int i = 0; i < 7; i++)
		s+=to_string(D[i])+",";
	s+=to_string(D[7])+"]";
	logger.print(s);
}