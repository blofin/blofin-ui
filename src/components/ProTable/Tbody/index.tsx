import * as React from "react";
import { ProTableColumnProps, TbodyProps } from "../types";
import proTableStyles from "../styles";
import clsx from "clsx";

const Tbody: React.FC<TbodyProps> = (props) => {
  const { columns, data, rowKey, tdClass, tbodyClass, theme = "light" } = props;

  const getTdStyle = (column: ProTableColumnProps, index: number): React.CSSProperties => {
    const style: React.CSSProperties = {
      textAlign: proTableStyles.getTextAlign(column.align) as React.CSSProperties["textAlign"]
    };

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

  const renderCell = (column: ProTableColumnProps, record: any, rowIndex: number) => {
    if (column.render) {
      return column.render(record, rowIndex);
    }
    return column.key ? record[column.key] : null;
  };

  const handleColSpan = (column: ProTableColumnProps, record: any, rowIndex: number) => {
    if (column.onCell) {
      return column.onCell(record, rowIndex);
    }
    return undefined;
  };

  return (
    <tbody className={clsx(proTableStyles.tbody({ theme }), tbodyClass)}>
      {data.map((record, rowIndex) => (
        <tr
          id={props.rowIdPrefix ? `${props.rowIdPrefix}-${rowIndex}` : ""}
          key={record[rowKey] || rowIndex}
          className={proTableStyles.tr({ theme })}>
          {columns.map((column, colIndex) => {
            const colSpan = handleColSpan(column, record, rowIndex);

            if (colSpan === 0) {
              return null;
            }

            return (
              <td
                key={column.key || colIndex}
                className={proTableStyles.getTdClasses({
                  theme,
                  fixed: column.fixed,
                  customClass: tdClass
                })}
                style={getTdStyle(column, colIndex)}
                colSpan={colSpan}>
                {renderCell(column, record, rowIndex)}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default Tbody;
