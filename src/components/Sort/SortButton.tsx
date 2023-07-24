import ArrowDown from '../../assets/icons/arrow-down.svg';
import ArrowUp from '../../assets/icons/arrow-up.svg';
import { CSSProperties, FC, useContext } from 'react';
import { Context, SortEnum, SortState } from './reducer';
import styles from './Sort.module.scss';

export type TextAlign = 'flex-start' | 'flex-end' | 'center';

export interface SortButtonProps {
  children: JSX.Element;
  onSortChange: (data: { sort: SortState; sortKey: string }) => void;
  sortKey: string;
  hideSort?: boolean;
  textAlign?: TextAlign;
  width?: string;
  iconStyle?: CSSProperties;
}

const SortButton: FC<SortButtonProps> = ({
  children,
  onSortChange,
  sortKey,
  hideSort = false,
  textAlign = 'center',
  width = '100%',
  iconStyle,
}) => {
  const { state, dispatch } = useContext(Context);

  const changeSort = (sort: SortState) => {
    if (sort === SortEnum.default) {
      dispatch({
        type: 'changeSort',
        payload: SortEnum.desc,
        success: (item) => {
          onSortChange({
            sort: item.sortType,
            sortKey: item.active,
          });
        },
      });
    } else if (sort === SortEnum.desc) {
      dispatch({
        type: 'changeSort',
        payload: SortEnum.asc,
        success: (item) => {
          onSortChange({
            sort: item.sortType,
            sortKey: item.active,
          });
        },
      });
    } else {
      dispatch({
        type: 'changeSort',
        payload: SortEnum.default,
        success: (item) => {
          onSortChange({
            sort: item.sortType,
            sortKey: item.active,
          });
        },
      });
    }
  };

  const handleSort = () => {
    if (hideSort) {
      return;
    }
    if (state.active !== sortKey) {
      dispatch({
        type: 'changeSort',
        payload: SortEnum.default,
        success: (item) => {
          changeSort(item.sortType);
        },
      });
      dispatch({
        type: 'change',
        payload: sortKey,
      });
    } else {
      changeSort(state.sortType);
    }
  };

  return (
    <div style={{ justifyContent: textAlign, width: width }}>
      <div
        onClick={handleSort}
        style={{
          cursor: hideSort ? 'default' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: textAlign,
        }}
      >
        {children}
        {!hideSort && (
          <div className={styles['sort-wrap']}>
            <ArrowUp
              style={iconStyle}
              className={`${styles.icon} ${
                state.sortType === SortEnum.asc && state.active === sortKey && styles['sort-active']
              }`}
            />
            <ArrowDown
              style={iconStyle}
              className={`${styles.icon}  ${
                state.sortType === SortEnum.desc && state.active === sortKey && styles['sort-active']
              }`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SortButton;
