import { ReactNode, forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { BUITheme, TextField, Typography, useTheme } from "../..";
import SelectArrow from "../../assets/icons/select-arrow.svg";
import ArrowFill from "../../assets/icons/arrow-fill.svg";
import useAlign from "../../hooks/useAlign";
import { keyBy } from "../../utils/helper";
import { cn } from "../../utils/utils";
import SearchIcon from "../../assets/icons/search.svg";
import {
  labelStyles,
  menuItemStyles,
  menuStyles,
  outlinedStyles,
  searchIconStyles,
  searchStyles
} from "./styles";

export type SelectItem = { label: string; value: string };

type SelectMenuProps = {
  value: string;
  items: SelectItem[];
  align: "left" | "right";
  handleSelect: (value: string) => void;
  handleClose: () => void;
  offset: {
    offsetLeft: number;
    offsetRight: number;
    offsetY: number;
  };
  activeColor: boolean;
  theme: BUITheme;
  offsetParent?: number;
  menuWrapperClassName?: string;
  popupContainer: HTMLDivElement | null;
  customSelectItems?: (item: SelectItem) => ReactNode;
  search?: boolean;
  searchChange?: (value: string) => void;
  rowKey?: string;
  styles?:object
};

const SelectMenu = forwardRef<HTMLDivElement, SelectMenuProps>(
  (
    {
      value,
      items,
      align,
      handleSelect,
      handleClose,
      offset,
      activeColor,
      theme,
      offsetParent,
      menuWrapperClassName,
      popupContainer,
      customSelectItems,
      search,
      searchChange,
      rowKey,
      styles
    },
    ref
  ) => {
    // const { theme } = useTheme();

    const { offsetLeft, offsetRight, offsetY } = offset;

    const handleSearch = (value: string) => {
      searchChange && searchChange(value);
    };

    return createPortal(
      <div
        ref={ref}
        className={`bu-absolute bu-z-[99999] bu-min-w-[80px] bu-overflow-hidden bu-rounded-[4px] ${
          search ? "bu-pb-[8px]" : "bu-py-[8px]"
        } ${menuStyles({ theme })} ${menuWrapperClassName || ""}`}
        style={{
          left: `${align === "left" ? offsetLeft + "px" : ""}`,
          right: `${align === "right" ? offsetRight + "px" : ""}`,
          top: offsetY + (offsetParent || 18) + "px",
          ...styles
        }}>
        {search && (
          <div className={searchStyles({ theme })}>
            <TextField
              variant="filled"
              className="bu-h-[38px]"
              startAdornment={<SearchIcon className={searchIconStyles({ theme })} />}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
        )}

        <ul>
          {items?.map((item) => {
            return (
              <li
                className={menuItemStyles({
                  theme,
                  active: activeColor ? value === item.value : activeColor
                })}
                key={item[(rowKey as keyof SelectItem) || value]}
                onClick={() => handleSelect(item.value)}>
                {customSelectItems ? customSelectItems(item) : item.label}
              </li>
            );
          })}
        </ul>
      </div>,
      popupContainer || document.body
    );
  }
);

export interface SelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
  selectItems: SelectItem[];
  selectType?: "filled" | "outlined";
  theme?: BUITheme;
  handleChange?: (value: string) => void;
  align?: "left" | "right";
  labelClassName?: string;
  arrowClassName?: string;
  menuWrapperClassName?: string;
  scrollable?: boolean;
  wrapper?: (children: ReactNode) => ReactNode;
  activeColor?: boolean;
  offsetParent?: number;
  trigger?: "click" | "hover";
  adsorb?: boolean; // scroll with parent
  labelId?: string;
  search?: boolean;
  customSelectItems?: (item: SelectItem) => ReactNode;
  searchChange?: (value: string) => void;
  rowKey?: string;
  labelField?: string;
  styles?: object;
}

const Select = forwardRef<HTMLInputElement, SelectProps>((props, ref) => {
  const {
    name,
    value,
    selectItems,
    theme: mode,
    align = "left",
    selectType = "filled",
    handleChange,
    labelClassName,
    scrollable = false,
    wrapper,
    activeColor = true,
    arrowClassName = "",
    offsetParent,
    trigger = "click",
    menuWrapperClassName,
    adsorb = false,
    labelId,
    customSelectItems,
    search,
    searchChange,
    rowKey,
    labelField = "label",
    styles,
    ...otherProps
  } = props;

  const { theme } = useTheme();

  const domRef = useRef<any>(null);

  const selectRef = useRef<HTMLDivElement | null>(null);

  const customeRef = useRef<HTMLDivElement | null>(null);

  const { getOffset } = useAlign(selectRef.current);

  const [offset, setOffset] = useState({
    offsetLeft: 0,
    offsetRight: 0,
    offsetY: 0
  });

  const [showMenu, setShowMenu] = useState(false);

  const keyByItems = keyBy(selectItems, "value");

  const keyByItemsMemo = useMemo(() => {
    return keyByItems;
  }, [value, selectItems]);

  const handleSelect = (value: string) => {
    handleClose();
    handleChange && handleChange(value);
  };

  const handleClose = () => {
    setShowMenu(false);
  };

  const onMouseEnter = () => {
    if (trigger === "hover") {
      setShowMenu(true);
    }
  };

  const onMouseLeave = () => {
    if (trigger === "hover") {
      setShowMenu(false);
    }
  };

  const onClick = () => {
    if (trigger === "click") {
      setShowMenu((preState) => !preState);
    }
  };

  useEffect(() => {
    if (trigger === "click") {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      if (trigger === "click") {
        document.removeEventListener("click", handleClickOutside);
      }
    };
  }, [trigger]);

  // 当单击文档时，检查单击事件的目标是否在下拉窗口内
  const handleClickOutside = (event: any) => {
    if (customeRef.current?.contains(event.target)) {
      return;
    }
    if (domRef.current && !domRef.current.contains(event.target)) {
      setShowMenu(false);
    }
    searchChange && searchChange("");
  };

  useEffect(() => {
    if (!scrollable) {
      document.body.style.overflow = showMenu ? "hidden" : "";
    }
  }, [showMenu, scrollable]);

  useEffect(() => {
    if (selectRef.current && !adsorb) {
      const { offsetY, offsetLeft, offsetRight } = getOffset(selectRef.current);
      setOffset({
        offsetY,
        offsetLeft,
        offsetRight
      });
    }
  }, [selectRef, showMenu, adsorb]);

  return (
    <div className="bu-flex" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} ref={domRef}>
      <div
        id={labelId}
        ref={selectRef}
        className={`bu-flex bu-cursor-pointer bu-select-none bu-items-center bu-justify-center ${
          adsorb ? "bu-relative" : ""
        }`}
        onClick={onClick}>
        {wrapper ? (
          wrapper(
            <Typography variant="body4" className={labelClassName}>
              {keyByItemsMemo[String(value)]?.[labelField]}
            </Typography>
          )
        ) : (
          <Typography variant="body4" className={labelClassName}>
            {keyByItemsMemo[String(value)]?.[labelField]}
          </Typography>
        )}
        {selectType === "filled" ? (
          <ArrowFill
            className={`bu-h-[16px] bu-w-[16px] ${!showMenu ? "bu-rotate-180" : ""} ${cn(
              labelStyles({
                theme: mode || theme
              })
            )} ${arrowClassName}`}
          />
        ) : (
          <SelectArrow
            className={`bu-ml-[4px] bu-h-[10px] bu-w-[10px] ${showMenu ? "bu-rotate-180" : ""} ${cn(
              outlinedStyles({
                theme: mode || theme
              })
            )} ${arrowClassName}`}
          />
        )}
      </div>
      {showMenu && (
        <SelectMenu
          ref={customeRef}
          search={search}
          searchChange={searchChange}
          value={String(value)}
          items={selectItems}
          customSelectItems={customSelectItems}
          align={align}
          handleSelect={handleSelect}
          handleClose={handleClose}
          offset={offset}
          activeColor={activeColor}
          theme={mode || theme}
          offsetParent={offsetParent}
          menuWrapperClassName={menuWrapperClassName}
          popupContainer={adsorb ? selectRef.current : null}
          rowKey={rowKey}
          styles={styles}
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
