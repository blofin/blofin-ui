import { forwardRef, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { BUITheme, Typography, useTheme } from "../..";
import SelectArrow from "../../assets/icons/select-arrow.svg";
import useAlign from "../../hooks/useAlign";
import { keyBy } from "../../utils/helper";
import { cn } from "../../utils/utils";
import { labelStyles, menuItemStyles, menuStyles } from "./styles";

export type SelectItem = { label: string; value: string };

const SelectMenu = ({
  value,
  items,
  offsetX,
  offsetY,
  handleSelect,
  handleClose
}: {
  value: string;
  items: SelectItem[];
  offsetX: number;
  offsetY: number;
  handleSelect: (value: string) => void;
  handleClose: () => void;
}) => {
  const { theme } = useTheme();

  return createPortal(
    <div
      className="bu-absolute bu-left-0 bu-top-0 bu-h-screen bu-w-screen bu-overflow-hidden"
      onClick={handleClose}>
      <div
        className={`bu-absolute bu-min-w-[80px] bu-overflow-hidden bu-rounded-[4px] bu-py-[8px] ${menuStyles(
          { theme }
        )}`}
        style={{ left: offsetX + "px", top: offsetY + 18 + "px" }}>
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

export interface SelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  selectItems: SelectItem[];
  theme?: BUITheme;
  handleChange?: (value: string) => void;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { name, value, selectItems, theme: mode, onChange, handleChange, ...otherProps } = props;

  const { theme } = useTheme();

  const selectRef = useRef<HTMLDivElement | null>(null);

  const [showMenu, setShowMenu] = useState(false);

  const { offsetX, offsetY } = useAlign(selectRef.current);

  const keyByItems = keyBy(selectItems, "value");

  const handleSelect = (value: string) => {
    setShowMenu(false);
    handleChange && handleChange(value);
  };

  const handleClose = () => {
    setShowMenu(false);
  };

  return (
    <div className="bu-flex">
      <div
        ref={selectRef}
        className="bu-flex bu-cursor-pointer bu-select-none bu-items-center bu-justify-center bu-gap-2"
        onClick={() => setShowMenu(!showMenu)}>
        <Typography variant="body4">{keyByItems[String(value)].label}</Typography>
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
          offsetX={offsetX}
          offsetY={offsetY}
          handleSelect={handleSelect}
          handleClose={handleClose}
        />
      )}
      <select
        className="bu-hidden"
        ref={ref}
        name={name}
        id={`bul-select-${name}`}
        value={value}
        onChange={onChange}
        {...otherProps}>
        <option value=""></option>
        {selectItems.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Select;
