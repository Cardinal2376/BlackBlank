**ChartTracer** 继承 **[Tracer](Tracer)**.

## 方法

| 方法 | 描述 |
|--------|-------------|
| **ChartTracer**((String) name)| 建立 ChartTracer 并设置它的名字 |
| **palette**((Object) {selected, notified, default})| 设置颜色 (e.g., `{selected: 'green', notified: '#FFA500', default: 'rgb(255,255,255)'}`) |
| **_setData**((Number[]) data)| 设置一维数组数据 |
| **_notify**((Number) idx, (Number) v) | 表示第_idx_项的值已经变为 _v_ |
| **_denotify**((Number) idx) | 取消高亮显示第_idx_项 |
| **_select**((Number) s, (Number) e) | 选择范围 _s_ 到 _e_ |
| **_select**((Number) idx) | 选择元素 _idx_ |
| **_deselect**((Number) s, (Number) e) | 取消选择范围 _s_ 到 _e_ |
| **_deselect**((Number) idx) | 取消选择元素 _idx_ |
| **_clear**() | 清除数据 |
| **_wait**() | 生成一个演示步骤 |
