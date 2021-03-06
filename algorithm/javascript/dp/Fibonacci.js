var tracer = new Array1DTracer('Sequence');
var index = 15;
var D = [1, 1];
for (var i = 2; i < index; i++) {
    D.push(0);
}
tracer._setData(D);


for (var i = 2; i < index; i++) {
    D[i] = D[i - 2] + D[i - 1];
    tracer._select(i - 2, i - 1)._wait();
    tracer._notify(i, D[i])._wait();
    tracer._denotify(i);
    tracer._deselect(i - 2, i - 1);
}