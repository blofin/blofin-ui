# ProTable Component

A powerful table component with support for column drag-and-drop, sorting, fixed columns, and more.

## Features

- Column Drag-and-Drop: Reorder non-fixed columns by dragging
- Column Sorting: Single-column and multi-column sorting
- Fixed Columns: Pin columns to the left or right
- Custom Rendering: Custom cell and header rendering
- Responsive: Supports dark/light themes
- Empty State: Customizable empty data display

## Basic Usage

```tsx
import { ProTable } from "@blofin/blofin-ui";

const columns = [
  {
    key: "name",
    title: "Name",
    width: "150px",
    align: "flex-start"
  },
  {
    key: "age",
    title: "Age",
    width: "100px",
    align: "center"
  }
];

const data = [
  { id: 1, name: "John", age: 28 },
  { id: 2, name: "Jane", age: 32 }
];

<ProTable columns={columns} data={data} rowKey="id" />
```

## API

### ProTable Props

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| columns | Table column configuration | `TableColumnProps[]` | - |
| data | Data array | `any[]` | - |
| rowKey | Field used as the row key | `string` | `"id"` |
| theadClass | Class name for the table header | `string` | - |
| tdClass | Class name for table cells | `string` | - |
| tbodyClass | Class name for the table body | `string` | - |
| renderEmpty | Custom empty state display | `React.ReactNode` | `"No data"` |
| theme | Theme | `"light" \| "dark"` | `"light"` |
| onSortChange | Sort change callback | `(data: SortsData \| SortsData[]) => void` | - |
| tableLayout | Table layout | `"fixed" \| "auto" \| "inherit"` | `"auto"` |

### TableColumnProps

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| key | Unique identifier for the column | `string` | - |
| title | Column title | `string` | - |
| width | Column width | `string` | - |
| align | Alignment | `"center" \| "flex-start" \| "flex-end"` | `"center"` |
| fixed | Fixed column | `"left" \| "right"` | - |
| filter | Whether sorting is enabled | `boolean` | `false` |
| type | Sort type | `"single" \| "multiple"` | `"single"` |
| render | Custom render function | `(record, index) => ReactNode` | - |
| renderHeader | Custom header render | `(records) => ReactNode` | - |
| onCell | Cell merging | `(record, index) => number \| undefined` | - |

## Advanced Usage

### Column Drag-and-Drop

By default, non-fixed columns support drag-and-drop. Smooth animations are displayed during dragging:

**Features:**
- Real-time position preview animation during dragging
- 0.3s smooth transition effect
- Semi-transparent and shadow effect on the dragged column
- Columns are only swapped when the mouse is released

```tsx
<ProTable
  columns={[
    { key: "name", title: "Name", width: "150px" },
    { key: "age", title: "Age", width: "100px" },
    { key: "email", title: "Email", width: "200px" }
  ]}
  data={data}
  rowKey="id"
/>
```

**Animation Details:**
1. Hold and drag a column header to start dragging
2. When dragged to the target position, related columns smoothly move to the new position (using CSS transform)
3. The actual column order only changes when the mouse is released
4. The entire process has smooth transition animations

### Column Sorting

Set `filter: true` to enable sorting.

**Single-column sorting:**

```tsx
<ProTable
  columns={[
    {
      key: "age",
      title: "Age",
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

**Multi-column sorting:**

```tsx
<ProTable
  columns={[
    {
      key: "age",
      title: "Age",
      filter: true,
      type: "multiple"
    },
    {
      key: "salary",
      title: "Salary",
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

### Fixed Columns

Use the `fixed` property to pin columns to the left or right. Fixed columns cannot be dragged.

```tsx
<ProTable
  columns={[
    {
      key: "name",
      title: "Name",
      width: "150px",
      fixed: "left"
    },
    {
      key: "age",
      title: "Age",
      width: "100px"
    },
    {
      key: "actions",
      title: "Actions",
      width: "120px",
      fixed: "right"
    }
  ]}
  data={data}
/>
```

### Custom Rendering

**Custom cell:**

```tsx
<ProTable
  columns={[
    {
      key: "salary",
      title: "Salary",
      render: (record) => (
        <span style={{ color: record.salary > 15000 ? "green" : "red" }}>
          ${record.salary.toLocaleString()}
        </span>
      )
    }
  ]}
  data={data}
/>
```

**Custom header:**

```tsx
<ProTable
  columns={[
    {
      key: "name",
      title: "Name",
      renderHeader: () => (
        <div>
          <span>Employee Name</span>
        </div>
      )
    }
  ]}
  data={data}
/>
```

### Dark Theme

```tsx
<ProTable
  columns={columns}
  data={data}
  theme="dark"
/>
```

### Custom Empty State

```tsx
<ProTable
  columns={columns}
  data={[]}
  renderEmpty={
    <div>
      <div>No data available. Please try again later.</div>
    </div>
  }
/>
```

## Sort State Enum

```tsx
import { SortEnum } from "@blofin/blofin-ui/ProTable";

// SortEnum.default - Default state (no sorting)
// SortEnum.asc - Ascending order
// SortEnum.desc - Descending order
```

## Notes

1. **Drag-and-drop limitation**: Fixed columns (`fixed: "left"` or `fixed: "right"`) do not support drag-and-drop
2. **Sorting logic**: The component only provides sorting UI interactions; actual data sorting must be implemented in the `onSortChange` callback
3. **Column width**: It is recommended to set an explicit width for each column for better drag animation
4. **rowKey**: Ensure the field corresponding to `rowKey` is unique in the data
5. **Drag animation**: The drag animation is calculated based on column width; if the width is `auto`, the animation may not be precise

## Drag Animation Principles

ProTable uses pure CSS transform for drag animations without any third-party libraries:

- **Drag state management**: Tracks drag state via `draggedIndex` and `dragOverIndex`
- **Position calculation**: Dynamically calculates the distance each column needs to move (translateX)
- **Visual feedback**: The dragged column displays semi-transparent and shadow effects
- **Deferred update**: The actual column order is updated only when the mouse is released, avoiding data flickering during dragging

## Examples

For complete examples, see Storybook:

```bash
npm run storybook
```

Then visit `Components/ProTable` to see various usage examples.
