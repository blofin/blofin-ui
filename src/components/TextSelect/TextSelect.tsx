import {
  FC,
  ReactNode,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from "react";
import styles from "./index.module.scss";
import ReactDOM from "react-dom";
import { TextField, useTheme } from "../..";
import useAlign from "../../hooks/useAlign";
import {
  bgStyles,
  disabledStyles,
  activeTextStyles,
  activeBackgroundStyles,
  iconStylesVariants,
  itemStyles,
  searchIconStyles,
  searchStyles
} from "./styles";
import SelectArrow from "../../assets/icons/text-arrow.svg";
import ArrowDown from "../../assets/icons/arrow-down.svg";
import SearchIcon from "../../assets/icons/search.svg";
import { CustomFields } from "../../types/component";
import { InputSize } from "../TextField/TextField";
import clsx from "clsx";

interface Options extends CustomFields {
  label: string;
  value: string;
}

export interface TextSelectProps {
  id?: string;
  options: Options[];
  onChange: (value: string) => void;
  inputChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  disabled?: string;
  className?: string;
  inputClassName?: string;
  valueClassName?: string;
  hideEndAdornment?: boolean;
  readOnly?: boolean;
  scrollContainer?: HTMLDivElement | null;
  children?: JSX.Element | ReactNode;
  auto?: boolean;
  search?: boolean;
  searchChange?: (value: string) => void;
  searchClassName?: string;
  startAdornment?: ReactNode;
  customSelectItems?: (item: Options) => ReactNode;
  selectItemClassName?: string;
  hideSelectedState?: boolean;
  offsetPixels?: number;
  preventDuplicateSelection?: boolean;
  inputDisabled?: boolean;
  base?: "input" | "div";
  customLabel?: (item: Options) => ReactNode;
  error?: boolean;
  size?: InputSize;
  highlightMode?: "text" | "background";
  preventHideFun?: boolean;
  variant?: "fill" | "line";
}

type OptionsProps = Omit<TextSelectProps, "placeholder"> & {
  className?: string;
  parent: HTMLDivElement | null;
  hide: () => void;
};

const Options = forwardRef<HTMLDivElement, OptionsProps>(
  (
    {
      parent,
      options,
      onChange,
      className,
      disabled,
      defaultValue,
      scrollContainer,
      children,
      hide,
      auto = true,
      search = false,
      searchChange,
      customSelectItems,
      selectItemClassName,
      searchClassName,
      hideSelectedState = false,
      offsetPixels = -2,
      preventDuplicateSelection = true,
      highlightMode = "text",
      preventHideFun = false
    },
    ref
  ) => {
    const { theme, direction } = useTheme();
    const isRTL = direction === "rtl";

    const targetRef = useRef<HTMLDivElement | null>(null);

    const [optionHeight, setOptionHeight] = useState(0);

    const { offset, resize } = useAlign(parent);

    const { offsetX, offsetY, offsetRight } = offset;

    const [isBottomed, setIsBottomed] = useState(false);

    const { height, width } = parent ? parent.getBoundingClientRect() : { width: 0, height: 0 };

    const realDisabled = useMemo(() => {
      return disabled?.split(",");
    }, [disabled]);

    const handleClick = (value: string, e: React.MouseEvent) => {
      e.preventDefault();

      if (realDisabled?.includes(value)) {
        return;
      }

      if (value !== defaultValue || !preventDuplicateSelection) {
        onChange(value);
      }

      if (!preventHideFun) {
        hide();
      }
    };

    const handleSearch = (value: string) => {
      searchChange && searchChange(value);
    };

    useEffect(() => {
      if (scrollContainer) {
        scrollContainer.addEventListener("scroll", resize);
      }
      return () => {
        if (scrollContainer) {
          scrollContainer.removeEventListener("scroll", resize);
        }
      };
    }, [scrollContainer]);

    useEffect(() => {
      if (auto) {
        setTimeout(() => {
          if (targetRef.current) {
            const screenHeight = window.innerHeight || document.documentElement.clientHeight;
            const { bottom, height } = targetRef.current.getBoundingClientRect();
            setOptionHeight(height);
            if (bottom > screenHeight) {
              setIsBottomed(true);
            } else {
              setIsBottomed(false);
            }
          }
        }, 0);
      }
    }, [auto]);

    return offsetX !== 0 && offsetY !== 0
      ? ReactDOM.createPortal(
          <div
            className={`${styles.options} ${className} ${bgStyles({ theme })}`}
            style={{
              top: isBottomed ? offsetY - optionHeight - 4 : offsetY + height + 4 + "px",
              ...(isRTL ? { right: offsetRight + "px" } : { left: offsetX + "px" })
            }}
            ref={targetRef}>
            <div ref={ref} style={{ width: width + offsetPixels + "px" }}>
              {search && (
                <div className={`${searchStyles({ theme })} ${searchClassName}`}>
                  <TextField
                    variant="outlined"
                    startAdornment={<SearchIcon className={searchIconStyles({ theme })} />}
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                </div>
              )}

              {options.map((item) => {
                return (
                  <div
                    onClick={(e) => handleClick(item.value, e)}
                    className={clsx(
                      styles.item,
                      selectItemClassName,
                      realDisabled?.includes(item.value)
                        ? disabledStyles({ theme })
                        : itemStyles({ theme }),
                      !hideSelectedState &&
                        defaultValue === item.value &&
                        (highlightMode === "text"
                          ? activeTextStyles({ theme })
                          : activeBackgroundStyles({ theme }))
                    )}
                    style={{ width: width + offsetPixels + "px" }}
                    key={item.value}>
                    {customSelectItems ? customSelectItems(item) : item.label}
                  </div>
                );
              })}
              <div className="bu-cursor-pointer bu-px-[16px]">{children}</div>
            </div>
          </div>,
          document.body
        )
      : null;
  }
);
export interface TextSelectRefProps {
  close: () => void;
  clear: () => void;
}

const TextSelect = forwardRef<TextSelectRefProps, TextSelectProps>((props, ref) => {
  useImperativeHandle(ref, () => {
    return {
      close: hide,
      clear: clear
    };
  });

  const {
    id,
    placeholder,
    defaultValue,
    options,
    onChange,
    inputChange,
    onFocus,
    onBlur,
    disabled,
    className = "",
    inputClassName = "",
    valueClassName = "",
    hideEndAdornment = false,
    readOnly = true,
    value,
    scrollContainer,
    children,
    auto = true,
    search = false,
    searchChange,
    searchClassName,
    startAdornment,
    customSelectItems,
    selectItemClassName,
    hideSelectedState,
    offsetPixels = -2,
    preventDuplicateSelection = true,
    inputDisabled = false,
    base = "input",
    customLabel,
    error,
    size = "md",
    highlightMode,
    preventHideFun,
    variant = "line"
  } = props;

  const targetRef = useRef<HTMLDivElement | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const divRef = useRef<HTMLDivElement>(null);

  const customeRef = useRef<HTMLDivElement | null>(null);

  const searchRef = useRef<HTMLDivElement | null>(null);

  const [isFocus, setIsFocus] = useState(false);

  const [show, setShow] = useState(false);

  const { theme } = useTheme();

  const [selectedLabel, setSelectedLabel] = useState("");

  const [selectedLabelNode, setSelectedLabelNode] = useState<string | ReactNode>("");

  useEffect(() => {
    const initialOption = options.find((item) => item.value === defaultValue);
    if (initialOption) {
      setSelectedLabel(initialOption.label);
    } else {
      setSelectedLabel("");
    }
  }, [defaultValue, options]);

  useEffect(() => {
    const option = options.find((item) => {
      return item.value === defaultValue;
    });
    if (option) {
      setSelectedLabelNode(customLabel ? customLabel(option) : option.label);
    }
  }, [defaultValue, customLabel, options]);

  const hide = () => {
    setShow(false);
    setIsFocus(false);
    searchChange && searchChange("");
  };

  const clear = () => {
    setSelectedLabel("");
  };

  const handleClickOutside = (event: any) => {
    if (customeRef.current?.contains(event.target)) {
      return;
    }

    if (
      (inputRef.current && !inputRef.current.contains(event.target)) ||
      (divRef.current && !divRef.current.contains(event.target))
    ) {
      hide();
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      document.addEventListener("click", handleClickOutside);
      inputRef.current.addEventListener("focus", () => {
        setShow(true);
        setIsFocus(true);
      });
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const ArrorIcon = variant === "fill" ? ArrowDown : SelectArrow;

  return (
    <div className="bu-relative bu-cursor-pointer" ref={targetRef}>
      <TextField
        id={id || ""}
        disabled={inputDisabled}
        ref={inputRef}
        inputClassName={`${styles.input} ${valueClassName} ${base === "div" ? "bu-h-0" : ""}`}
        variant="outlined"
        error={error}
        onFocus={() => {
          setShow(true);
          onFocus && onFocus();
        }}
        className={inputClassName}
        readOnly={readOnly}
        onBlur={() => {
          onBlur && onBlur();
        }}
        inputSize={size}
        placeholder={placeholder}
        value={readOnly === false ? value : selectedLabel}
        onChange={(e) => {
          inputChange && inputChange(e.target.value);
        }}
        startAdornment={startAdornment}
        endAdornment={
          !hideEndAdornment &&
          base === "input" && (
            <ArrorIcon
              onClick={() => {
                if (inputDisabled) return;
                setTimeout(() => {
                  !isFocus ? inputRef.current?.focus() : inputRef.current?.blur();
                }, 0);
              }}
              className={`${iconStylesVariants({ theme, disabled: inputDisabled, variant })} ${
                isFocus ? styles.roate : ""
              }`}
            />
          )
        }
        autoComplete="off"
      />
      {base === "div" && (
        <div
          ref={divRef}
          className={clsx(
            styles.input,
            valueClassName,
            "bu-flex bu-h-full bu-w-full bu-items-center bu-justify-between bu-rounded bu-border-[1px]",
            base === "div" && "bu-absolute bu-top-0 ltr:bu-left-0 rtl:bu-right-0",
            theme === "light"
              ? "bu-border-light-line-secondary bu-bg-light-background"
              : "bu-border-dark-line-secondary bu-bg-dark-background"
          )}
          onClick={() => {
            if (inputDisabled) return;
            setTimeout(() => {
              !isFocus ? inputRef.current?.focus() : inputRef.current?.blur();
            }, 0);
          }}>
          <div className="ltr:bu-pl-[8px] rtl:bu-pr-[8px] bu-text-[12px]">{selectedLabelNode}</div>
          {!hideEndAdornment && (
            <ArrorIcon
              onClick={() => {
                if (inputDisabled) return;
                setTimeout(() => {
                  !isFocus ? inputRef.current?.focus() : inputRef.current?.blur();
                }, 0);
              }}
              className={clsx(
                iconStylesVariants({ theme, disabled: inputDisabled }),
                isFocus && styles.roate
              )}
            />
          )}
        </div>
      )}

      {show && (
        <Options
          ref={customeRef}
          parent={targetRef.current}
          options={options}
          onChange={onChange}
          disabled={disabled}
          defaultValue={defaultValue}
          className={className}
          scrollContainer={scrollContainer}
          customSelectItems={customSelectItems}
          selectItemClassName={selectItemClassName}
          hideSelectedState={hideSelectedState}
          offsetPixels={offsetPixels}
          hide={hide}
          auto={auto}
          search={search}
          searchChange={searchChange}
          searchClassName={searchClassName}
          preventDuplicateSelection={preventDuplicateSelection}
          highlightMode={highlightMode}
          preventHideFun={preventHideFun}>
          {children}
        </Options>
      )}
    </div>
  );
});

export { TextSelect };
