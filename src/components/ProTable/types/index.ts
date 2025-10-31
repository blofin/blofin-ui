import { BUITheme } from "../../../types/component";
import * as React from "react";

type SortType = "single" | "multiple";

enum SortEnum {
  default = "default",
  desc = "desc",
  asc = "asc"
}

type SortState = SortEnum.default | SortEnum.desc | SortEnum.asc;

type SortsData = {
  sortKey: string;
  sort: SortState;
};

type SortProps = (data: SortsData[] | SortsData) => void;

interface ProTableColumnProps<T = any> {
  key?: string;
  title?: string;
  fixed?: "right" | "left";
  width?: string;
  align?: "center" | "flex-start" | "flex-end";
  render?: (record: T, index: number) => React.ReactElement | React.ReactNode;
  renderHeader?: (record: T[]) => React.ReactElement | React.ReactNode;
  renderEndIcon?: () => React.ReactElement | React.ReactNode;
  filter?: boolean;
  type?: SortType;
  onCell?: (record: T, index: number) => number | undefined;
}

interface ProTableProps {
  columns: ProTableColumnProps[];
  data: any[];
  rowKey?: string;
  theadClass?: string;
  tdClass?: string;
  tbodyClass?: string;
  renderEmpty?: React.ReactElement | React.ReactNode;
  theme?: BUITheme;
  onSortChange?: SortProps;
  tableLayout?: "fixed" | "auto" | "inherit";
  draggable?: boolean; // 是否启用列拖拽排序，默认 false
  onColumnsChange?: (columns: ProTableColumnProps[]) => void; // 列顺序改变的回调
  dragHandleIcon?: React.ReactNode; // 自定义拖拽图标
  maxHeight?: string | number; // 表格最大高度，超出后内容滚动，表头固定
  rowIdPrefix?: string;
}

interface TheadProps {
  columns: ProTableColumnProps[];
  sortStates: Record<string, SortState>;
  onSort: (key: string, type?: "single" | "multiple") => void;
  activeId: string | null;
  theadClass?: string;
  draggable?: boolean;
  dragHandleIcon?: React.ReactNode; // 自定义拖拽图标
  theme?: BUITheme;
  rowIdPrefix?: string;
}

interface TbodyProps {
  columns: ProTableColumnProps[];
  data: any[];
  rowKey: string;
  tdClass?: string;
  tbodyClass?: string;
  theme?: BUITheme;
  rowIdPrefix?: string;
}

export type { ProTableProps, ProTableColumnProps, SortProps, SortsData, SortType, SortState, TheadProps, TbodyProps };
export { SortEnum };
