#include "jsoncppheader.h"
#include <string>
int main()
{
    int index = 15;
	int D[100] = {1, 1};
	Array1DTracer tracer = Array1DTracer("Fibonacci")._setData(D, index);
	for (int i = 2; i < index; i++) {
		D[i] = 0;
	}
	tracer._setData(D, 15);
	for (int i = 2; i < index; i++) {
		D[i] = D[i - 2] + D[i - 1];
		tracer._select(i - 2, i - 1)._wait(14);
		tracer._notify(i, D[i])._wait(15);
		tracer._denotify(i);
		tracer._deselect(i - 2, i - 1);
	}
}