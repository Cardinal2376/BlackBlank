
## ��ʾģ��
* [Tracer](Tracer)
* [LogTracer](LogTracer)
* [Array2DTracer](Array2DTracer)
* [Array1DTracer](Array1DTracer)
* [DirectedGraphTracer](DirectedGraphTracer)
* [UndirectedGraphTracer](UndirectedGraphTracer)
* [WeightedDirectedGraphTracer](WeightedDirectedGraphTracer)
* [WeightedUndirectedGraphTracer](WeightedUndirectedGraphTracer)
* [ChartTracer](ChartTracer)

## �����������
| ���� | ���� |
|----------|-------------|
| **Integer.random**((Number) min, (Number) max) | �������Χ _min_ �� _max_. |
| **Array2D.random**((Number) N, (Number) M, (Number) min, (Number) max) | ���� _N_ * _M_ �����е�ֵ _min_ �� _max_. |
| **Array2D.randomSorted**((Number) N, (Number) M, (Number) min, (Number) max) | ���� `Array2D.random` ��Ԫ�ذ������� |
| **Array1D.random**((Number) N, (Number) min, (Number) max) | Create random one-dimensional ��СΪ _N_���������е�ֵ  _min_ �� _max_. |
| **Array1D.randomSorted**((Number) N, (Number) min, (Number) max) | ���� `Array1D.random` ��Ԫ�ذ������� |
| **DirectedGraph.random**((Number) N, (Number) ratio) | ����ͼ _N_ ����� ��������Լ����ı��� _ratio_ (�� 0 �� 1). |
| **UndirectedGraph.random**((Number) N, (Number) ratio) | ���� `DirectedGraph.random` �������� |
| **WeightedDirectedGraph.random**((Number) N, (Number) ratio, (Number) min, (Number) max) | ���� `DirectedGraph.random` ���ߺ�Ȩֵ�� _min_ �� _max_. |
| **WeightedUndirectedGraph.random**((Number) N, (Number) ratio) | ���� `WeightedDirectedGraph.random` �������� |
