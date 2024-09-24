import React, {
  Children,
  FC,
  Fragment,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState
} from "react";
import { BUIComponentSize } from "../..";
import useTheme from "../../provider/useTheme";
import { Base } from "../../types/component";
import { cn } from "../../utils/utils";
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

interface TabProps extends Base {
  items: {
    key: string;
    label: React.ReactNode;
    children: React.ReactNode;
  }[];
  size: BUIComponentSize;
  change: (key: string) => void;
  children?: React.ReactNode;
  tabWrapperClass?: string;
  defaultIndex?: number;
}

export interface TabRef {
  setTab: (tab: number) => void;
}

const Tab = forwardRef<TabRef, TabProps>((props, ref) => {
  const { defaultIndex, items, size, change, className, children, tabWrapperClass } = props;

  useImperativeHandle(ref, () => {
    return {
      setTab: (tab: number) => {
        setActive(items[tab]?.key);
      }
    };
  });

  const [active, setActive] = useState(items[defaultIndex || 0]?.key || items[0].key);

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
    <div className="bu-flex bu-flex-col">
      <div
        className={`bu-flex bu-justify-between ${children ? "bu-items-end" : ""} ${
          tabWrapperClass || ""
        }`}>
        <ul
          className={`${styles.tab} ${children ? "bu-mr-[24px]" : ""} ${
            size !== "small" ? borderSyles({ theme }) : ""
          }`}>
          {items.map((item) => {
            return (
              <li
                id={item.key}
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
      <div className={cn("bu-h-full bu-w-full", className)}>
        {items.map((item, index) => {
          return <Fragment key={index}>{active === item.key ? item.children : null}</Fragment>;
        })}
      </div>
    </div>
  );
});

export { Tab };
