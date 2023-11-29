import { FC, useEffect, useRef, useState } from "react";
import ArrowFill from "../../assets/icons/arrow-fill.svg";
import ArrowLine from "../../assets/icons/arrow-line.svg";
import useAlign from "../../hooks/useAlign";
import ReactDOM from "react-dom";
import { labelStyles, menuItemStyles } from "./style";
import { useTheme } from "../..";

interface Menus {
  key: string;
  label: React.ReactNode;
}

interface DropdownProps {
  menus: Menus[];
  children: React.ReactNode;
  hideIcon?: boolean;
  variant?: "fill" | "line";
}

const DropMenu: FC<{
  menus: Menus[];
  offsetX: number;
  offsetY: number;
  close: () => void;
  variant: "fill" | "line";
  placement?: "top" | "bottom";
}> = ({ menus, offsetX, offsetY, close, variant }) => {
  const { theme } = useTheme();

  return ReactDOM.createPortal(
    <div
      className="bu-absolute bu-bottom-0 bu-left-0 bu-right-0 bu-top-0 bu-z-[99999]"
      onClick={close}>
      <div
        className={`bu-absolute bu-min-w-[80px] bu-overflow-hidden bu-rounded-[4px] bu-py-[8px] ${
          theme === "light" ? " bu-shadow-card" : ""
        }`}
        style={{ left: offsetX + "px", top: offsetY + 18 + "px" }}>
        <ul>
          {menus?.map((item) => {
            return (
              <li className={menuItemStyles({ theme, intent: variant })} key={item.key}>
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>,
    document.body
  );
};

const Dropdown: FC<DropdownProps> = (props) => {
  const { menus, children, hideIcon = false, variant = "fill" } = props;

  const [hide, setHide] = useState(false);

  const targetRef = useRef<HTMLDivElement | null>(null);

  const { offsetX, offsetY } = useAlign(targetRef.current).offset;

  const { theme } = useTheme();

  const changeDropdown = () => {
    setHide(!hide);
  };

  useEffect(() => {
    document.body.style.overflow = hide ? "hidden" : "";
  }, [hide]);

  return (
    <div>
      <div
        id="dropDown"
        ref={targetRef}
        className="bu-inline-flex bu-cursor-pointer bu-items-center"
        onClick={changeDropdown}>
        <span
          className={`dropdown bu-tracking-[-0.2px] ${labelStyles({
            intent: variant,
            theme
          })}`}>
          {children}
        </span>
        {!hideIcon ? (
          variant === "fill" ? (
            <ArrowFill
              className={`bu-h-[16px] bu-w-[16px] ${!hide ? "bu-rotate-180" : ""} ${labelStyles({
                intent: variant,
                theme
              })}`}
            />
          ) : (
            <ArrowLine
              className={`bu-h-[18px] bu-w-[18px] ${!hide ? "bu-rotate-180" : ""} ${labelStyles({
                intent: variant,
                theme
              })}`}
            />
          )
        ) : null}
      </div>
      {hide && (
        <DropMenu
          menus={menus}
          offsetX={offsetX}
          offsetY={offsetY + 10}
          close={changeDropdown}
          variant={variant}
        />
      )}
    </div>
  );
};

export { Dropdown };
