import * as React from "react";
import { BUIComponentSize } from "../../types/component";
import { useTheme } from "../../provider/useTheme";
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
  size: BUIComponentSize | "max";
  change?: (key: string) => void;
  children?: React.ReactNode;
  tabWrapperClass?: string;
  defaultIndex?: number;
  hideBorder?: boolean;
  hideUnderline?: boolean;
}

export interface TabRef {
  setTab: (tab: number) => void;
}

const Tab = React.forwardRef<TabRef, TabProps>((props, ref) => {
  const {
    defaultIndex,
    items,
    size,
    change,
    className,
    children,
    tabWrapperClass,
    hideBorder = false,
    hideUnderline = false
  } = props;

  React.useImperativeHandle(ref, () => {
    return {
      setTab: (tab: number) => {
        setActive(items[tab]?.key);
      }
    };
  });

  const [active, setActive] = React.useState(items[defaultIndex || 0]?.key || items[0].key);

  const { theme } = useTheme();

  const toggle = (key: string) => {
    setActive(key);
    change?.(key);
  };

  const act = React.useMemo(() => {
    if (size === "small") {
      return smallActStyles({ theme });
    } else {
      return `${!hideUnderline ? itemActStyles() : ""} ${defaultActStyles({ theme })}`;
    }
  }, [size, theme, hideUnderline]);

  const noAct = React.useMemo(() => {
    if (size === "small") {
      return noSmallActStyles({ theme });
    } else {
      return noActStyles({ theme });
    }
  }, [size, theme]);

  return (
    <div className="bu-flex bu-flex-col">
      <div
        className={`bu-flex bu-justify-between ${
          size !== "small" && !hideBorder ? borderSyles({ theme }) : ""
        } ${tabWrapperClass || ""}`}>
        <ul className={`${styles.tab}`}>
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
          return <React.Fragment key={index}>{active === item.key ? item.children : null}</React.Fragment>;
        })}
      </div>
    </div>
  );
});

export { Tab };
