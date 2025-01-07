import { FC, ReactNode, forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { BUITheme, TextField, Typography, useTheme } from "../..";
import SelectArrow from "../../assets/icons/select-arrow.svg";
import ArrowFill from "../../assets/icons/arrow-fill.svg";
import { keyBy } from "../../utils/helper";
import { cn } from "../../utils/utils";
import SearchIcon from "../../assets/icons/search.svg";
import {
  labelStyles,
  menuItemStyles,
  menuStyles,
  outlinedStyles,
  popperStyles,
  searchIconStyles,
  searchStyles
} from "./styles";
import { usePopper } from "react-popper";
import useDelayEvent from "../../hooks/useDelayEvent";
import useClient from "../../hooks/useClient";
import selectStyles from "./select.module.scss";

export type SelectItem = { label: string; value: string };

type SelectMenuProps = {
  value: string;
  items: SelectItem[];
  enter: boolean;
  parent: HTMLDivElement | null;
  align: "left" | "right";
  handleSelect: (value: string) => void;
  activeColor: boolean;
  theme: BUITheme;
  offsetParent?: number;
  menuWrapperClassName?: string;
  customSelectItems?: (item: SelectItem) => ReactNode;
  search?: boolean;
  searchChange?: (value: string) => void;
  rowKey?: string;
  styles?: object;
  x?: number;
  y?: number;
};

const SelectMenu = forwardRef<HTMLDivElement, SelectMenuProps>((props, ref) => {
  const {
    value,
    items,
    enter,
    align,
    parent,
    handleSelect,
    activeColor,
    theme,
    menuWrapperClassName,
    customSelectItems,
    search,
    searchChange,
    rowKey,
    styles: customStyles,
    x,
    y
  } = props;

  const targetRef = useRef<HTMLDivElement | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const { styles, attributes, update, state } = usePopper(parent, targetRef.current, {
    placement: align === "left" ? "bottom-start" : "bottom-end",
    strategy: "fixed",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [x, y]
        }
      },
      {
        name: "flip",
        options: {
          fallbackPlacements: [align === "left" ? "top-start" : "top-end"]
        }
      }
    ]
  });

  const handleSearch = (value: string) => {
    searchChange && searchChange(value);
  };

  useEffect(() => {
    if (update) {
      update();
    }
    if (!enter && inputRef.current) {
      inputRef.current.value = "";
    }
  }, [enter]);

  return createPortal(
    <div ref={ref}>
      <div
        ref={targetRef}
        className={`${selectStyles["select-container"]} ${popperStyles({ show: enter })} ${
          search ? "bu-pb-[8px]" : "bu-py-[8px]"
        } ${menuStyles({
          theme
        })} ${menuWrapperClassName || ""}`}
        style={{ ...styles.popper, ...customStyles }}
        {...attributes.popper}>
        {search && (
          <div className={searchStyles({ theme })}>
            <TextField
              ref={inputRef}
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
      </div>
    </div>,
    document.body
  );
});

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
  inputDisabled?: boolean;
  hoverClassName?: string;
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
    inputDisabled = false,
    hoverClassName,
    ...otherProps
  } = props;

  const { theme } = useTheme();

  const { isClient } = useClient();

  const selectRef = useRef<HTMLDivElement | null>(null);

  const customeRef = useRef<HTMLDivElement | null>(null);

  const [enter, setEnter] = useDelayEvent<boolean>(false, 100);

  const keyByItems = keyBy(selectItems, "value");

  const keyByItemsMemo = useMemo(() => {
    return keyByItems;
  }, [value, selectItems]);

  const handleSelect = (value: string) => {
    handleChange && handleChange(value);
    setEnter(false);
  };

  const mouseEnter = () => {
    if (trigger === "hover") {
      setEnter(true);
    }
  };

  const mouseLeave = () => {
    if (trigger === "hover") {
      setEnter(false);
    }
  };

  const handleClick = () => {
    if (trigger === "click" && enter === false) {
      setEnter(true);
    }
  };

  // // 当单击文档时，检查单击事件的目标是否在下拉窗口内
  const handleClickOutside = (event: any) => {
    if (customeRef.current?.contains(event.target)) {
      return;
    }

    if (selectRef.current && !selectRef.current.contains(event.target)) {
      console.log(selectRef.current.contains(event.target));
      setEnter(false);
    }
    searchChange && searchChange("");
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

  return (
    <div className="bu-flex">
      <div
        id={labelId}
        ref={selectRef}
        className={`bu-flex bu-cursor-pointer bu-select-none bu-items-center bu-justify-center`}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        onClick={handleClick}>
        {wrapper ? (
          wrapper(
            <Typography
              variant="body4"
              className={`${labelClassName} ${enter ? hoverClassName : ""}`}>
              {keyByItemsMemo[String(value)]?.[labelField]}
            </Typography>
          )
        ) : (
          <Typography
            variant="body4"
            className={`${labelClassName} ${enter ? hoverClassName : ""}`}>
            {keyByItemsMemo[String(value)]?.[labelField]}
          </Typography>
        )}
        {selectType === "filled" ? (
          <ArrowFill
            className={`bu-h-[16px] bu-w-[16px] ${!enter ? "bu-rotate-180" : ""} ${cn(
              labelStyles({
                theme: mode || theme
              })
            )} ${arrowClassName} ${enter ? hoverClassName : ""}`}
          />
        ) : (
          <SelectArrow
            className={`bu-ml-[4px] bu-h-[10px] bu-w-[10px] ${enter ? "bu-rotate-180" : ""} ${cn(
              outlinedStyles({
                theme: mode || theme
              })
            )} ${arrowClassName} ${enter ? hoverClassName : ""}`}
          />
        )}
        {isClient && (
          <SelectMenu
            ref={customeRef}
            enter={enter}
            parent={selectRef.current}
            search={search}
            searchChange={searchChange}
            value={String(value)}
            items={selectItems}
            customSelectItems={customSelectItems}
            align={align}
            handleSelect={handleSelect}
            activeColor={activeColor}
            theme={mode || theme}
            offsetParent={offsetParent}
            menuWrapperClassName={menuWrapperClassName}
            rowKey={rowKey}
            styles={styles}
          />
        )}
      </div>

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
