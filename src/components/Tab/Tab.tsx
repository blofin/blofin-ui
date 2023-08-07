import React, { Children, FC, Fragment, useMemo, useState } from "react";
import { BUIComponentSize } from "../..";
import styles from "./index.module.scss";
import {
  borderSyles,
  defaultActStyles,
  itemActStyles,
  itemStyles,
  noActStyles,
  noSmallActStyles,
  smallActStyles
} from "./styles";
import useTheme from "../../provider/useTheme";
import { Base } from "../../types/component";
import { cn } from "../../utils/utils";

interface TabProps extends Base {
  items: {
    key: string;
    label: string;
    children: React.ReactNode;
  }[];
  size: BUIComponentSize;
  change: (key: string) => void;
  children?: React.ReactNode;
}

const Tab: FC<TabProps> = ({ items, size, change, className, children }) => {
  const [active, setActive] = useState(items[0].key);

  const { theme } = useTheme();

  const toggle = (key: string) => {
    setActive(key);
    change(key);
  };

  const act = useMemo(() => {
    if (size === "small") {
      return smallActStyles({ theme });
    } else {
      return `${itemActStyles()} ${defaultActStyles({ theme })}`;
    }
  }, [size, theme]);

  const noAct = useMemo(() => {
    if (size === "small") {
      return noSmallActStyles({ theme });
    } else {
      return noActStyles({ theme });
    }
  }, [size, theme]);

  return (
    <div className="bu-inline-flex bu-flex-col">
      <div className={`bu-flex bu-justify-between ${size !== "small" ? borderSyles({ theme }) : ""}`}>
        <ul className={`${styles.tab}`}>
          {items.map((item) => {
            return (
              <li
                className={`${itemStyles({ size })} ${active === item.key ? act : noAct}`}
                onClick={() => toggle(item.key)}
                key={item.key}>
                {item.label}
              </li>
            );
          })}
        </ul>
        {children}
      </div>
      <div className={cn("bu-h-full", className)}>
        {items.map((item, index) => {
          return <Fragment key={index}>{active === item.key ? item.children : null}</Fragment>;
        })}
      </div>
    </div>
  );
};

export { Tab };
