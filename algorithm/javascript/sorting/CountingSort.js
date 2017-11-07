var maxValue = 9;
var arrSize = 10;

//initialize array values
var A = Array1D.random(arrSize, 0, maxValue);
var counts = [];
var sortedA = [];
for (let i = 0; i <= maxValue; i++) {
    counts[i] = 0;
    if (i < arrSize) sortedA[i] = 0;
}
var D = [
    A,
    counts,
    sortedA
];

var tracer = new Array2DTracer();
tracer._setData(D);

//set counts values
for (let i = 0; i < A.length; i++) {
    tracer._select(0, i)._wait();
    counts[A[i]]++;
    tracer._notify(1, A[i], D[1][A[i]])._wait();
    tracer._deselect(0, i);
    tracer._denotify(1, A[i], D[1][A[i]])._wait();
}

//sort
var i = 0;
for (var j = 0; j <= maxValue; j++) {
    while (counts[j] > 0) {
        tracer._select(1, j)._wait();
        sortedA[i] = j;
        counts[j]--;
        tracer._notify(1, j, D[1][j]);
        tracer._notify(2, i, D[2][i])._wait();
        tracer._deselect(1, j);
        tracer._denotify(1, j, D[1][j]);
        tracer._denotify(2, i, D[2][i])._wait();
        i++;
    }
}