import { TableColumnProps } from "../interface";
import { defaultWidth } from "../Table";

const useStickyOffset = (columns: TableColumnProps[]) => {
  let offsetLeft = 0;
  let offsetRight = 0;

  const offsets = columns.map((item, index) => {
    if (item.fixed === "left") {
      offsetLeft =
        index === 0
          ? 0
          : parseFloat(columns[index - 1].width || defaultWidth) + parseFloat(offsetLeft + "");
      return {
        ...item,
        offset: offsetLeft
      };
    } else if (item.fixed === "right") {
      offsetRight =
        index === columns.length - 1
          ? 0
          : parseFloat(columns[index + 1].width || defaultWidth) + parseFloat(offsetRight + "");

      return {
        ...item,
        offset: offsetRight
      };
    } else {
      return {
        ...item,
        offset: 0
      };
    }
  });

  return offsets;
};

export default useStickyOffset;
