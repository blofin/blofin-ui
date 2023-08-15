import { FC, ReactNode, useRef, useState } from "react";
import styles from "./index.module.scss";
import ReactDOM from "react-dom";
import { TextField, useTheme } from "../..";
import useAlign from "../../hooks/useAlign";
import { bgStyles, iconStyles, itemStyles } from "./styles";
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
}

const Options: FC<{
  className?: string;
  parent: HTMLDivElement | null;
  options: Options[];
  onChange: (value: string) => void;
}> = ({ parent, options, onChange, className }) => {
  const { theme } = useTheme();

  const targetRef = useRef<HTMLDivElement | null>(null);

  const { offsetX, offsetY, clientWidth, clientHeight, offsetLeft, offsetRight } = useAlign(parent);

  const { height, width } = parent ? parent.getBoundingClientRect() : { width: 0, height: 0 };

  const handleClick = (value: string) => {
    onChange(value);
  };

  return ReactDOM.createPortal(
    <div
      className={`${styles.options} ${className} ${bgStyles({theme})}`}
      style={{ top: offsetY + height + "px", left: offsetX + "px" }}
      ref={targetRef}>
      {options.map((item) => {
        return (
          <div
            onClick={() => handleClick(item.value)}
            className={`${styles.item} ${itemStyles({theme})}`}
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
  const { placeholder, defaultValue, options, onChange } = props;

  const targetRef = useRef<HTMLDivElement | null>(null);

  const [show, setShow] = useState(false);

  const { theme } = useTheme();

  const hide = () => {
    setTimeout(() => {
      setShow(false);
    }, 100);
  };

  return (
    <div ref={targetRef} className={styles.selector}>
      <TextField
        variant="outlined"
        onFocus={() => {
          setShow(true);
        }}
        onBlur={hide}
        placeholder={placeholder}
        value={defaultValue}
        endAdornment={<SelectArrow className={`${iconStyles({theme})}`} />}
      />
      <Options
        className={!show ? "bu-hidden" : ""}
        parent={targetRef.current}
        options={options}
        onChange={onChange}
      />
    </div>
  );
};

export { TextSelect };
