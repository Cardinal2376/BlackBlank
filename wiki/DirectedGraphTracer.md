**DirectedGraphTracer** 继承 **[Tracer](Tracer)**.

## 方法

| 方法 | 描述 |
|--------|-------------|
| **DirectedGraphTracer**((String) name)| 建立 DirectedGraphTracer 并命名 |
| **attach**((LogTracer) logTracer)| 连接一个LogTracer,自动输出 |
| **palette**((Object) {visited, left, default})| 设置颜色 (e.g., `{visited: 'green', left: '#FFA500', default: 'rgb(255,255,255)'}`) |
| **_setTreeData**((Number[][]) tree, (Number) root) | 设置树的可视化数据 |
| **_setData**((Number[][]) graph) | 设置图的可视化数据 |
| **_visit**((Number) target, (Number) source) | 访问 _target_ 结点从 _source_ 结点 |
| **_leave**((Number) target, (Number) source) | 取消访问 _target_ 结点到 _source_ 结点 |
| **_clear**() | 清除数据 |
| **_wait**() | 生成一个演示步骤 |

## 子模块

* [UndirectedGraphTracer](UndirectedGraphTracer)
* [WeightedDirectedGraphTracer](WeightedDirectedGraphTracer)
