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
import { InputSize } from "../TextField/TextField";
import useTheme from "../../provider/useTheme";
import { cn } from "../../utils/utils";
import { BUITheme } from "../../types/component";
import {
  MultiWrapperStyles,
  InnerWrapperStyles,
  InputActiveStyles,
  ArrowWrapperStyles,
  bgStyles,
  placeholderStyles,
  searchStyles,
  searchIconStyles,
  clearSearchIconStyles,
  optionsRowStyles
} from "./styles";
import IconArrowDown from "../../assets/icons/arrow-down-l-line.svg";
import IocnArrowClose from "../../assets/icons/close-bg.svg";
import IconArrowClosePure from "../../assets/icons/close.svg";
import useAlign from "../../hooks/useAlign";
import TextField from "../TextField/TextField";
import SearchIcon from "../../assets/icons/search.svg";

export type TypesVariant = "filled" | "outlined";

interface Option {
  label: string;
  value: string;
  icon?: string;
  disabled?: boolean;
  [key: string]: any;
}

interface optionsFormatParams extends Option {
  isSelected?: boolean;
}
export interface MultiSelectProps {
  id?: string;
  size?: InputSize;
  className?: string;
  menusClassName?: string;
  placeholder?: string;
  theme?: BUITheme;
  variant?: TypesVariant;
  clearIcon?: boolean;
  scrollContainer?: HTMLDivElement | null;
  auto?: boolean;
  offsetPixels?: number;
  search?: boolean;
  searchClassName?: string;
  searchChange?: (value: string) => void;
  options: Option[];
  optionsFormat?: (option: optionsFormatParams) => ReactNode;
  multiLimit?: number;
  values?: string[];
  onChange?: (value: string[]) => void;
  labelShowKey?: string;
}

export interface MultiSelectRefProps {
  close: () => void;
  clear: () => void;
}

interface OptionsProps extends MultiSelectProps {
  parent: HTMLDivElement | null;
  currentSelected?: string[];
  setCurrentSelected: (value: string[]) => void;
  setIsShowOptions: (value: boolean) => void;
  setIsHover?: (value: boolean) => void;
}

const Menus = forwardRef<HTMLDivElement, OptionsProps>((props, ref) => {
  const {
    parent,
    theme: propsTheme,
    size,
    scrollContainer,
    auto,
    offsetPixels = -2,
    menusClassName,
    search = true,
    searchClassName,
    searchChange,
    options,
    optionsFormat,
    currentSelected,
    setCurrentSelected,
    setIsShowOptions,
    setIsHover,
    multiLimit
  } = props;

  const { theme, direction } = useTheme();
  const isRTL = direction === "rtl";

  const realTheme = propsTheme ? propsTheme : theme;

  const [realOptions, setRealOptions] = useState<Option[]>(options);

  const targetRef = useRef<HTMLDivElement | null>(null);

  const [optionHeight, setOptionHeight] = useState(0);

  const { offset, resize } = useAlign(parent);

  const { offsetX, offsetY, offsetRight } = offset;

  const [isBottomed, setIsBottomed] = useState(false);

  const { height, width } = parent ? parent.getBoundingClientRect() : { width: 0, height: 0 };

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value: string) => {
    setSearchValue(value);
    if (searchChange && typeof searchChange === "function") {
      searchChange(value);
    } else {
      if (!value) {
        setRealOptions(options);
        return;
      }
      const filteredOptions = options.filter((option) => {
        return option.label.toLowerCase().includes(value.toLowerCase());
      });
      const sortedOptions = filteredOptions.sort((a, b) => {
        if (a.label.toLowerCase() === value.toLowerCase()) return -1;
        if (b.label.toLowerCase() === value.toLowerCase()) return 1;
        if (a.label.toLowerCase().startsWith(value.toLowerCase())) return -1;
        if (b.label.toLowerCase().startsWith(value.toLowerCase())) return 1;
        return a.label.localeCompare(b.label);
      });
      setRealOptions(sortedOptions);
    }
  };

  const onOptionRowClick = (option: Option) => {
    if (option.disabled) return;
    if (setCurrentSelected && currentSelected) {
      if (multiLimit && currentSelected.length >= multiLimit) {
        return;
      }
      const isHave = !!currentSelected.includes(option.value);
      if (!isHave) {
        setCurrentSelected([...currentSelected, option.value]);
      }
      setIsHover && setIsHover(false);
      setIsShowOptions(false);
    }
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
          className={`${styles["menus"]} ${menusClassName} ${bgStyles({ theme })}`}
          style={{
            top: isBottomed ? offsetY - optionHeight - 4 : offsetY + height + 4 + "px",
            ...(isRTL ? { right: offsetRight + "px" } : { left: offsetX + "px" })
          }}
          onClick={(e) => e.stopPropagation()}
          onMouseDown={(e) => e.stopPropagation()}
          onMouseUp={(e) => e.stopPropagation()}
          onMouseMove={(e) => e.stopPropagation()}
          onMouseLeave={(e) => e.stopPropagation()}
          onMouseEnter={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
          onTouchEnd={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          onTouchCancel={(e) => e.stopPropagation()}
          onContextMenu={(e) => e.stopPropagation()}
          ref={targetRef}>
          <div
            ref={ref}
            style={{ width: width + offsetPixels + "px" }}
            className="bu-flex bu-h-full bu-flex-col bu-gap-[8px]">
            {search && (
              <div className={`${searchStyles({ theme })} ${searchClassName}`}>
                <TextField
                  value={searchValue}
                  variant="outlined"
                  startAdornment={<SearchIcon className={searchIconStyles({ theme })} />}
                  endAdornment={
                    searchValue ? (
                      <IocnArrowClose
                        className={clearSearchIconStyles({ theme })}
                        onClick={() => handleSearch("")}
                      />
                    ) : null
                  }
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
            )}
            <ul className={styles["options-wrapper"]}>
              {realOptions.map((option, index) => {
                const isSelected = currentSelected?.includes(option.value);

                if (optionsFormat) {
                  return (
                    <li
                      className={cn(
                        optionsRowStyles({
                          theme: realTheme,
                          disabled: !!option.disabled,
                          isSelected: !!isSelected
                        })
                      )}
                      onClick={() => {
                        onOptionRowClick(option);
                      }}
                      key={`${index}-${option.value}`}>
                      {optionsFormat({ ...option, isSelected })}
                    </li>
                  );
                }

                return (
                  <li
                    className={cn(
                      optionsRowStyles({
                        theme: realTheme,
                        disabled: !!option.disabled,
                        isSelected: !!isSelected
                      })
                    )}
                    onClick={() => {
                      onOptionRowClick(option);
                    }}
                    key={`${index}-${option.value}`}>
                    {option.icon && (
                      <img
                        src={option.icon}
                        alt={option.label}
                        className="ltr:bu-mr-[4px] rtl:bu-ml-[4px] bu-h-[20px] bu-w-[20px]"
                      />
                    )}
                    <div>{option.label}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>,
        document.body
      )
    : null;
});

const MultiSelect = forwardRef<MultiSelectRefProps, MultiSelectProps>((props, ref) => {
  useImperativeHandle(ref, () => ({
    close: hide,
    clear: clear
  }));

  const {
    id,
    size = "md",
    className,
    theme: propsTheme,
    variant = "outlined",
    clearIcon = true,
    placeholder = "placeholder",
    values,
    onChange,
    labelShowKey,
    options
  } = props;

  const { theme } = useTheme();

  const targetRef = useRef<HTMLDivElement | null>(null);

  const realTheme = propsTheme ? propsTheme : theme;

  const [isShowOptions, setIsShowOptions] = useState(false);

  const [isHover, setIsHover] = useState(false);

  const [currentSelected, setCurrentSelected] = useState<string[]>([]);

  const hide = () => {
    setIsShowOptions(false);
    setIsHover(false);
    setCurrentSelected([]);
    if (targetRef.current) {
      targetRef.current.blur();
    }
  };

  const clear = () => {
    setCurrentSelected([]);
    setIsShowOptions(false);
  };

  const onMultiSelectClick = () => {
    setIsShowOptions(!isShowOptions);
  };

  const onIconCloseClick = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    setCurrentSelected([]);
    setIsShowOptions(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (targetRef.current && !targetRef.current.contains(event.target as Node)) {
        setIsShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (values && Array.isArray(values)) {
      setCurrentSelected(values);
    }
  }, [values]);

  useEffect(() => {
    if (onChange && typeof onChange === "function") {
      onChange(currentSelected);
    }
  }, [currentSelected]);

  return (
    <div
      ref={targetRef}
      className={cn(
        MultiWrapperStyles({ theme: realTheme, size, variant }),
        isShowOptions ? InputActiveStyles({ theme }) : null,
        className
      )}
      id={id}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onMultiSelectClick}>
      <div className={InnerWrapperStyles({ size })}>
        {currentSelected.length > 0 ? (
          currentSelected.map((value) => {
            const itemOption = options.find((op) => op.value === value);
            return (
              <div
                key={value}
                className={`bu-flex bu-items-center bu-gap-[2px] bu-rounded-[4px] bu-px-[4px] bu-py-[2px] ${
                  realTheme === "dark"
                    ? "bu-bg-dark-hover-fill-primary"
                    : "bu-bg-light-hover-fill-primary"
                }`}>
                <div
                  className={`bu-text-[16px] bu-leading-[24px] ${
                    realTheme === "dark" ? "bu-text-dark-label" : "bu-text-light-label"
                  }`}>
                  {itemOption && labelShowKey ? itemOption[labelShowKey] : value}
                </div>
                <IconArrowClosePure
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSelected((prev) => prev.filter((item) => item !== value));
                  }}
                  className={`bu-h-[20px] bu-w-[20px] bu-cursor-pointer ${
                    realTheme === "dark" ? "bu-text-dark-label-40" : "bu-text-light-label-40"
                  }`}
                />
              </div>
            );
          })
        ) : (
          <div className={placeholderStyles({ theme: realTheme, size })}>{placeholder}</div>
        )}
      </div>
      <div className={ArrowWrapperStyles({ size })}>
        {clearIcon && isHover && currentSelected.length > 0 ? (
          <IocnArrowClose
            className="bu-h-full bu-w-full bu-cursor-pointer"
            onClick={(e) => {
              onIconCloseClick(e);
            }}
          />
        ) : (
          <IconArrowDown
            className={`bu-h-full bu-w-full bu-transition-all ${
              isShowOptions ? "bu-rotate-180" : ""
            }`}
          />
        )}
      </div>

      {isShowOptions && (
        <Menus
          {...props}
          parent={targetRef.current}
          currentSelected={currentSelected}
          setCurrentSelected={setCurrentSelected}
          setIsShowOptions={setIsShowOptions}
          setIsHover={setIsHover}
        />
      )}
    </div>
  );
});

export default MultiSelect;
