import * as React from "react";
import { ProTableColumnProps, SortEnum, TheadProps } from "../types";
import proTableStyles from "../styles";
import clsx from "clsx";
import { useSortable, defaultAnimateLayoutChanges } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import type { AnimateLayoutChanges } from "@dnd-kit/sortable";

// 拖拽手柄图标组件
const DragHandleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
    className={className}
    style={{ flexShrink: 0 }}>
    <rect x="4" y="5" width="8" height="2" rx="1" />
    <rect x="4" y="9" width="8" height="2" rx="1" />
  </svg>
);

// 单个可拖拽的表头单元格组件
interface SortableThCellProps {
  column: ProTableColumnProps;
  index: number;
  columns: ProTableColumnProps[];
  sortState?: string;
  onSort: (column: ProTableColumnProps) => void;
  renderSortIcon: (column: ProTableColumnProps) => React.ReactNode;
  isDragging?: boolean;
  draggable?: boolean;
  dragHandleIcon?: React.ReactNode;
  theme?: "light" | "dark";
}

const SortableThCell: React.FC<SortableThCellProps> = ({
  column,
  index,
  columns,
  sortState,
  onSort,
  renderSortIcon,
  draggable = false,
  dragHandleIcon,
  theme = "light"
}) => {
  const nodeRef = React.useRef<HTMLTableCellElement | null>(null);
  const [computedWidth, setComputedWidth] = React.useState<number | null>(null);

  const animateLayoutChanges: AnimateLayoutChanges = (args) => {
    const { isSorting, wasDragging } = args;
    if (isSorting || wasDragging) {
      return defaultAnimateLayoutChanges(args);
    }
    return true;
  };

  const {
    attributes,
    listeners,
    setNodeRef: setSortableRef,
    transform,
    transition,
    isDragging
  } = useSortable({
    id: column.key || `col-${index}`,
    disabled: !draggable || !!column.fixed,
    animateLayoutChanges,
    transition: {
      duration: 250,
      easing: "cubic-bezier(0.25, 1, 0.5, 1)"
    }
  });

  const setRefs = React.useCallback(
    (node: HTMLTableCellElement | null) => {
      nodeRef.current = node;
      setSortableRef(node);
    },
    [setSortableRef]
  );

  React.useEffect(() => {
    if (isDragging && nodeRef.current) {
      const width = nodeRef.current.getBoundingClientRect().width;
      setComputedWidth(width);
    } else if (!isDragging) {
      setComputedWidth(null);
    }
  }, [isDragging]);

  const getThStyle = (): React.CSSProperties => {
    const effectiveWidth =
      isDragging && computedWidth ? `${computedWidth}px` : column.width || "auto";

    let zIndex: number | string = "auto";
    if (column.fixed) {
      zIndex = isDragging ? 1001 : 1000;
    } else if (isDragging) {
      zIndex = 100;
    }

    const style: React.CSSProperties = {
      transform: transform ? CSS.Translate.toString(transform) : undefined,
      transition: transition || "transform 250ms cubic-bezier(0.25, 1, 0.5, 1)",
      willChange: "transform",
      width: effectiveWidth,
      textAlign: proTableStyles.getTextAlign(column.align) as React.CSSProperties["textAlign"],
      opacity: isDragging ? 0.5 : 1,
      // cursor 由 className 控制，不在 inline style 中设置
      zIndex: zIndex,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    };

    if (isDragging && computedWidth) {
      style.minWidth = `${computedWidth}px`;
      style.maxWidth = `${computedWidth}px`;
    }

    if (column.fixed === "left") {
      let leftOffset = 0;
      for (let i = 0; i < index; i++) {
        if (columns[i].fixed === "left") {
          leftOffset += parseInt(columns[i].width || "150");
        }
      }
      style.left = `${leftOffset}px`;
    } else if (column.fixed === "right") {
      let rightOffset = 0;
      for (let i = index + 1; i < columns.length; i++) {
        if (columns[i].fixed === "right") {
          rightOffset += parseInt(columns[i].width || "150");
        }
      }
      style.right = `${rightOffset}px`;
    }

    return style;
  };

  const className = clsx(
    "bu-group",
    proTableStyles.getThClasses({
      theme,
      fixed: column.fixed,
      sortable: column.filter,
      isDragging,
      draggable
    })
  );

  const showDragHandle = draggable && !column.fixed;
  const isSortable = column.filter && column.key;

  const handleThClick = (e: React.MouseEvent) => {
    if (isSortable) {
      // 如果点击的是拖拽手柄，不触发排序
      const target = e.target as HTMLElement;
      const isDragHandle = target.closest(".drag-handle-icon");
      if (!isDragHandle) {
        onSort(column);
      }
    }
  };

  return (
    <th
      ref={setRefs}
      className={className}
      style={getThStyle()}
      {...attributes}
      {...listeners}
      onClick={handleThClick}>
      <div
        className="bu-relative bu-flex bu-items-center bu-gap-2"
        style={{ justifyContent: column.align || "center" }}>
        <div className="bu-flex bu-items-center">
          {column.renderHeader ? column.renderHeader([]) : column.title}
          {renderSortIcon(column)}
          {column.renderEndIcon ? column.renderEndIcon() : null}
        </div>

        {showDragHandle && (
          <span
            data-drag-handle
            className={`${clsx(
              proTableStyles.dragHandle({
                theme
              }),
              "group-hover:bu-opacity-100 ltr:bu-ml-[4px] rtl:bu-mr-[4px]"
            )} drag-handle-icon`}
            style={{
              display: "flex",
              alignItems: "center"
            }}>
            {dragHandleIcon !== null && (dragHandleIcon || <DragHandleIcon />)}
          </span>
        )}
      </div>
    </th>
  );
};

const Thead: React.FC<TheadProps> = (props) => {
  const {
    columns,
    sortStates,
    onSort,
    activeId,
    theadClass,
    draggable = false,
    dragHandleIcon,
    theme = "light",
    rowIdPrefix
  } = props;

  const handleSort = (column: ProTableColumnProps) => {
    if (column.filter && column.key) {
      onSort(column.key, column.type);
    }
  };

  const renderSortIcon = (column: ProTableColumnProps) => {
    if (!column.filter || !column.key) return null;

    const sortState = sortStates[column.key] || SortEnum.default;
    const defaultColor = theme === "dark" ? "rgba(235, 236, 245, 0.20)" : "rgba(10, 10, 10, 0.20)";
    const activeColor = theme === "dark" ? "rgba(235, 236, 245, 0.60)" : "rgba(10, 10, 10, 0.60)";
    const isActive = sortState !== SortEnum.default;

    return (
      <span
        className={clsx(
          "bu-inline-flex bu-align-middle bu-transition-opacity bu-duration-200",
          "ltr:bu-ml-[4px] rtl:bu-mr-[4px]"
        )}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          className={clsx(
            "bu-transition-opacity bu-duration-200",
            isActive ? "bu-opacity-100" : "bu-opacity-0 group-hover:bu-opacity-100"
          )}>
          <path
            d="M5.4847 3.04301V4.10942H0.151367V3.04301L2.81803 0.376343L5.4847 3.04301Z"
            fill={sortState === SortEnum.asc ? activeColor : defaultColor}
          />
          <path
            d="M5.4847 5.89067V6.95707L2.81803 9.62374L0.151367 6.95707V5.89067H5.4847Z"
            fill={sortState === SortEnum.desc ? activeColor : defaultColor}
          />
        </svg>
      </span>
    );
  };

  return (
    <thead className={clsx(proTableStyles.thead({ theme }), theadClass)}>
      <tr id={rowIdPrefix ? `${rowIdPrefix}-thead` : ""}>
        {columns.map((column, index) => (
          <SortableThCell
            key={column.key || index}
            column={column}
            index={index}
            columns={columns}
            sortState={column.key ? sortStates[column.key] : undefined}
            onSort={handleSort}
            renderSortIcon={renderSortIcon}
            isDragging={column.key === activeId}
            draggable={draggable}
            dragHandleIcon={dragHandleIcon}
            theme={theme}
          />
        ))}
      </tr>
    </thead>
  );
};

export default Thead;
