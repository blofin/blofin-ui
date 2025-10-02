import { SortButton, TextAlign } from "../../Sort/SortButton";
import { SortGroup } from "../../Sort/SortGroup";
import * as React from "react";
import { bgStyles, cssPosition } from "../css";
import useStickyClassName from "../hooks/useStickyClassName";
import useStickyOffset from "../hooks/useStickyOffset";
import styles from "../index.module.scss";
import { SortProps, TableColumnProps } from "../interface";
import { BUITheme } from "../../../types/component";
import { useTheme } from "../../../provider/useTheme";
import { SortType, SortsData } from "../../Sort/reducer";

interface TheadProps {
  data: Record<string, string>[];
  columns: TableColumnProps[];
  scroll?: boolean;
  onChange?: SortProps;
  theadClass?: string;
  customeTheme?: BUITheme;
  moveEnd?: (prev: number, next: number) => void;
  drag?: boolean;
  type?: SortType;
  methodRef?: any;
}

const Thead = React.forwardRef<HTMLTableRowElement | null, TheadProps>((props, ref) => {
  const { columns, customeTheme, data, moveEnd, drag, onChange, type, methodRef } = props;

  const { theme } = useTheme();

  const theadRef = React.useRef<HTMLTableRowElement | null>(null);

  React.useImperativeHandle(ref, () => {
    return theadRef.current as HTMLTableRowElement;
  });

  const getClass = useStickyClassName(columns);

  const offets = useStickyOffset(columns);

  const sortChange = (data: SortsData[] | SortsData) => {
    onChange && onChange(data);
  };

  return (
    <SortGroup ref={methodRef} type={type}>
      <thead
        className={`${styles.thead} ${props.theadClass}`}
        style={props.scroll ? { position: "sticky", zIndex: "999", top: "-1px" } : {}}>
        <tr ref={theadRef}>
          {columns.map((item, index) => {
            return (
              <th
                className={`${getClass(item, index).join(" ")} ${styles.th} ${bgStyles({
                  theme: customeTheme ? customeTheme : theme
                })} ${item.fixed ? "no-drag" : "th-drag-item"}`}
                style={cssPosition(item, offets[index].offset)}
                key={item.key}>
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
                    item.renderHeader(data)
                  ) : (
                    <span className={styles.sort}>{item.title}</span>
                  )}
                </SortButton>
              </th>
            );
          })}
        </tr>
      </thead>
    </SortGroup>
  );
});

export default Thead;
