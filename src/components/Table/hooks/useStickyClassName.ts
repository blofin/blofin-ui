import { useContext } from 'react';
import { Context } from '../context';
import { cssFixed } from '../css';
import styles from '../index.module.scss';
import { TableColumnProps } from '../interface';

const useStickyClassName = (columns: TableColumnProps[]) => {
  const { state } = useContext(Context);

  return (column: TableColumnProps, index: number) => {
    const className = [styles[cssFixed(column)]];
    if (column.fixed && !columns[index + 1].fixed && state.isScroll) {
      className.push(styles['table-col-fixed-left-last']);
    }
    return className;
  };
};

export default useStickyClassName;
