#include "jsoncppheader.h"
#include <string>
int main()
{
	int D[100] = {9,8,8,6,1,7,5,7,11,9,4,2};
	int N = 12;
	ChartTracer chart = ChartTracer("Chart");
	Array1DTracer tracer = Array1DTracer("Buddlesort").setData(D, N);
	tracer.attach(chart.id);
    LogTracer logger = LogTracer();
	string s = "original array = [";
	for(int i = 0; i < N - 1; i++)
		s+=to_string(D[i])+",";
	s+=to_string(D[N - 1])+"]";
	logger.print(s);
	bool swapped;
	int n = N;
	do {
		swapped = false;
		tracer.select(N - 1).wait();
		for (int i = 1; i < n; i++) {
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
		tracer.deselect(n - 1);
		n--;
	} while (swapped);
	s = "sorted array = [";
	for(int i = 0; i < N - 1; i++)
		s+=to_string(D[i])+",";
	s+=to_string(D[N - 1])+"]";
	logger.print(s);
}