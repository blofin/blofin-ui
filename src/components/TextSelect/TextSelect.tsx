import { FC, ReactNode, useRef, useState } from "react";
import styles from "./index.module.scss";
import ReactDOM from "react-dom";
import { TextField, useTheme } from "../..";
import useAlign from "../../hooks/useAlign";
import { bgStyles, disabledStyles, iconStyles, itemStyles } from "./styles";
import SelectArrow from "../../assets/icons/text-arrow.svg";

interface Options {
  label: ReactNode;
  value: string;
}

interface TextSelectProps {
  options: Options[];
  onChange: (value: string) => void;
  placeholder?: string;
  defaultValue?: string;
  disabled?: string;
}

type OptionsProps = Omit<TextSelectProps, "placeholder" | "defaultValue"> & {
  className?: string;
  parent: HTMLDivElement | null;
};

const Options: FC<OptionsProps> = ({ parent, options, onChange, className, disabled }) => {
  const { theme } = useTheme();

  const targetRef = useRef<HTMLDivElement | null>(null);

  const { offsetX, offsetY, clientWidth, clientHeight, offsetLeft, offsetRight } = useAlign(parent);

  const { height, width } = parent ? parent.getBoundingClientRect() : { width: 0, height: 0 };

  const handleClick = (value: string) => {
    if(disabled===value){
      return
    }
    onChange(value);
  };

  return ReactDOM.createPortal(
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
            }`}
            style={{ width: width + "px" }}
            key={item.value}>
            {item.label}
          </div>
        );
      })}
    </div>,
    document.body
  );
};

const TextSelect: FC<TextSelectProps> = (props) => {
  const { placeholder, defaultValue, options, onChange, disabled } = props;

  const targetRef = useRef<HTMLDivElement | null>(null);

  const [show, setShow] = useState(false);

  const { theme } = useTheme();

  const hide = () => {
    setTimeout(() => {
      setShow(false);
    }, 100);
  };

  return (
    <div ref={targetRef}>
      <TextField
        variant="outlined"
        onFocus={() => {
          setShow(true);
        }}
        readOnly
        onBlur={hide}
        placeholder={placeholder}
        value={defaultValue}
        endAdornment={<SelectArrow className={`${iconStyles({ theme })}`} />}
      />
      <Options
        className={!show ? "bu-hidden" : ""}
        parent={targetRef.current}
        options={options}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export { TextSelect };
