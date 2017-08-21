**Array2DTracer** 继承 **[Tracer](Tracer)**.

## 方法

| 方法 | 描述 |
|--------|-------------|
| **Array2DTracer**((String) name)| 创建 Array2DTracer 并设置它的名字 |
| **palette**((Object) {selected, notified, default})| 设置颜色 (e.g., `{selected: 'green', notified: '#FFA500', default: 'rgb(255,255,255)'}`) |
| **_setData**((Number[][]) data)| 设置二维数组数据 |
| **_notify**((Number) x, (Number) y, (Number) v) | 表示 (x, y) 的值变为 _v_ |
| **_denotify**((Number) x, (Number) y) | 取消表示 (x, y) 改变 |
| **_select**((Number) sx, (Number) sy, (Number) ex, (Number) ey) | 选择矩阵范围从 (sx, sy) 到 (ex, ey) |
| **_select**((Number) x, (Number) y) | 选择 (x, y) |
| **_selectRow**((Number) x, (Number) sy, (Number) ey) | 选择一行 **_select**(x, sy, x, ey) |
| **_selectCol**((Number) y, (Number) sx, (Number) ex) | 选择一列 **_select**(sx, y, ex, y) |
| **_deselect**((Number) sx, (Number) sy, (Number) ex, (Number) ey) | 取消选择矩阵从 (sx, sy) 到 (ex, ey) |
| **_deselect**((Number) x, (Number) y) | 取消选择 (x, y) |
| **_deselectRow**((Number) x, (Number) sy, (Number) ey) | 取消选择行 **_deselect**(x, sy, x, ey) |
| **_deselectCol**((Number) y, (Number) sx, (Number) ex) | 取消选择列 **_deselect**(sx, y, ex, y) |
| **_separate**((Number) x, (Number) y) | 设置分隔在行 _x_-th 到 (_x+1_)-th 和列 _y_-th 到 (_y+1_)-th 之间 |
| **_separateRow**((Number) x) | 分隔_x_-th 到 (_x+1_)-th行  |
| **_separateCol**((Number) y) | 分隔 _y_-th 到 (_y+1_)-th列  |
| **_deseparate**((Number) x, (Number) y) | 取消分隔行 _x_-th 到 (_x+1_)-th 和列 _y_-th 到 (_y+1_)-th 之间 |
| **_deseparateRow**((Number) x) | 取消分隔_x_-th 到 (_x+1_)-th行 |
| **_deseparateCol**((Number) y) | 取消分隔 _y_-th 到 (_y+1_)-th列 |
| **_clear**() | 清除数据 |
| **_wait**() | 生成一个演示步骤 |

## 子模块

* [Array1DTracer](Array1DTracer)
