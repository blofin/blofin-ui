"use client";

import {
  forwardRef,
  UIEvent,
  useEffect,
  useImperativeHandle,
  useReducer,
  useRef,
  useState
} from "react";
import Empty from "../Empty";
// import StyledPagination from '../StyledPagination/StylePagination';
import { Context, reducer, State } from "./context";
import styles from "./index.module.scss";
import { Direction, TableProps } from "./interface";
import Pagination from "./Pagination";
import Tbody from "./Tbody";
import Thead from "./Thead";
import Sortable from "sortablejs";
import useStickyClassName from "./hooks/useStickyClassName";
import { bgStyles, cssPosition } from "./css";
import { SortButton, SortGroup, TextAlign, useTheme } from "../..";
import useStickyOffset from "./hooks/useStickyOffset";
import { SortsData } from "../Sort/reducer";

export const defaultWidth = "150";

export const PageSize = 50;

const Table = forwardRef<HTMLDivElement, TableProps>((props, ref) => {
  const [state, dispatch] = useReducer(reducer, State);

  const dragTableRef = useRef<HTMLTableElement>(null);

  const theadRef = useRef<HTMLTableRowElement | null>(null);

  const tbodyRef = useRef<HTMLTableRowElement | null>(null);

  const {
    columns,
    data,
    hidePagination = false,
    renderEmpty,
    paginationPosition = "flex-end",
    moveEnd,
    drag = false,
    tableLayout,
    dragClass,
    type = "single",
    methodRef
  } = props;

  const { theme } = useTheme();

  const getClass = useStickyClassName(columns);

  const [isDraged, setIsDraged] = useState(false);

  const offets = useStickyOffset(columns);

  const sortableRef = useRef<any>(null);

  const tableWidth =
    columns.reduce((a: number | string, b) => {
      return parseFloat(a.toString()) + parseFloat(b.width || defaultWidth);
    }, "0") + "px";

  const isFixed = columns.find((item) => item.fixed);

  const onScroll = (e: UIEvent<HTMLElement>) => {
    if (e.currentTarget.scrollLeft === 0) {
      dispatch({
        type: "checkScroll",
        payload: false
      });
    } else {
      dispatch({
        type: "checkScroll",
        payload: true
      });
    }
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    if (props.onChangePagination) {
      props.onChangePagination(value);
    }
  };

  const pageChange = (type: Direction) => {
    if (props.changePagination) {
      props.changePagination(type);
    }
  };

  const oldRef = useRef<HTMLElement | null>(null);
  const newRef = useRef<HTMLElement | null>(null);

  const sortChange = (data: SortsData[] | SortsData) => {
    props.onChange && props.onChange(data);
  };

  useEffect(() => {
    setTimeout(() => {
      if (tbodyRef.current && drag && data.length > 0) {
        const tdWidths = Array.from(tbodyRef.current.children).map(
          (td) => (td as HTMLElement).offsetWidth
        );
        if (theadRef.current) {
          Array.from(theadRef.current.children).forEach((th, index) => {
            (th as HTMLElement).style.width = tdWidths[index] + "px";
          });
        }
      }
      if (dragTableRef.current) {
        const width = dragTableRef.current.offsetWidth;
        if (theadRef.current) {
          theadRef.current.style.width = width + "px";
        }
      }
    }, 0);
  }, [drag, data, isDraged]);

  useEffect(() => {
    if (data.length === 0) {
      sortableRef.current = null;
    }

    if (theadRef.current && drag && data.length > 0 && !sortableRef.current) {
      sortableRef.current = new Sortable(theadRef.current, {
        sort: true,
        animation: 150,
        handle: ".th-drag-item",
        filter: ".no-drag",
        ghostClass: styles.ghostClass,
        dragClass: dragClass,
        forceFallback: true,
        onMove: function (evt) {
          setIsDraged(false);
          oldRef.current = evt.dragged;
          newRef.current = evt.related;
          return evt.related.className.indexOf("no-drag") === -1; //and this
        },
        onEnd: function (evt) {
          const oldKey = oldRef.current?.getAttribute("drag-id") as string;
          const newKey = newRef.current?.getAttribute("drag-id") as string;
          moveEnd && moveEnd(oldKey, newKey);
          oldRef.current = null;
          newRef.current = null;
          setIsDraged(true);
        }
      });
    }
  }, [drag, data]);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div
        className={`${styles.container} ${props.scroll || props.hideShadow ? "" : styles.shadow}`}
        style={{
          overflowY: props.scroll ? "visible" : "scroll",
          height: props.scroll ? " 100%" : "auto"
        }}
        onScroll={onScroll}>
        <div
          ref={ref}
          className={`${styles.scroll} ${
            theme === "dark" ? styles["scroll-dark"] : styles["scroll-light"]
          }`}
          style={props.scroll ? { height: "100%", overflowY: "scroll" } : {}}>
          {drag && data.length > 0 && (
            <SortGroup type={type}>
              <div
                ref={theadRef}
                className={`bu-flex ${props.theadClass ? props.theadClass : ""}`}
                style={props.scroll ? { position: "sticky", zIndex: "1000", top: "-1px" } : {}}>
                {columns.map((item, index) => {
                  return (
                    <div
                      className={`${getClass(item, index).join(" ")} bu-flex bu-items-center ${
                        styles.th
                      } ${bgStyles({
                        theme: theme
                      })} ${item.fixed ? "no-drag" : "th-drag-item"}`}
                      style={cssPosition(item, offets[index].offset)}
                      key={item.key}
                      drag-id={item.key}>
                      <SortButton
                        key={item.key}
                        onSortChange={sortChange}
                        sortKey={item.key || ""}
                        hideSort={item.filter ? false : true}
                        textAlign={item.align as TextAlign}
                        // width={item.width}
                        width="100%"
                        iconStyle={{ width: "10px", height: "5px" }}>
                        {item.renderHeader ? (
                          item.renderHeader(data[index])
                        ) : (
                          <span className={styles.sort}>{item.title}</span>
                        )}
                      </SortButton>
                    </div>
                  );
                })}
              </div>
            </SortGroup>
          )}
          <table
            ref={dragTableRef}
            className={styles.table}
            style={{
              width: isFixed ? tableWidth : "100%",
              minWidth: "100%",
              tableLayout: tableLayout ? tableLayout : "fixed"
            }}>
            <Thead
              data={data}
              columns={columns}
              theadClass={props.theadClass ? props.theadClass : ""}
              onChange={props.onChange}
              scroll={props.scroll}
              customeTheme={props.theme}
              type={type}
              methodRef={methodRef}
            />
            <Tbody
              ref={tbodyRef}
              data={data}
              columns={columns}
              tdClass={props.tdClass ? props.tdClass : ""}
              rowKey={props.rowKey || "key"}
              rowClick={props.rowClick}
              customeTheme={props.theme}
              tbodyClass={props.tbodyClass ? props.tbodyClass : ""}
              rowIdPrefix={props.rowIdPrefix || ""}
            />
          </table>

          {data.length === 0 ? renderEmpty ? renderEmpty : <Empty /> : ""}
        </div>

        {/* {props.scroll && data.length === 0 ? renderEmpty ? renderEmpty : <Empty /> : ""} */}
      </div>
      {!hidePagination ? (
        <div
          className={styles["pagination-container"]}
          style={{ justifyContent: paginationPosition }}>
          {props.customPagination && (
            <Pagination
              isLastPage={props.isLastPage ?? false}
              isFirstPage={props.isFirstPage ?? true}
              onChange={pageChange}
            />
          )}

          {/* {!props.customPagination && props.total !== 0 && (
            <StyledPagination
              size="small"
              count={props.total || 0}
              page={(props.page || 0) + 1}
              onChange={handleChange}
              variant="outlined"
              shape="rounded"
            />
          )} */}
        </div>
      ) : null}
    </Context.Provider>
  );
});

export default Table;
