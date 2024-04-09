/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { BUITheme } from "../..";
interface TableColumnProps<T = any> {
  key?: string;
  title?: string;
  fixed?: "right" | "left";
  width?: string;
  align?: "center" | "flex-start" | "flex-end";
  render?: (record: T) => JSX.Element;
  renderHeader?: (record: T) => JSX.Element;
  filter?: boolean;
}

interface TableProps<T = any> {
  onChange?: SortProps;
  data: any[];
  columns: TableColumnProps[];
  total?: number;
  page?: number;
  pageSize?: number;
  onChangePagination?: (current: number) => void;
  rowClick?: (record: T) => void;
  customPagination?: boolean;
  rowKey?: string;
  isFirstPage?: boolean;
  isLastPage?: boolean;
  changePagination?: (direction: Direction) => void;
  hidePagination?: boolean;
  paginationPosition?: "flex-start" | "center" | "flex-end";
  renderEmpty?: JSX.Element;
  theadClass?: string;
  tdClass?: string;
  scroll?: boolean;
  hideShadow?: boolean;
  theme?: BUITheme;
  moveEnd?: (prev: number, next: number) => void;
  drag?: boolean;
  tableLayout?: any;
}

type SortProps = (data: { sort: "asc" | "desc" | "default"; sortKey: string }) => void;

export type Direction = "prev" | "next";

export type { TableColumnProps, TableProps, SortProps };
