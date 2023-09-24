import { ReactNode, forwardRef, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { BUITheme, Tooltip, Typography, useTheme } from "../..";
import SelectArrow from "../../assets/icons/select-arrow.svg";
import useAlign from "../../hooks/useAlign";
import { keyBy } from "../../utils/helper";
import { cn } from "../../utils/utils";
import { labelStyles, menuItemStyles, menuStyles } from "./styles";

export type SelectItem = { label: string; value: string };

const SelectMenu = ({
  value,
  items,
  align,
  handleSelect,
  handleClose,
  targetRef
}: {
  value: string;
  items: SelectItem[];
  align: "left" | "right";
  handleSelect: (value: string) => void;
  handleClose: () => void;
  targetRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const { theme } = useTheme();

  const { offsetY, offsetLeft, offsetRight } = useAlign(targetRef.current);

  return createPortal(
    <div
      className="bu-absolute bu-left-0 bu-top-0 bu-z-[99999] bu-h-full bu-w-screen bu-overflow-hidden"
      onClick={handleClose}>
      <div
        className={`bu-absolute bu-min-w-[80px] bu-overflow-hidden bu-rounded-[4px] bu-py-[8px] ${menuStyles(
          { theme }
        )}`}
        style={{
          left: `${align === "left" ? offsetLeft + "px" : ""}`,
          right: `${align === "right" ? offsetRight + "px" : ""}`,
          top: offsetY + 18 + "px"
        }}>
        <ul>
          {items?.map((item) => {
            return (
              <li
                className={menuItemStyles({ theme, active: value === item.value })}
                key={item.value}
                onClick={() => handleSelect(item.value)}>
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

export interface SelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
  selectItems: SelectItem[];
  theme?: BUITheme;
  handleChange?: (value: string) => void;
  align?: "left" | "right";
  labelClassName?: string;
  scrollable?: boolean;
  wrapper?: (children: ReactNode) => ReactNode;
}

const Select = forwardRef<HTMLInputElement, SelectProps>((props, ref) => {
  const {
    name,
    value,
    selectItems,
    theme: mode,
    align = "left",
    handleChange,
    labelClassName,
    scrollable = false,
    wrapper,
    ...otherProps
  } = props;

  const { theme } = useTheme();

  const selectRef = useRef<HTMLDivElement | null>(null);

  const [showMenu, setShowMenu] = useState(false);

  const keyByItems = keyBy(selectItems, "value");

  const handleSelect = (value: string) => {
    setShowMenu(false);
    handleChange && handleChange(value);
  };

  const handleClose = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (!scrollable) {
      document.body.style.overflow = showMenu ? "hidden" : "";
    }
  }, [showMenu, scrollable]);

  return (
    <div className="bu-flex">
      <div
        ref={selectRef}
        className="bu-flex bu-cursor-pointer bu-select-none bu-items-center bu-justify-center bu-gap-2"
        onClick={() => setShowMenu(!showMenu)}>
        {wrapper ? (
          wrapper(
            <Typography variant="body4" className={labelClassName}>
              {keyByItems[String(value)].label}
            </Typography>
          )
        ) : (
          <Typography variant="body4" className={labelClassName}>
            {keyByItems[String(value)].label}
          </Typography>
        )}

        <SelectArrow
          className={`bu-h-[10px] bu-w-[10px] ${showMenu ? "bu-rotate-180" : ""} ${cn(
            labelStyles({
              theme: mode || theme
            })
          )}`}
        />
      </div>
      {showMenu && (
        <SelectMenu
          value={String(value)}
          items={selectItems}
          align={align}
          handleSelect={handleSelect}
          handleClose={handleClose}
          targetRef={selectRef}
        />
      )}
      <input
        className="bu-hidden"
        name={name}
        id={`bu-select-${name}`}
        type="hidden"
        ref={ref}
        value={value}
        {...otherProps}
      />
    </div>
  );
});

export default Select;
