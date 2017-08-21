**WeightedDirectedGraphTracer** 继承 **[DirectedGraphTracer](DirectedGraphTracer)**.

## Methods

| Method | Description |
|--------|-------------|
| **WeightedDirectedGraphTracer**((String) name)| 创建 WeightedDirectedGraphTracer 并命名 |
| **attach**((LogTracer) logTracer)| 连接一个LogTracer,自动输出 |
| **palette**((Object) {visited, left, selected, default})| 设置颜色 (e.g., `{visited: 'green', left: '#FFA500', default: 'rgb(255,255,255)'}`) |
| **_setTreeData**((Number[][]) tree, (Number) root) | 设置树的可视化数据 |
| **_setData**((Number[][]) graph) | 设置图的可视化数据 |
| **_weight**((Number) target, (Number) weight) | 设置 _target_ node 的权值 |
| **_visit**((Number) target, (Number) source, (Number) weight) | 访问 _target_ node 从 _source_ node & 并设置 _target_ node 的权值 |
| **_leave**((Number) target, (Number) source, (Number) weight) | 取消访问 _target_ node 到 _source_ node & 并设置 _target_ node 的权值 |
| **_clear**() | 清除数据 |
| **_wait**() | 生成一个演示步骤 |

## Child Modules 子模块

* [WeightedUndirectedGraphTracer](WeightedUndirectedGraphTracer)
