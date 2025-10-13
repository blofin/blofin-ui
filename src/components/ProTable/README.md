# ProTable 组件

一个功能强大的表格组件，支持列拖拽、排序、固定列等特性。

## 特性

- ✅ **列拖拽**: 支持通过拖拽调整列的顺序（非固定列）
- ✅ **列排序**: 支持单列和多列排序
- ✅ **固定列**: 支持左右固定列
- ✅ **自定义渲染**: 支持自定义单元格和表头渲染
- ✅ **响应式**: 支持深色/浅色主题
- ✅ **空状态**: 支持自定义空数据展示

## 基本用法

```tsx
import { ProTable } from "@blofin/blofin-ui";

const columns = [
  {
    key: "name",
    title: "姓名",
    width: "150px",
    align: "flex-start"
  },
  {
    key: "age",
    title: "年龄",
    width: "100px",
    align: "center"
  }
];

const data = [
  { id: 1, name: "张三", age: 28 },
  { id: 2, name: "李四", age: 32 }
];

<ProTable columns={columns} data={data} rowKey="id" />
```

## API

### ProTable Props

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| columns | 表格列的配置 | `TableColumnProps[]` | - |
| data | 数据数组 | `any[]` | - |
| rowKey | 表格行 key 的取值字段 | `string` | `"id"` |
| theadClass | 表头的类名 | `string` | - |
| tdClass | 单元格的类名 | `string` | - |
| tbodyClass | 表体的类名 | `string` | - |
| renderEmpty | 自定义空数据展示 | `React.ReactNode` | `"暂无数据"` |
| theme | 主题 | `"light" \| "dark"` | `"light"` |
| onSortChange | 排序变化回调 | `(data: SortsData \| SortsData[]) => void` | - |
| tableLayout | 表格布局 | `"fixed" \| "auto" \| "inherit"` | `"auto"` |

### TableColumnProps

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| key | 列的唯一标识 | `string` | - |
| title | 列标题 | `string` | - |
| width | 列宽度 | `string` | - |
| align | 对齐方式 | `"center" \| "flex-start" \| "flex-end"` | `"center"` |
| fixed | 固定列 | `"left" \| "right"` | - |
| filter | 是否可排序 | `boolean` | `false` |
| type | 排序类型 | `"single" \| "multiple"` | `"single"` |
| render | 自定义渲染函数 | `(record, index) => ReactNode` | - |
| renderHeader | 自定义表头渲染 | `(records) => ReactNode` | - |
| onCell | 合并单元格 | `(record, index) => number \| undefined` | - |

## 高级用法

### 列拖拽

默认情况下，非固定列支持拖拽。拖拽时会显示流畅的动画效果：

**特性：**
- 🎯 拖拽过程中实时显示位置预览动画
- ✨ 0.3秒平滑过渡效果
- 🎨 拖拽中的列显示半透明和阴影效果
- 🔒 松开鼠标后才真正交换位置

```tsx
<ProTable
  columns={[
    { key: "name", title: "姓名", width: "150px" },
    { key: "age", title: "年龄", width: "100px" },
    { key: "email", title: "邮箱", width: "200px" }
  ]}
  data={data}
  rowKey="id"
/>
```

**动画效果说明：**
1. 按住列头开始拖拽
2. 拖拽到目标位置时，相关列会平滑移动到新位置（使用 CSS transform）
3. 松开鼠标后，列的实际顺序才会改变
4. 整个过程有流畅的过渡动画

### 列排序

设置 `filter: true` 启用排序功能。

**单列排序:**

```tsx
<ProTable
  columns={[
    {
      key: "age",
      title: "年龄",
      filter: true,
      type: "single"
    }
  ]}
  data={data}
  onSortChange={(sortData) => {
    console.log(sortData); // { sortKey: "age", sort: "desc" }
  }}
/>
```

**多列排序:**

```tsx
<ProTable
  columns={[
    {
      key: "age",
      title: "年龄",
      filter: true,
      type: "multiple"
    },
    {
      key: "salary",
      title: "薪资",
      filter: true,
      type: "multiple"
    }
  ]}
  data={data}
  onSortChange={(sortData) => {
    console.log(sortData); // [{ sortKey: "age", sort: "desc" }, ...]
  }}
/>
```

### 固定列

使用 `fixed` 属性固定列在左侧或右侧。固定列不可拖拽。

```tsx
<ProTable
  columns={[
    {
      key: "name",
      title: "姓名",
      width: "150px",
      fixed: "left"
    },
    {
      key: "age",
      title: "年龄",
      width: "100px"
    },
    {
      key: "actions",
      title: "操作",
      width: "120px",
      fixed: "right"
    }
  ]}
  data={data}
/>
```

### 自定义渲染

**自定义单元格:**

```tsx
<ProTable
  columns={[
    {
      key: "salary",
      title: "薪资",
      render: (record) => (
        <span style={{ color: record.salary > 15000 ? "green" : "red" }}>
          ¥{record.salary.toLocaleString()}
        </span>
      )
    }
  ]}
  data={data}
/>
```

**自定义表头:**

```tsx
<ProTable
  columns={[
    {
      key: "name",
      title: "姓名",
      renderHeader: () => (
        <div>
          <span>👤</span>
          <span>员工姓名</span>
        </div>
      )
    }
  ]}
  data={data}
/>
```

### 深色主题

```tsx
<ProTable
  columns={columns}
  data={data}
  theme="dark"
/>
```

### 自定义空状态

```tsx
<ProTable
  columns={columns}
  data={[]}
  renderEmpty={
    <div>
      <div>📭</div>
      <div>暂无数据，请稍后再试</div>
    </div>
  }
/>
```

## 排序状态枚举

```tsx
import { SortEnum } from "@blofin/blofin-ui/ProTable";

// SortEnum.default - 默认状态（无排序）
// SortEnum.asc - 升序
// SortEnum.desc - 降序
```

## 注意事项

1. **拖拽限制**: 固定列（`fixed: "left"` 或 `fixed: "right"`）不支持拖拽
2. **排序逻辑**: 组件仅提供排序UI交互，实际的数据排序需要在 `onSortChange` 回调中实现
3. **列宽**: 建议为每列设置明确的宽度，以获得更好的拖拽动画效果
4. **rowKey**: 确保 `rowKey` 对应的字段在数据中是唯一的
5. **拖拽动画**: 拖拽动画基于列宽计算，如果列宽为 `auto`，动画可能不够精确

## 拖拽动画原理

ProTable 使用纯 CSS transform 实现拖拽动画，不依赖任何第三方库：

- **拖拽状态管理**: 通过 `draggedIndex` 和 `dragOverIndex` 追踪拖拽状态
- **位置计算**: 动态计算每列需要移动的距离（translateX）
- **视觉反馈**: 拖拽中的列显示半透明和阴影效果
- **延迟更新**: 松开鼠标时才更新实际的列顺序，避免拖拽过程中数据闪烁

## 示例

完整示例请查看 Storybook:

```bash
npm run storybook
```

然后访问 `Components/ProTable` 查看各种用法示例。

