import SortButton, { TextAlign } from "../../Sort/SortButton";
import SortGroup from "../../Sort/SortGroup";
import { FC, useEffect, useRef } from "react";
import { bgStyles, cssPosition, textStyles } from "../css";
import useStickyClassName from "../hooks/useStickyClassName";
import useStickyOffset from "../hooks/useStickyOffset";
import styles from "../index.module.scss";
import { SortProps, TableColumnProps } from "../interface";
import { BUITheme, useTheme } from "../../..";
import Sortable from "sortablejs";

const Thead: FC<{
  columns: TableColumnProps[];
  scroll?: boolean;
  onChange?: SortProps;
  theadClass?: string;
  customeTheme?: BUITheme;
}> = (props) => {
  const { columns, customeTheme } = props;

  const { theme } = useTheme();

  const theadRef = useRef<HTMLTableRowElement>(null);

  const getClass = useStickyClassName(columns);

  const offets = useStickyOffset(columns);

  const sortChange = (data: { sort: "asc" | "desc" | "default"; sortKey: string }) => {
    if (props.onChange) {
      props.onChange(data);
    }
  };

  useEffect(() => {
    if (theadRef.current) {
      const sortable = new Sortable(theadRef.current, {
        sort: true,
        animation: 150,
        handle: ".drag-item",
        filter: ".no-drag",
        onMove: function (evt) {
          return evt.related.className.indexOf("no-drag") === -1; //and this
        },
        onEnd: function (evt) {
          console.log(evt.newIndex,'newIndex');
          console.log(evt.oldIndex,'oldIndex');
        },
      });
    }
  }, []);

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
                    item.renderHeader()
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
