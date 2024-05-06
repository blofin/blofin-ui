import ArrowDown from "../../assets/icons/arrow-down.svg";
import ArrowUp from "../../assets/icons/arrow-up.svg";
import { CSSProperties, FC, useContext, useMemo } from "react";
import { Context, SortEnum, SortState, SortsState } from "./reducer";
import styles from "./Sort.module.scss";
import { keyBy } from "../../utils/helper";

export type TextAlign = "flex-start" | "flex-end" | "center";

export interface SortButtonProps {
  children: JSX.Element;
  onSortChange: (data: SortsState[]) => void;
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
  textAlign = "center",
  width = "100%",
  iconStyle
}) => {
  const { state, dispatch } = useContext(Context);

  const { sorts, type } = state;

  const sortKeys = useMemo(() => {
    if (sorts.length > 0) {
      return sorts.map((item) => item.sort);
    } else {
      return [];
    }
  }, [sorts]);

  const sortsKeyBy = useMemo(() => {
    return keyBy(sorts, "sort");
  }, [sorts]);

  const handleSort = () => {
    if (hideSort) {
      return;
    }
    const currentItem = sortsKeyBy[sortKey];

    if (currentItem) {
      let sortType = SortEnum.default;

      if (currentItem.sortType === SortEnum.desc) {
        sortType = SortEnum.asc;
      } else if (currentItem.sortType === SortEnum.asc) {
        sortType = SortEnum.default;
      } else {
        sortType = SortEnum.desc;
      }

      dispatch({
        type: "changeSort",
        payload: { sort: sortKey, sortType: sortType },
        success: (item) => {
          if (type === "single") {
            onSortChange([item[0]]);
          } else {
            onSortChange(item);
          }
        }
      });
    } else {
      dispatch({
        type: "changeSort",
        payload: { sort: sortKey, sortType: SortEnum.desc },
        success: (item) => {
          onSortChange(item);
        }
      });
    }
  };

  return (
    <div style={{ justifyContent: textAlign, width: width }}>
      <div
        onClick={handleSort}
        style={{
          cursor: hideSort ? "default" : "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: textAlign
        }}>
        {children}
        {!hideSort && (
          <div className={styles["sort-wrap"]}>
            <ArrowUp
              style={iconStyle}
              className={`${styles.icon} ${
                sortsKeyBy[sortKey]?.sortType === SortEnum.asc &&
                sortKeys.includes(sortKey) &&
                styles["sort-active"]
              }`}
            />
            <ArrowDown
              style={iconStyle}
              className={`${styles.icon}  ${
                sortsKeyBy[sortKey]?.sortType === SortEnum.desc &&
                sortKeys.includes(sortKey) &&
                styles["sort-active"]
              }`}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default SortButton;
