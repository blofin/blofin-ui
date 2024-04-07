import { FC, ReactNode, useEffect, useMemo, useRef, useState } from "react";
import styles from "./index.module.scss";
import ReactDOM from "react-dom";
import { TextField, useTheme } from "../..";
import useAlign from "../../hooks/useAlign";
import { activeStyles, bgStyles, disabledStyles, iconStyles, itemStyles } from "./styles";
import SelectArrow from "../../assets/icons/text-arrow.svg";

interface Options {
  label: string;
  value: string;
}

interface TextSelectProps {
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
  hideEndAdornment?: boolean;
  readOnly?: boolean;
  scrollContainer?: HTMLDivElement | null;
}

type OptionsProps = Omit<TextSelectProps, "placeholder"> & {
  className?: string;
  parent: HTMLDivElement | null;
  hide: () => void;
};

const Options: FC<OptionsProps> = ({
  parent,
  options,
  onChange,
  className,
  disabled,
  defaultValue,
  scrollContainer,
  hide
}) => {
  const { theme } = useTheme();

  const targetRef = useRef<HTMLDivElement | null>(null);

  const { offset, resize } = useAlign(parent);

  const { offsetX, offsetY } = offset;

  const { height, width } = parent ? parent.getBoundingClientRect() : { width: 0, height: 0 };

  const handleClick = (value: string) => {
    if (disabled === value) {
      return;
    }
    if (value !== defaultValue) {
      onChange(value);
    }
    hide();
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

  return offsetX !== 0 && offsetY !== 0
    ? ReactDOM.createPortal(
        <div
          className={`${styles.options} ${className} ${bgStyles({ theme })}`}
          style={{ top: offsetY + height + "px", left: offsetX + "px" }}
          ref={targetRef}>
          {options.map((item) => {
            return (
              <div
                onClick={() => handleClick(item.value)}
                className={`${styles.item}  ${
                  disabled === item.value ? disabledStyles({ theme }) : itemStyles({ theme })
                } ${defaultValue === item.value ? activeStyles({ theme }) : ""} `}
                style={{ width: width + "px" }}
                key={item.value}>
                {item.label}
              </div>
            );
          })}
        </div>,
        document.body
      )
    : null;
};

const TextSelect: FC<TextSelectProps> = (props) => {
  const {
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
    hideEndAdornment = false,
    readOnly = true,
    value,
    scrollContainer
  } = props;

  const targetRef = useRef<HTMLDivElement | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocus, setIsFocus] = useState(false);

  const [show, setShow] = useState(false);

  const { theme } = useTheme();

  const label = useMemo(() => {
    const option = options.find((item) => {
      return item.value === defaultValue;
    });
    return option ? option.label : "";
  }, [defaultValue]);

  const hide = () => {
    setShow(false);
    setIsFocus(false);
  };

  const handleClickOutside = (event: any) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      hide()
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
    return ()=>{
      document.removeEventListener("click", handleClickOutside);
    }
  }, []);

  return (
    <div className="bu-relative bu-cursor-pointer" ref={targetRef}>
      <TextField
        ref={inputRef}
        inputClassName={styles.input}
        variant="outlined"
        onFocus={() => {
          setShow(true);
          onFocus && onFocus();
        }}
        className={inputClassName}
        readOnly={readOnly}
        onBlur={() => {
          onBlur && onBlur();
        }}
        placeholder={placeholder}
        value={readOnly === false ? value : label}
        onChange={(e) => {
          inputChange && inputChange(e.target.value);
        }}
        endAdornment={
          !hideEndAdornment && (
            <SelectArrow
              onClick={() => {
                setTimeout(()=>{
                  !isFocus ? inputRef.current?.focus() : inputRef.current?.blur();
                },0)
              }}
              className={`${iconStyles({ theme })} ${isFocus ? styles.roate : ""}`}
            />
          )
        }
      />
      {show && (
        <Options
          parent={targetRef.current}
          options={options}
          onChange={onChange}
          disabled={disabled}
          defaultValue={defaultValue}
          className={className}
          scrollContainer={scrollContainer}
          hide={hide}
        />
      )}
    </div>
  );
};

export { TextSelect };
