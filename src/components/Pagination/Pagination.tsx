import { FC, useLayoutEffect, useState } from "react";
import { Icon } from "../Icon/Icon";
import styles from "./styles";

export interface PaginationProps {
  /**
   * Current page number
   */
  defaultCurrent?: number;
  /**
   * Total number of data
   */
  total: number;
  /**
   * Number of data per page
   */
  pageSize: number;
  /**
   * Current data items is smaller than pageSize to hide pagination
   */
  hideOnSinglePage?: boolean;
  /**
   * Called when the page number is changed
   */
  onChange?: (page: number, pageSize: number) => void;
}

const LIMIT = 5;

export const Pagination: FC<PaginationProps> = (props) => {
  const {
    total,
    pageSize,
    defaultCurrent = 1,
    hideOnSinglePage,
    onChange,
  } = props;

  const [current, setCurrent] = useState(defaultCurrent);

  const [pagers, setPagers] = useState<number[]>([]);

  const getPager = () => {
    const list: number[] = [];
    if (current < LIMIT) {
      for (let i = 2; i <= LIMIT; i++) {
        list.push(i);
      }
    } else if (total - current < LIMIT) {
      for (let i = total - LIMIT; i < total; i++) {
        list.push(i);
      }
    } else {
      for (let i = current - 2; i <= current + 2; i++) {
        list.push(i);
      }
    }
    setPagers(list);
  };

  useLayoutEffect(() => {
    getPager();
  }, [current]);

  const changeCurrent = (current: number) => {
    setCurrent(current);
    if (onChange) {
      onChange(current, pageSize);
    }
  };

  const isActive = (active = 1) => {
    return current === active ? styles.light.active : "";
  };

  const isHover = (active = 1) => {
    return isActive(active) === "" ? styles.light.hover : "";
  };

  const prevPage = () => {
    changeCurrent(current - 1 <= 1 ? 1 : current - 1);
  };

  const nextPage = () => {
    changeCurrent(current + 1 >= total ? total : current + 1);
  };

  const isHide = () => {
    if (hideOnSinglePage) {
      return !(total < pageSize);
    } else {
      return true;
    }
  };

  return (
    <>
      {isHide() && (
        <ul className="flex">
          <li
            className={`mr-[10px] ${styles.light.border} ${styles.light.pagination}`}
            onClick={prevPage}
          >
            <Icon name="bui-prev" />
          </li>
          <li
            className={`${styles.light.border} ${isActive()} ${isHover()}`}
            onClick={() => {
              changeCurrent(1);
            }}
          >
            1
          </li>
          {current - LIMIT >= 0 && (
            <li className={`ml-[10px] flex items-center`}>
              <Icon name="bui-more" />
            </li>
          )}
          {pagers.map((item, index) => {
            return (
              <li
                className={`ml-[10px] ${styles.light.border} ${isActive(
                  item
                )}  ${isHover(item)}`}
                onClick={() => {
                  changeCurrent(item);
                }}
                key={index}
              >
                {item}
              </li>
            );
          })}
          {total - current >= LIMIT && (
            <li className={`ml-[10px] flex items-center`}>
              <Icon name="bui-more" />
            </li>
          )}
          <li
            onClick={() => {
              changeCurrent(total);
            }}
            className={`ml-[10px] ${styles.light.border} ${isActive(
              total
            )} ${isHover(total)}`}
          >
            {total}
          </li>
          <li
            onClick={nextPage}
            className={`ml-[10px] ${styles.light.border} ${styles.light.pagination}`}
          >
            <Icon name="bui-next" />
          </li>
        </ul>
      )}
    </>
  );
};
