import { TableColumnProps } from '../interface';
import { defaultWidth } from '../Table';

const useStickyOffset = (columns: TableColumnProps[]) => {
  let offset = 0;

  const offsets = columns.map((item, index) => {
    offset = index === 0 ? 0 : parseFloat(columns[index - 1].width || defaultWidth) + parseFloat(offset + '');
    return {
      ...item,
      offset: offset,
    };
  });

  return offsets;
};

export default useStickyOffset;
