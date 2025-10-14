import * as React from "react";
import { ProTableColumnProps, SortEnum, TheadProps } from "../types";
import proTableStyles from "../styles";
import clsx from "clsx";
import { useSortable, defaultAnimateLayoutChanges } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { AnimateLayoutChanges } from '@dnd-kit/sortable';

// 拖拽手柄图标组件
const DragHandleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 16 16" 
    fill="currentColor"
    className={className}
    style={{ flexShrink: 0 }}
  >
    <circle cx="6" cy="4" r="1.5" />
    <circle cx="10" cy="4" r="1.5" />
    <circle cx="6" cy="8" r="1.5" />
    <circle cx="10" cy="8" r="1.5" />
    <circle cx="6" cy="12" r="1.5" />
    <circle cx="10" cy="12" r="1.5" />
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
  const nodeRef = React.useRef<HTMLTableCellElement>(null);
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
    isDragging,
  } = useSortable({
    id: column.key || `col-${index}`,
    disabled: !draggable || !!column.fixed,
    animateLayoutChanges,
    transition: {
      duration: 250,
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
    },
  });

  const setRefs = React.useCallback((node: HTMLTableCellElement | null) => {
    nodeRef.current = node;
    setSortableRef(node);
  }, [setSortableRef]);

  React.useEffect(() => {
    if (isDragging && nodeRef.current) {
      const width = nodeRef.current.getBoundingClientRect().width;
      setComputedWidth(width);
    } else if (!isDragging) {
      setComputedWidth(null);
    }
  }, [isDragging]);

  const getThStyle = (): React.CSSProperties => {
    const effectiveWidth = isDragging && computedWidth
      ? `${computedWidth}px`
      : (column.width || "auto");
  
    let zIndex: number | string = 'auto';
    if (column.fixed) {
      zIndex = isDragging ? 1001 : 1000;
    } else if (isDragging) {
      zIndex = 100;
    }
  
    const style: React.CSSProperties = {
      transform: transform ? CSS.Translate.toString(transform) : undefined,
      transition: transition || 'transform 250ms cubic-bezier(0.25, 1, 0.5, 1)',
      willChange: 'transform',
      width: effectiveWidth,
      textAlign: proTableStyles.getTextAlign(column.align) as React.CSSProperties['textAlign'],
      opacity: isDragging ? 0.5 : 1,
      // cursor 由 className 控制，不在 inline style 中设置
      zIndex: zIndex,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
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

  return (
    <th
      ref={setRefs}
      className={className}
      style={getThStyle()}
      {...attributes}
      {...listeners}
      onClick={() => onSort(column)}
    >
      <div className="bu-flex bu-items-center bu-gap-2 bu-relative" style={{ justifyContent: column.align || "center" }}>
        <div className="bu-flex">
          {column.renderHeader ? column.renderHeader([]) : column.title}
          {renderSortIcon(column)}
        </div>
        
        {showDragHandle && (
          <span 
            className={clsx(proTableStyles.dragHandle({ 
              theme, 
            }),'group-hover:bu-opacity-100')}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: '4px'
            }}
          >
            {dragHandleIcon || <DragHandleIcon />}
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
    theme = "light"
  } = props;

  const handleSort = (column: ProTableColumnProps) => {
    if (column.filter && column.key) {
      onSort(column.key, column.type);
    }
  };

  const renderSortIcon = (column: ProTableColumnProps) => {
    if (!column.filter || !column.key) return null;

    const sortState = sortStates[column.key] || SortEnum.default;

    return (
      <span className={proTableStyles.sortIcon()}>
        <span
          className={proTableStyles.sortArrow({
            direction: "asc",
            theme,
            active: sortState === SortEnum.asc
          })}
        />
        <span
          className={proTableStyles.sortArrow({
            direction: "desc",
            theme,
            active: sortState === SortEnum.desc
          })}
        />
      </span>
    );
  };

  return (
    <thead className={clsx(proTableStyles.thead({ theme }), theadClass)}>
      <tr>
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
