import React from "react";
import { Typography } from "../Typography/Typography";
import { ArrowLine, DisabledTextColor, TimeSelect } from "./styles";
import { BUITheme } from "../../types/component";
import styles from "./index.module.scss";

interface ScrollableListProps {
  theme: BUITheme;
  items: string[];
  selectedItem: number;
  onSelect: (item: number) => void;
  disablePast?: boolean;
  current?: number;
}

const ScrollableList: React.FC<ScrollableListProps> = ({
  theme,
  items,
  selectedItem,
  onSelect,
  disablePast = false,
  current,
}) => {
  const ulRef = React.useRef<HTMLUListElement>(null);
  const liRefs = React.useRef<(HTMLLIElement | null)[]>([]);

  const initialization = React.useRef<boolean>(false);

  const isPastTime = (item: string): boolean => {
    if (!current) return false;
    return Number(item) < current;
  };

  React.useEffect(() => {
    if (initialization.current) return;
    const currentLi = liRefs.current[selectedItem];
    if (currentLi && ulRef.current) {
      const ulHeight = ulRef.current.clientHeight;
      const liHeight = currentLi.clientHeight;
      const scrollTop = currentLi.offsetTop - ulHeight / 2 - liHeight;
      ulRef.current.scrollTo({ top: scrollTop });
    }
  }, [selectedItem]);

  React.useEffect(() => {
    setTimeout(() => {
      initialization.current = true;
    }, 500);
    return () => {
      initialization.current = false;
    };
  }, []);

  return (
    <ul
      ref={ulRef}
      className={`bu-h-[232px] bu-flex-1 bu-overflow-y-auto bu-overflow-x-hidden ${styles["hide-scrollbar"]}`}>
      {items.map((item, index) => {
        const isDisabled = disablePast && isPastTime(item);
        return (
          <li
            key={item}
            ref={(el) => (liRefs.current[index] = el)}
            className={`bu-mb-2 bu-flex bu-h-[32px] bu-w-[48px]  bu-items-center bu-justify-center ${
              selectedItem === Number(item) ? TimeSelect({ theme }) : ""
            } ${isDisabled ? "bu-cursor-not-allowed" : "bu-cursor-pointer"}`}
            onClick={() => !isDisabled && onSelect(Number(item))}>
            <Typography
              variant="body3"
              className={`${isDisabled ? DisabledTextColor({ theme }) : ArrowLine({ theme })}`}>
              {item}
            </Typography>
          </li>
        );
      })}
    </ul>
  );
};

export default ScrollableList;
