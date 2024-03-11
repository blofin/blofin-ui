import SortButton, { TextAlign } from "../../Sort/SortButton";
import SortGroup from "../../Sort/SortGroup";
import { FC, useRef } from "react";
import { bgStyles, cssPosition } from "../css";
import useStickyClassName from "../hooks/useStickyClassName";
import useStickyOffset from "../hooks/useStickyOffset";
import styles from "../index.module.scss";
import { SortProps, TableColumnProps } from "../interface";
import { BUITheme, useTheme } from "../../..";

const Thead: FC<{
  data: Record<string, string>[];
  columns: TableColumnProps[];
  scroll?: boolean;
  onChange?: SortProps;
  theadClass?: string;
  customeTheme?: BUITheme;
}> = (props) => {
  const { columns, customeTheme, data } = props;

  const { theme } = useTheme();

  const theadRef = useRef<HTMLTableRowElement>(null);

  const getClass = useStickyClassName(columns);

  const offets = useStickyOffset(columns);

  const sortChange = (data: { sort: "asc" | "desc" | "default"; sortKey: string }) => {
    if (props.onChange) {
      props.onChange(data);
    }
  };

  return (
    <SortGroup>
      <thead
        className={`${styles.thead} ${props.theadClass}`}
        style={props.scroll ? { position: "sticky", zIndex: "999", top: "-1px" } : {}}>
        <tr ref={theadRef}>
          {columns.map((item, index) => {
            return (
              <th
                className={`${getClass(item, index).join(" ")} ${styles.th} ${bgStyles({
                  theme: customeTheme ? customeTheme : theme
                })} ${item.fixed ? "no-drag" : "drag-item"}`}
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
                    item.renderHeader(data[index])
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
};

export default Thead;
