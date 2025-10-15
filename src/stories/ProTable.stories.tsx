import type { Meta, StoryObj } from "@storybook/react";
import ProTable from "../components/ProTable/ProTable";
import { SortEnum, ProTableColumnProps } from "../components/ProTable/types";
import * as React from "react";

const meta: Meta<typeof ProTable> = {
  title: "Components/ProTable",
  component: ProTable,
  tags: ["autodocs"],
  parameters: {
    layout: "padded"
  }
};

export default meta;
type Story = StoryObj<typeof ProTable>;

// 示例数据
const sampleData = [
  {
    id: 1,
    name: "张三",
    age: 28,
    email: "zhangsan@example.com",
    department: "技术部",
    salary: 15000
  },
  { id: 2, name: "李四", age: 32, email: "lisi@example.com", department: "市场部", salary: 12000 },
  {
    id: 3,
    name: "王五",
    age: 25,
    email: "wangwu@example.com",
    department: "设计部",
    salary: 11000
  },
  {
    id: 4,
    name: "赵六",
    age: 35,
    email: "zhaoliu@example.com",
    department: "技术部",
    salary: 18000
  },
  {
    id: 5,
    name: "钱七",
    age: 29,
    email: "qianqi@example.com",
    department: "人事部",
    salary: 10000
  },
  { id: 6, name: "孙八", age: 27, email: "sunba@example.com", department: "技术部", salary: 14000 },
  {
    id: 7,
    name: "周九",
    age: 31,
    email: "zhoujiu@example.com",
    department: "市场部",
    salary: 13000
  },
  { id: 8, name: "吴十", age: 26, email: "wushi@example.com", department: "设计部", salary: 11500 },
  {
    id: 9,
    name: "郑十一",
    age: 33,
    email: "zhengshiyi@example.com",
    department: "人事部",
    salary: 12500
  },
  {
    id: 10,
    name: "王十二",
    age: 30,
    email: "wangshier@example.com",
    department: "技术部",
    salary: 16000
  }
];

// 基础表格
export const Basic: Story = {
  args: {
    columns: [
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
      },
      {
        key: "email",
        title: "邮箱",
        width: "200px",
        align: "flex-start"
      },
      {
        key: "department",
        title: "部门",
        width: "150px",
        align: "center"
      },
      {
        key: "salary",
        title: "薪资",
        width: "120px",
        align: "flex-end"
      }
    ],
    data: sampleData,
    rowKey: "id"
  }
};

// 支持排序的表格
export const WithSorting: Story = {
  render: () => {
    const [data, setData] = React.useState(sampleData);

    const handleSort = (sortData: any) => {
      console.log("排序变化:", sortData);

      const { sortKey, sort } = sortData;

      if (sort === SortEnum.default) {
        // 恢复原始顺序
        setData([...sampleData]);
      } else {
        const sorted = [...data].sort((a, b) => {
          const aVal = a[sortKey as keyof typeof a];
          const bVal = b[sortKey as keyof typeof b];

          // 处理数字和字符串
          if (typeof aVal === "number" && typeof bVal === "number") {
            return sort === SortEnum.asc ? aVal - bVal : bVal - aVal;
          } else {
            const aStr = String(aVal);
            const bStr = String(bVal);
            if (sort === SortEnum.asc) {
              return aStr.localeCompare(bStr);
            } else {
              return bStr.localeCompare(aStr);
            }
          }
        });
        setData(sorted);
      }
    };

    return (
      <ProTable
        columns={[
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
            align: "center",
            filter: true,
            type: "single"
          },
          {
            key: "email",
            title: "邮箱",
            width: "200px",
            align: "flex-start"
          },
          {
            key: "department",
            title: "部门",
            width: "150px",
            align: "center",
            filter: true,
            type: "single"
          },
          {
            key: "salary",
            title: "薪资",
            width: "120px",
            align: "flex-end",
            filter: true,
            type: "single"
          }
        ]}
        data={data}
        rowKey="id"
        onSortChange={handleSort}
      />
    );
  }
};

// 多列排序
export const MultipleSort: Story = {
  render: () => {
    const [data, setData] = React.useState(sampleData);

    const handleSort = (sortData: any) => {
      console.log("多列排序:", sortData);

      if (Array.isArray(sortData) && sortData.length > 0) {
        const sorted = [...data].sort((a, b) => {
          // 按照排序数组的顺序依次比较
          for (const { sortKey, sort } of sortData) {
            if (sort === SortEnum.default) continue;

            const aVal = a[sortKey as keyof typeof a];
            const bVal = b[sortKey as keyof typeof b];

            let comparison = 0;
            if (typeof aVal === "number" && typeof bVal === "number") {
              comparison = aVal - bVal;
            } else {
              comparison = String(aVal).localeCompare(String(bVal));
            }

            if (comparison !== 0) {
              return sort === SortEnum.asc ? comparison : -comparison;
            }
          }
          return 0;
        });
        setData(sorted);
      } else {
        // 如果没有排序条件，恢复原始顺序
        setData([...sampleData]);
      }
    };

    return (
      <ProTable
        columns={[
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
            align: "center",
            filter: true,
            type: "multiple"
          },
          {
            key: "department",
            title: "部门",
            width: "150px",
            align: "center",
            filter: true,
            type: "multiple"
          },
          {
            key: "salary",
            title: "薪资",
            width: "120px",
            align: "flex-end",
            filter: true,
            type: "multiple"
          }
        ]}
        data={data}
        rowKey="id"
        onSortChange={handleSort}
      />
    );
  }
};

// 拖拽列演示
export const DraggableColumns: Story = {
  render: () => {
    return (
      <div>
        <div
          style={{
            marginBottom: "16px",
            padding: "12px",
            backgroundColor: "#f0f2f5",
            borderRadius: "8px"
          }}>
          <h3 style={{ margin: "0 0 8px 0", fontSize: "14px", fontWeight: "bold" }}>💡 拖拽提示</h3>
          <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "13px", lineHeight: "1.8" }}>
            <li>按住任意列头（除了固定列）开始拖拽</li>
            <li>拖拽到目标位置时，会显示平滑的动画预览效果</li>
            <li>松开鼠标后，列的顺序才会真正改变</li>
            <li>固定列（带📌标记）不可拖拽</li>
          </ul>
        </div>
        <ProTable
          draggable={true}
          columns={[
            {
              key: "name",
              title: "📌 姓名（固定）",
              width: "150px",
              align: "flex-start",
              fixed: "left"
            },
            {
              key: "age",
              title: "年龄",
              width: "100px",
              align: "center"
            },
            {
              key: "email",
              title: "邮箱",
              width: "250px",
              align: "flex-start"
            },
            {
              key: "department",
              title: "部门",
              width: "150px",
              align: "center"
            },
            {
              key: "salary",
              title: "📌 薪资（固定）",
              width: "120px",
              align: "flex-end",
              fixed: "right",
              render: (record) => <span>¥{record.salary.toLocaleString()}</span>
            }
          ]}
          data={sampleData}
          rowKey="id"
        />
      </div>
    );
  }
};

// 固定列
export const WithFixedColumns: Story = {
  args: {
    columns: [
      {
        key: "name",
        title: "姓名",
        width: "150px",
        align: "flex-start",
        fixed: "left"
      },
      {
        key: "age",
        title: "年龄",
        width: "120px",
        align: "flex-start",
        fixed: "left"
      },
      {
        key: "email",
        title: "邮箱",
        width: "250px",
        align: "flex-start"
      },
      {
        key: "department",
        title: "部门",
        width: "150px",
        align: "flex-start"
      },
      {
        key: "position",
        title: "职位",
        width: "180px",
        align: "flex-start",
        render: (record) =>
          record.department === "技术部"
            ? "高级工程师"
            : record.department === "市场部"
            ? "市场经理"
            : record.department === "设计部"
            ? "UI设计师"
            : record.department === "人事部"
            ? "HR专员"
            : "员工"
      },
      {
        key: "joinDate",
        title: "入职日期",
        width: "150px",
        align: "flex-start",
        render: (record) => `2020-0${record.id}-15`
      },
      {
        key: "status",
        title: "状态",
        width: "120px",
        align: "flex-start",
        render: (record) => (
          <span
            style={{
              padding: "4px 12px",
              borderRadius: "4px",
              backgroundColor: record.age > 30 ? "#e6f7ff" : "#fff7e6",
              color: record.age > 30 ? "#1890ff" : "#fa8c16"
            }}>
            {record.age > 30 ? "在职" : "试用期"}
          </span>
        )
      },
      {
        key: "performance",
        title: "绩效评分",
        width: "150px",
        align: "flex-start",
        render: (record) => `${(Math.random() * 2 + 3).toFixed(1)} 分`
      },
      {
        key: "salary",
        title: "薪资",
        width: "120px",
        align: "flex-end",
        fixed: "right",
        render: (record) => (
          <span style={{ color: record.salary > 15000 ? "#52c41a" : "#666" }}>
            ¥{record.salary.toLocaleString()}
          </span>
        )
      }
    ],
    data: sampleData,
    rowKey: "id",
    tableLayout: "fixed",
    draggable: true,
    maxHeight: "350px"
  }
};

// 自定义渲染
export const CustomRender: Story = {
  args: {
    columns: [
      {
        key: "name",
        title: "姓名",
        width: "150px",
        align: "flex-start",
        render: (record) => (
          <div style={{ fontWeight: "bold", color: "#1890ff" }}>{record.name}</div>
        )
      },
      {
        key: "age",
        title: "年龄",
        width: "100px",
        align: "center",
        render: (record) => <span>{record.age} 岁</span>
      },
      {
        key: "department",
        title: "部门",
        width: "150px",
        align: "center"
      },
      {
        key: "salary",
        title: "薪资",
        width: "150px",
        align: "flex-end",
        render: (record) => (
          <span style={{ color: record.salary > 15000 ? "#52c41a" : "#666" }}>
            ¥{record.salary.toLocaleString()}
          </span>
        )
      }
    ],
    data: sampleData,
    rowKey: "id"
  }
};

// 自定义表头
export const CustomHeader: Story = {
  args: {
    columns: [
      {
        key: "name",
        title: "姓名",
        width: "150px",
        align: "flex-start",
        renderHeader: () => (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span>👤</span>
            <span>员工姓名</span>
          </div>
        )
      },
      {
        key: "age",
        title: "年龄",
        width: "100px",
        align: "center"
      },
      {
        key: "department",
        title: "部门",
        width: "150px",
        align: "center",
        renderHeader: () => (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span>🏢</span>
            <span>所属部门</span>
          </div>
        )
      },
      {
        key: "salary",
        title: "薪资",
        width: "150px",
        align: "flex-end",
        renderHeader: () => (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span>💰</span>
            <span>月薪</span>
          </div>
        )
      }
    ],
    data: sampleData,
    rowKey: "id"
  }
};

// 空数据
export const EmptyData: Story = {
  args: {
    columns: [
      {
        key: "name",
        title: "姓名",
        width: "150px"
      },
      {
        key: "age",
        title: "年龄",
        width: "100px"
      },
      {
        key: "email",
        title: "邮箱",
        width: "200px"
      }
    ],
    data: [],
    rowKey: "id"
  }
};

// 自定义空状态
export const CustomEmpty: Story = {
  args: {
    columns: [
      {
        key: "name",
        title: "姓名",
        width: "150px"
      },
      {
        key: "age",
        title: "年龄",
        width: "100px"
      },
      {
        key: "email",
        title: "邮箱",
        width: "200px"
      }
    ],
    data: [],
    rowKey: "id",
    renderEmpty: (
      <div style={{ textAlign: "center", padding: "40px", color: "#999" }}>
        <div style={{ fontSize: "48px", marginBottom: "16px" }}>📭</div>
        <div>暂无数据，请稍后再试</div>
      </div>
    )
  }
};

// 深色主题
export const DarkTheme: Story = {
  args: {
    columns: [
      {
        key: "name",
        title: "姓名",
        width: "150px",
        align: "flex-start",
        filter: true
      },
      {
        key: "age",
        title: "年龄",
        width: "100px",
        align: "center",
        filter: true
      },
      {
        key: "email",
        title: "邮箱",
        width: "200px",
        align: "flex-start"
      },
      {
        key: "department",
        title: "部门",
        width: "150px",
        align: "center"
      },
      {
        key: "salary",
        title: "薪资",
        width: "120px",
        align: "flex-end"
      }
    ],
    data: sampleData,
    rowKey: "id",
    theme: "dark"
  },
  parameters: {
    backgrounds: { default: "dark" }
  }
};

// 完整功能演示
export const FullFeatured: Story = {
  render: () => {
    const [data, setData] = React.useState(sampleData);

    const handleSort = (sortData: any) => {
      console.log("排序:", sortData);

      if (Array.isArray(sortData)) {
        // 多列排序
        if (sortData.length === 0) {
          setData([...sampleData]);
          return;
        }

        const sorted = [...data].sort((a, b) => {
          for (const { sortKey, sort } of sortData) {
            if (sort === SortEnum.default) continue;

            const aVal = a[sortKey as keyof typeof a];
            const bVal = b[sortKey as keyof typeof b];

            let comparison = 0;
            if (typeof aVal === "number" && typeof bVal === "number") {
              comparison = aVal - bVal;
            } else {
              comparison = String(aVal).localeCompare(String(bVal));
            }

            if (comparison !== 0) {
              return sort === SortEnum.asc ? comparison : -comparison;
            }
          }
          return 0;
        });
        setData(sorted);
      } else {
        // 单列排序
        const { sortKey, sort } = sortData;
        if (sort === SortEnum.default) {
          setData([...sampleData]);
        } else {
          const sorted = [...data].sort((a, b) => {
            const aVal = a[sortKey as keyof typeof a];
            const bVal = b[sortKey as keyof typeof b];

            if (typeof aVal === "number" && typeof bVal === "number") {
              return sort === SortEnum.asc ? aVal - bVal : bVal - aVal;
            } else {
              const aStr = String(aVal);
              const bStr = String(bVal);
              return sort === SortEnum.asc ? aStr.localeCompare(bStr) : bStr.localeCompare(aStr);
            }
          });
          setData(sorted);
        }
      }
    };

    return (
      <ProTable
        columns={[
          {
            key: "name",
            title: "姓名",
            width: "150px",
            align: "flex-start",
            fixed: "left",
            render: (record) => <div style={{ fontWeight: "bold" }}>{record.name}</div>
          },
          {
            key: "age",
            title: "年龄",
            width: "100px",
            align: "center",
            filter: true,
            type: "single"
          },
          {
            key: "email",
            title: "邮箱",
            width: "250px",
            align: "flex-start"
          },
          {
            key: "department",
            title: "部门",
            width: "150px",
            align: "center",
            filter: true,
            type: "single"
          },
          {
            key: "salary",
            title: "薪资",
            width: "120px",
            align: "flex-end",
            filter: true,
            type: "single",
            fixed: "right",
            render: (record) => (
              <span style={{ color: record.salary > 15000 ? "#52c41a" : "#666" }}>
                ¥{record.salary.toLocaleString()}
              </span>
            )
          }
        ]}
        data={data}
        rowKey="id"
        onSortChange={handleSort}
      />
    );
  }
};

// 可拖拽列排序的表格
export const WithDraggableColumns: Story = {
  render: () => {
    const [columns, setColumns] = React.useState<ProTableColumnProps[]>([
      {
        key: "name",
        title: "姓名",
        width: "150px",
        align: "flex-start" as const
      },
      {
        key: "age",
        title: "年龄",
        width: "100px",
        align: "center" as const
      },
      {
        key: "email",
        title: "邮箱",
        width: "200px",
        align: "flex-start" as const
      },
      {
        key: "department",
        title: "部门",
        width: "150px",
        align: "center" as const
      },
      {
        key: "salary",
        title: "薪资",
        width: "120px",
        align: "flex-end" as const
      }
    ]);

    const handleColumnsChange = (newColumns: any[]) => {
      console.log("列顺序改变:", newColumns);
      setColumns(newColumns);
    };

    return (
      <div>
        <div style={{ marginBottom: 16, padding: 12, backgroundColor: "#f0f0f0", borderRadius: 4 }}>
          <strong>💡 提示：</strong> 拖拽表头可以调整列的顺序
        </div>
        <ProTable
          columns={columns}
          data={sampleData}
          rowKey="id"
          draggable={true}
          onColumnsChange={handleColumnsChange}
        />
      </div>
    );
  }
};

// 固定列 + 可拖拽
export const WithFixedAndDraggable: Story = {
  render: () => {
    const [columns, setColumns] = React.useState<ProTableColumnProps[]>([
      {
        key: "name",
        title: "姓名",
        width: "150px",
        align: "flex-start" as const,
        fixed: "left" as const // 固定在左侧，不可拖拽
      },
      {
        key: "age",
        title: "年龄",
        width: "100px",
        align: "center" as const
      },
      {
        key: "email",
        title: "邮箱",
        width: "200px",
        align: "flex-start" as const
      },
      {
        key: "department",
        title: "部门",
        width: "150px",
        align: "center" as const
      },
      {
        key: "salary",
        title: "薪资",
        width: "120px",
        align: "flex-end" as const,
        fixed: "right" as const // 固定在右侧，不可拖拽
      }
    ]);

    return (
      <div>
        <div style={{ marginBottom: 16, padding: 12, backgroundColor: "#f0f0f0", borderRadius: 4 }}>
          <strong>💡 提示：</strong> "姓名"列固定在左侧，"薪资"列固定在右侧，其他列可以拖拽调整顺序
        </div>
        <ProTable
          columns={columns}
          data={sampleData}
          rowKey="id"
          draggable={true}
          onColumnsChange={(newColumns) => {
            console.log("列顺序改变:", newColumns);
            setColumns(newColumns);
          }}
        />
      </div>
    );
  }
};

// 自定义拖拽图标
export const WithCustomDragIcon: Story = {
  render: () => {
    const [columns, setColumns] = React.useState<ProTableColumnProps[]>([
      {
        key: "name",
        title: "姓名",
        width: "150px",
        align: "flex-start" as const
      },
      {
        key: "age",
        title: "年龄",
        width: "100px",
        align: "center" as const
      },
      {
        key: "email",
        title: "邮箱",
        width: "200px",
        align: "flex-start" as const
      },
      {
        key: "department",
        title: "部门",
        width: "150px",
        align: "center" as const
      },
      {
        key: "salary",
        title: "薪资",
        width: "120px",
        align: "flex-end" as const
      }
    ]);

    // 自定义拖拽图标 - 使用不同的 icon
    const customDragIcon = (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M4 2h8v2H4V2zm0 5h8v2H4V7zm0 5h8v2H4v-2z" />
      </svg>
    );

    return (
      <div>
        <div style={{ marginBottom: 16, padding: 12, backgroundColor: "#f0f0f0", borderRadius: 4 }}>
          <strong>💡 提示：</strong> 使用自定义的拖拽图标（横线样式）
        </div>
        <ProTable
          columns={columns}
          data={sampleData}
          rowKey="id"
          draggable={true}
          dragHandleIcon={customDragIcon}
          onColumnsChange={(newColumns) => {
            console.log("列顺序改变:", newColumns);
            setColumns(newColumns);
          }}
        />
      </div>
    );
  }
};

// 自定义样式示例
export const WithCustomStyles: Story = {
  render: () => {
    return (
      <div>
        <div
          style={{
            marginBottom: "16px",
            padding: "12px",
            backgroundColor: "#f0f2f5",
            borderRadius: "8px"
          }}>
          <h3 style={{ margin: "0 0 8px 0", fontSize: "14px", fontWeight: "bold" }}>
            🎨 自定义样式示例
          </h3>
          <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "13px", lineHeight: "1.8" }}>
            <li>通过 theadClass、tbodyClass、tdClass 自定义样式</li>
            <li>支持 Tailwind CSS 类名</li>
            <li>可以覆盖默认样式</li>
          </ul>
        </div>

        <ProTable
          maxHeight={"350px"}
          columns={[
            {
              key: "name",
              title: "姓名",
              width: "150px",
              align: "flex-start",
              render: (record) => (
                <div className="bu-flex bu-items-center bu-gap-2">
                  <div className="bu-flex bu-h-8 bu-w-8 bu-items-center bu-justify-center bu-rounded-full bu-bg-gradient-to-r bu-from-blue-500 bu-to-purple-600 bu-text-xs bu-font-bold bu-text-white">
                    {record.name.charAt(0)}
                  </div>
                  <span className="bu-font-medium">{record.name}</span>
                </div>
              )
            },
            {
              key: "age",
              title: "年龄",
              width: "100px",
              align: "center"
            },
            {
              key: "department",
              title: "部门",
              width: "150px",
              align: "center",
              render: (record) => {
                const colors: Record<string, string> = {
                  技术部: "bu-bg-blue-100 bu-text-blue-700",
                  市场部: "bu-bg-orange-100 bu-text-orange-700",
                  设计部: "bu-bg-pink-100 bu-text-pink-700",
                  人事部: "bu-bg-purple-100 bu-text-purple-700"
                };
                return (
                  <span
                    className={`bu-rounded-full bu-px-3 bu-py-1 bu-text-xs bu-font-medium ${
                      colors[record.department] || ""
                    }`}>
                    {record.department}
                  </span>
                );
              }
            },
            {
              key: "salary",
              title: "薪资",
              width: "120px",
              align: "flex-end",
              render: (record) => (
                <span
                  className={`bu-font-bold ${
                    record.salary > 15000 ? "bu-text-green-600" : "bu-text-gray-600"
                  }`}>
                  ¥{record.salary.toLocaleString()}
                </span>
              )
            }
          ]}
          data={sampleData}
          rowKey="id"
          theadClass="!bu-bg-gradient-to-r !bu-from-blue-500 !bu-to-purple-600"
          tdClass="bu-text-sm"
        />
      </div>
    );
  }
};
