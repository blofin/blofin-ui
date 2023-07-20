import React, { FC, useMemo, useState } from "react";
import { BUIComponentSize } from "../..";
import styles from "./index.module.scss";
import { borderSyles, defaultActStyles, itemActStyles, itemStyles, noActStyles, noSmallActStyles, smallActStyles } from "./styles";
import useTheme from "../../provider/useTheme";
import { Base } from "../../types/component";

interface TabProps extends Base {
  items: {
    key: string;
    label: string;
    children: React.ReactNode;
  }[];
  size: BUIComponentSize;
  change: (key: string) => void;
}

const Tab: FC<TabProps> = ({ items, size, change }) => {
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
  }, [size,theme]);

  const noAct=useMemo(()=>{
    if(size==='small'){
        return noSmallActStyles({theme})
    }else{
        return noActStyles({theme})
    }
  },[size,theme])

  return (
    <div className="bu-inline-flex bu-flex-col">
      <ul className={`${styles.tab} ${borderSyles({theme})}`}>
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
      {items.map((item) => {
        return active === item.key ? item.children : null;
      })}
    </div>
  );
};

export { Tab };
