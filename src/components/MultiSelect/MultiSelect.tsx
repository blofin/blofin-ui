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
  ArrowWrapperStyles,
  bgStyles,
  placeholderStyles,
  searchStyles,
  searchIconStyles,
  clearSearchIconStyles
} from "./styles";
import IconArrowDown from "../../assets/icons/arrow-down-l-line.svg";
import IocnArrowClose from "../../assets/icons/close-bg.svg";
import useAlign from "../../hooks/useAlign";
import TextField from "../TextField/TextField";
import SearchIcon from "../../assets/icons/search.svg";

export type TypesVariant = "filled" | "outlined";

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
}

export interface MultiSelectRefProps {
  close: () => void;
  clear: () => void;
}

interface OptionsProps extends MultiSelectProps {
  parent: HTMLDivElement | null;
}

const Menus = forwardRef<HTMLDivElement, OptionsProps>((props, ref) => {
  const {
    parent,
    size,
    scrollContainer,
    auto,
    offsetPixels = -2,
    menusClassName,
    search = true,
    searchClassName,
    searchChange
  } = props;

  const { theme } = useTheme();

  const targetRef = useRef<HTMLDivElement | null>(null);

  const [optionHeight, setOptionHeight] = useState(0);

  const { offset, resize } = useAlign(parent);

  const { offsetX, offsetY } = offset;
  console.log("offsetX:", offsetX, "offsetY:", offsetY);

  const [isBottomed, setIsBottomed] = useState(false);

  const { height, width } = parent ? parent.getBoundingClientRect() : { width: 0, height: 0 };

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
          className={`${styles.options} ${menusClassName} ${bgStyles({ theme })}`}
          style={{
            top: isBottomed ? offsetY - optionHeight - 4 : offsetY + height + 4 + "px",
            left: offsetX + "px"
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
          <div ref={ref} style={{ width: width + offsetPixels + "px" }}>
            {search && (
              <div className={`${searchStyles({ theme })} ${searchClassName}`}>
                <TextField
                  variant="outlined"
                  startAdornment={<SearchIcon className={searchIconStyles({ theme })} />}
                  endAdornment={<IocnArrowClose className={clearSearchIconStyles({ theme })} />}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
            )}
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
    placeholder = "placeholder"
  } = props;

  const { theme } = useTheme();

  const targetRef = useRef<HTMLDivElement | null>(null);

  const realTheme = propsTheme ? propsTheme : theme;

  const [isShowOptions, setIsShowOptions] = useState(false);

  const [isHover, setIsHover] = useState(false);

  const [currentSelected, setCurrentSelected] = useState<string[]>([]);

  const hide = () => {};

  const clear = () => {};

  const onMultiSelectClick = () => {
    setIsShowOptions(!isShowOptions);
  };

  const onIconCloseClick = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    setCurrentSelected([]);
    setIsShowOptions(false);
  };

  return (
    <div
      ref={targetRef}
      className={cn(MultiWrapperStyles({ theme: realTheme, size, variant }), className)}
      id={id}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onMultiSelectClick}>
      <div className="bu-flex bu-flex-[1] bu-flex-wrap bu-items-center bu-justify-start">
        {currentSelected.length > 0 ? (
          <div></div>
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

      {isShowOptions && <Menus {...props} parent={targetRef.current} />}
    </div>
  );
});

export default MultiSelect;
