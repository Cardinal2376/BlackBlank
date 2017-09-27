#include "jsoncppheader.h"
#include <string>
int main()
{
    int index = 15;
	int D[100] = {1, 1};
	Array1DTracer tracer = Array1DTracer("Fibonacci").setData(D, index);
	for (int i = 2; i < index; i++) {
		D[i] = 0;
	}
	tracer.setData(D, 15);
	for (int i = 2; i < index; i++) {
		D[i] = D[i - 2] + D[i - 1];
		tracer.select(i - 2, i - 1).wait();
		tracer.notify(i, D[i]).wait();
		tracer.denotify(i);
		tracer.deselect(i - 2, i - 1);
	}
}