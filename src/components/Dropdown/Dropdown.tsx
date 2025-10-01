import * as React from "react";
import ArrowFill from "../../assets/icons/arrow-fill.svg";
import ArrowLine from "../../assets/icons/arrow-line.svg";
import useAlign from "../../hooks/useAlign";
import { createPortal } from "react-dom";
import { labelStyles, menuItemStyles } from "./style";
import useTheme from "../../provider/useTheme";

interface Menus {
  key: string;
  label: React.ReactNode;
}

interface DropdownProps {
  menus: Menus[];
  children: React.ReactNode;
  hideIcon?: boolean;
  variant?: "fill" | "line";
  bodyScrollDisabled?: boolean;
}

const DropMenu: React.FC<{
  menus: Menus[];
  offsetX: number;
  offsetY: number;
  close: () => void;
  variant: "fill" | "line";
  placement?: "top" | "bottom";
}> = ({ menus, offsetX, offsetY, close, variant }) => {
  const { theme } = useTheme();

  return createPortal(
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

const Dropdown: React.FC<DropdownProps> = (props) => {
  const { menus, children, hideIcon = false, variant = "fill", bodyScrollDisabled } = props;

  const [hide, setHide] = React.useState(false);

  const targetRef = React.useRef<HTMLDivElement | null>(null);

  const { getOffset } = useAlign(targetRef.current);

  const [offset, setOffset] = React.useState({
    offsetX: 0,
    offsetY: 0
  });

  const { theme } = useTheme();

  const changeDropdown = () => {
    setHide(!hide);
  };

  React.useEffect(() => {
    if (!bodyScrollDisabled) {
      document.body.style.overflow = hide ? "hidden" : "";
    }
  }, [hide]);

  React.useEffect(() => {
    if (targetRef.current) {
      const { offsetY, offsetX } = getOffset(targetRef.current);
      setOffset({
        offsetY,
        offsetX,
      });
    }
  }, [targetRef,hide]);

  return (
    <div>
      <div
        id="dropDown"
        ref={targetRef}
        className={`bu-inline-flex bu-cursor-pointer bu-select-none bu-items-center${
          variant === "line" ? " bu-gap-[4px]" : ""
        }`}
        onClick={changeDropdown}>
        <span
          className={`dropdown bu-select-none bu-tracking-[-0.2px] ${labelStyles({
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
          offsetX={offset.offsetX}
          offsetY={offset.offsetY + 10}
          close={changeDropdown}
          variant={variant}
        />
      )}
    </div>
  );
};

export { Dropdown };
