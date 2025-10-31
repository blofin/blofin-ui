import * as React from "react";
import { ProTableProps, SortEnum, SortState, SortsData } from "./types";
import Thead from "./Thead";
import Tbody from "./Tbody";
import proTableStyles from "./styles";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragStartEvent
} from "@dnd-kit/core";
import { arrayMove, SortableContext, horizontalListSortingStrategy } from "@dnd-kit/sortable";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import { useTheme } from "../../provider/useTheme";

const ProTable: React.FC<ProTableProps> = (props) => {
  const {
    columns: initialColumns,
    data,
    rowKey = "id",
    theadClass,
    tdClass,
    tbodyClass,
    renderEmpty,
    onSortChange,
    tableLayout = "auto",
    draggable = false, // 默认不启用拖拽
    onColumnsChange,
    dragHandleIcon,
    maxHeight,
    rowIdPrefix
  } = props;

  const { theme } = useTheme();

  const [columns, setColumns] = React.useState(initialColumns);
  const [sortStates, setSortStates] = React.useState<Record<string, SortState>>({});
  const [activeId, setActiveId] = React.useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8 // 8px 移动后才激活拖拽
      }
    }),
    useSensor(KeyboardSensor)
  );

  // 只在初始化时设置列，不响应后续的 props 变化
  // 如果需要重置，父组件应该改变 ProTable 的 key
  React.useEffect(() => {
    setColumns(initialColumns);
  }, [initialColumns]); // eslint-disable-line react-hooks/exhaustive-deps

  // 处理排序
  const handleSort = (key: string, type?: "single" | "multiple") => {
    const currentSort = sortStates[key] || SortEnum.default;
    let newSort: SortState;

    // 循环: default -> desc -> asc -> default
    if (currentSort === SortEnum.default) {
      newSort = SortEnum.desc;
    } else if (currentSort === SortEnum.desc) {
      newSort = SortEnum.asc;
    } else {
      newSort = SortEnum.default;
    }

    const sortType = type || "single";
    let newSortStates: Record<string, SortState>;

    if (sortType === "single") {
      // 单列排序：清空其他列的排序状态
      newSortStates = { [key]: newSort };
    } else {
      // 多列排序：保留其他列的排序状态
      newSortStates = { ...sortStates, [key]: newSort };

      // 如果新状态是default，则删除该key
      if (newSort === SortEnum.default) {
        delete newSortStates[key];
      }
    }

    setSortStates(newSortStates);

    // 触发回调
    if (onSortChange) {
      if (sortType === "single") {
        onSortChange({ sortKey: key, sort: newSort });
      } else {
        const sortsArray: SortsData[] = Object.entries(newSortStates).map(([sortKey, sort]) => ({
          sortKey,
          sort
        }));
        onSortChange(sortsArray);
      }
    }
  };

  // 拖拽开始
  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  // 拖拽结束
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    setActiveId(null);

    if (!over || active.id === over.id) {
      return;
    }

    setColumns((items) => {
      const oldIndex = items.findIndex((item) => item.key === active.id);
      const newIndex = items.findIndex((item) => item.key === over.id);

      // 检查是否尝试拖到 fixed 列
      if (oldIndex === -1 || newIndex === -1 || items[newIndex].fixed) {
        return items;
      }

      // 使用 dnd-kit 的 arrayMove 工具函数
      const newColumns = arrayMove(items, oldIndex, newIndex);

      // 触发列顺序改变回调
      if (onColumnsChange) {
        onColumnsChange(newColumns);
      }

      return newColumns;
    });
  };

  // 只允许拖拽非 fixed 的列
  const sortableItems = columns
    .filter((col) => !col.fixed && col.key)
    .map((col) => col.key as string);

  // 计算表格总宽度
  const calculateTableWidth = () => {
    const totalWidth = columns.reduce((sum, col) => {
      if (col.width) {
        const width = parseInt(col.width);
        return sum + (isNaN(width) ? 150 : width);
      }
      // 没有设置 width 的列默认按 150px 计算
      return sum + 150;
    }, 0);
    return totalWidth > 0 ? `${totalWidth}px` : undefined;
  };

  const tableWidth = calculateTableWidth();

  // 渲染表格内容
  const renderTable = () => (
    <div
      className={proTableStyles.container({ theme })}
      style={
        maxHeight 
          ? { maxHeight, overflowX: "auto", overflowY: "auto" } 
          : { overflowX: "auto" }
      }>
      {data.length > 0 ? (
        <table 
          className={proTableStyles.table()} 
          style={{ 
            tableLayout, 
            minWidth: tableLayout === "fixed" ? tableWidth : undefined
          }}>
          <Thead
            columns={columns}
            sortStates={sortStates}
            onSort={handleSort}
            activeId={draggable ? activeId : null}
            theadClass={theadClass}
            draggable={draggable}
            dragHandleIcon={dragHandleIcon}
            theme={theme}
            rowIdPrefix={rowIdPrefix}
          />
          <Tbody
            columns={columns}
            data={data}
            rowKey={rowKey}
            tdClass={tdClass}
            tbodyClass={tbodyClass}
            theme={theme}
            rowIdPrefix={rowIdPrefix}
          />
        </table>
      ) : (
        <div className={proTableStyles.empty({ theme })}>{renderEmpty || "No Data"}</div>
      )}
    </div>
  );

  // 如果不启用拖拽，直接返回表格
  if (!draggable) {
    return renderTable();
  }

  // 启用拖拽时，使用 DndContext 包装
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToHorizontalAxis]} // 限制为横向拖拽
    >
      <SortableContext
        items={sortableItems}
        strategy={horizontalListSortingStrategy} // 横向排序策略
      >
        {renderTable()}
      </SortableContext>
    </DndContext>
  );
};

export default ProTable;
