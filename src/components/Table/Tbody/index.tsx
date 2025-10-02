import * as React from "react";
import { bgStyles, cssPosition } from "../css";
import useStickyClassName from "../hooks/useStickyClassName";
import useStickyOffset from "../hooks/useStickyOffset";
import styles from "../index.module.scss";
import { TableColumnProps } from "../interface";
import { BUITheme } from "../../../types/component";
import { useTheme } from "../../../provider/useTheme";

interface TbodyProps {
  data: Record<string, string>[];
  columns: TableColumnProps[];
  rowKey: string;
  rowClick?: (record: Record<string, string>) => void;
  tdClass?: string;
  customeTheme?: BUITheme;
  tbodyClass?: string;
  rowIdPrefix?: string;
}

const Tbody = React.forwardRef<HTMLTableRowElement | null, TbodyProps>((props, ref) => {
  const { data, columns, customeTheme, tbodyClass } = props;

  const { theme } = useTheme();

  const getClass = useStickyClassName(columns);

  const offets = useStickyOffset(columns);

  const handleClick = (item: Record<string, string>) => {
    if (props.rowClick) {
      props.rowClick(item);
    }
  };

  return (
    <tbody className={`${styles.tbody} ${tbodyClass}`}>
      {data.map((item, col) => {
        let i = 0;
        let location = 0;
        return (
          <tr
            id={props.rowIdPrefix ? `${props.rowIdPrefix}-${col}` : ""}
            ref={ref}
            key={item[props.rowKey]}
            className={`${styles["hover"]} ${props.tdClass}`}
            style={props.rowClick ? { cursor: "pointer" } : {}}
            onClick={() => handleClick(item)}>
            {columns.map((v, index) => {
              if (v.onCell) {
                i = v.onCell(item, col);
                location = index;
              }
              return index <= location || index > i ? (
                <td
                  colSpan={v.onCell && v?.onCell(item, col)}
                  key={v.key}
                  className={`${getClass(v, index).join(" ")} ${styles.td} ${bgStyles({
                    theme: customeTheme ? customeTheme : theme
                  })}`}
                  style={cssPosition(v, offets[index].offset)}>
                  {v.render ? v.render(item, col) : item[v.key as string]}
                </td>
              ) : null;
            })}
          </tr>
        );
      })}
    </tbody>
  );
});

export default Tbody;
