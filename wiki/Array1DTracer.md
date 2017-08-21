**Array1DTracer** 继承 **[Array2DTracer](Array2DTracer)**.

## 方法

| 方法 | 描述 |
|--------|-------------|
| **Array1DTracer**((String) name) | 建立 Array1DTracer 并设置它的名字 |
| **attach**((ChartTracer) chartTracer)| 连接一个ChartTracer，同步演示 |
| **palette**((Object) {selected, notified, default})| 设置颜色 (e.g., `{selected: 'green', notified: '#FFA500', default: 'rgb(255,255,255)'}`) |
| **_setData**((Number[]) data)| 设置一维数组数据 |
| **_notify**((Number) idx, (Number) v) | 表示第_idx_项的值已经变为 _v_ |
| **_denotify**((Number) idx) | 取消高亮显示第_idx_项 |
| **_select**((Number) s, (Number) e) | 选择范围从 _s_ 到 _e_ |
| **_select**((Number) idx) | 选择元素 _idx_ |
| **_deselect**((Number) s, (Number) e) | 取消选择元素从 _s_ 到 _e_ |
| **_deselect**((Number) idx) | 取消选择元素 _idx_ |
| **_separate**((Number) idx) | 设置一个分隔在 _idx_ 到 (_idx+1_)之间 |
| **_deseparate**((Number) idx) | 移除一个分隔在 _idx_ 到 (_idx+1_) 之间|
| **_clear**() | 清除数据 |
| **_wait**() | 生成一个演示步骤 |
