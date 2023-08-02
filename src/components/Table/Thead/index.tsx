import SortButton, { TextAlign } from '../../Sort/SortButton';
import SortGroup from '../../Sort/SortGroup';
import { FC } from 'react';
import { cssPosition } from '../css';
import useStickyClassName from '../hooks/useStickyClassName';
import useStickyOffset from '../hooks/useStickyOffset';
import styles from '../index.module.scss';
import { SortProps, TableColumnProps } from '../interface';

const Thead: FC<{
  columns: TableColumnProps[];
  onChange?: SortProps;
  theadClass?:string
}> = (props) => {
  const { columns } = props;

  const getClass = useStickyClassName(columns);

  const offets = useStickyOffset(columns);

  const sortChange = (data: { sort: 'asc' | 'desc' | 'default'; sortKey: string }) => {
    if (props.onChange) {
      props.onChange(data);
    }
  };

  return (
    <SortGroup>
      <thead className={`${styles.thead} ${props.theadClass}`}>
        <tr>
          {columns.map((item, index) => {
            return (
              <th
                className={`${getClass(item, index).join(' ')} ${styles.th}`}
                style={cssPosition(item, offets[index].offset)}
                key={item.key}
              >
                <SortButton
                  key={item.key}
                  onSortChange={sortChange}
                  sortKey={item.key || ''}
                  hideSort={item.filter ? false : true}
                  textAlign={item.align as TextAlign}
                  // width={item.width}
                  width="100%"
                  iconStyle={{ width: '10px', height: '5px' }}
                >
                  {item.renderHeader ? item.renderHeader() : <span className={styles.sort}>{item.title}</span>}
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