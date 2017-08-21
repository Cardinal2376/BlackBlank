
## 演示模块
* [Tracer](Tracer)
* [LogTracer](LogTracer)
* [Array2DTracer](Array2DTracer)
* [Array1DTracer](Array1DTracer)
* [DirectedGraphTracer](DirectedGraphTracer)
* [UndirectedGraphTracer](UndirectedGraphTracer)
* [WeightedDirectedGraphTracer](WeightedDirectedGraphTracer)
* [WeightedUndirectedGraphTracer](WeightedUndirectedGraphTracer)
* [ChartTracer](ChartTracer)

## 创造随机数据
| 方法 | 描述 |
|----------|-------------|
| **Integer.random**((Number) min, (Number) max) | 随机数范围 _min_ 到 _max_. |
| **Array2D.random**((Number) N, (Number) M, (Number) min, (Number) max) | 创建 _N_ * _M_ 数组中的值 _min_ 到 _max_. |
| **Array2D.randomSorted**((Number) N, (Number) M, (Number) min, (Number) max) | 类似 `Array2D.random` 但元素按递增序 |
| **Array1D.random**((Number) N, (Number) min, (Number) max) | Create random one-dimensional 大小为 _N_的数组其中的值  _min_ 到 _max_. |
| **Array1D.randomSorted**((Number) N, (Number) min, (Number) max) | 类似 `Array1D.random` 但元素按递增序 |
| **DirectedGraph.random**((Number) N, (Number) ratio) | 创建图 _N_ 个结点 和有向边以及它的比例 _ratio_ (从 0 到 1). |
| **UndirectedGraph.random**((Number) N, (Number) ratio) | 类似 `DirectedGraph.random` 但边无向 |
| **WeightedDirectedGraph.random**((Number) N, (Number) ratio, (Number) min, (Number) max) | 类似 `DirectedGraph.random` 但边含权值从 _min_ 到 _max_. |
| **WeightedUndirectedGraph.random**((Number) N, (Number) ratio) | 类似 `WeightedDirectedGraph.random` 但边无向 |
