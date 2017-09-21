#include "jsoncppheader.h"
#include <string>
int main()
{
	int D[100] = {1,9,9,6,1,1,1,8};
	int N = 8;
	Array1DTracer tracer = Array1DTracer("Buddlesort")._setData(D, N);
    LogTracer logger = LogTracer();
	string s = "original array = [";
	logger._print("original array = [");
	for(int i = 0; i < 7; i++)
		s+=to_string(D[i])+",";
	s+=to_string(D[7])+"]";
	logger._print(s);
	bool swapped;
	do {
		swapped = false;
		tracer._select(N - 1)._wait(16);
		for (int i = 1; i < N; i++) {
			tracer._select(i)._wait(18);
			if (D[i - 1] > D[i]) {
				logger._print("swap " + to_string(D[i - 1]) + " and " + to_string(D[i]));
				int temp = D[i - 1];
				D[i - 1] = D[i];
				D[i] = temp;
				swapped = true;
				tracer._notify(i - 1, D[i - 1])._notify(i, D[i])._wait(25);
				tracer._denotify(i - 1)._denotify(i);
			}
			tracer._deselect(i);
		}
		tracer._deselect(N - 1);
		N--;
	} while (swapped);
	s = "original array = [";
	logger._print("original array = [");
	for(int i = 0; i < 7; i++)
		s+=to_string(D[i])+",";
	s+=to_string(D[7])+"]";
	logger._print(s);
}