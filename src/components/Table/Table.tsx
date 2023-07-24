import { FC, UIEvent, useReducer } from 'react';
import Empty from '../Empty';
// import StyledPagination from '../StyledPagination/StylePagination';
import { Context, reducer, State } from './context';
import styles from './index.module.scss';
import { Direction, TableProps } from './interface';
import Pagination from './Pagination';
import Tbody from './Tbody';
import Thead from './Thead';

export const defaultWidth = '150';

export const PageSize = 50;

const Table: FC<TableProps> = (props) => {
  const [state, dispatch] = useReducer(reducer, State);

  const { columns, data, hidePagination = false, renderEmpty, paginationPosition = 'flex-end' } = props;

  const tableWidth =
    columns.reduce((a: number | string, b) => {
      return parseFloat(a.toString()) + parseFloat(b.width || defaultWidth);
    }, '0') + 'px';

  const isFixed = columns.find((item) => item.fixed);

  const onScroll = (e: UIEvent<HTMLElement>) => {
    if (e.currentTarget.scrollLeft === 0) {
      dispatch({
        type: 'checkScroll',
        payload: false,
      });
    } else {
      dispatch({
        type: 'checkScroll',
        payload: true,
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

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div
        className={`${styles.container} ${props.scroll || props.hideShadow ? '' : styles.shadow}`}
        style={{
          overflowY: props.scroll ? 'visible' : 'scroll',
          height: props.scroll ? ' 100%' : 'auto',
        }}
        onScroll={onScroll}
      >
        <table className={styles.table} style={{ width: isFixed ? tableWidth : '100%', minWidth: '100%' }}>
          <Thead columns={columns} theadClass={props.theadClass} onChange={props.onChange} />
          {!props.scroll && (
            <Tbody
              data={data}
              columns={columns}
              tdClass={props.tdClass}
              rowKey={props.rowKey || 'key'}
              rowClick={props.rowClick}
            />
          )}
        </table>
        {props.scroll && (
          <div style={{ height: '100%', overflowY: 'scroll' }}>
            <table className={styles.table} style={{ width: isFixed ? tableWidth : '100%', minWidth: '100%' }}>
              <Tbody
                data={data}
                columns={columns}
                tdClass={props.tdClass}
                rowKey={props.rowKey || 'key'}
                rowClick={props.rowClick}
              />
            </table>
            {data.length === 0 ? renderEmpty ? renderEmpty : <Empty /> : ''}
          </div>
        )}

        {!props.scroll && data.length === 0 ? renderEmpty ? renderEmpty : <Empty /> : ''}
      </div>
      {!hidePagination ? (
        <div className={styles['pagination-container']} style={{ justifyContent: paginationPosition }}>
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
};

export default Table;
