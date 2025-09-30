import * as React from "react";
import styles from "./styles";

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "size" | "prefix" | "type" | "onChange" | "onFocus" | "onBlur"
  > {
  width?: string;
  height?: string;
  defaultValue?: string;
  size?: "small" | "medium" | "large";
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = (props) => {
  const { width, height, size = "medium", placeholder } = props;

  const [value, setValue] = React.useState("");

  const [focus, setFocus] = React.useState(false);

  const onFocus = () => {
    props.onFocus && props.onFocus();
    setFocus(true);
  };

  const onBlur = () => {
    props.onBlur && props.onBlur();
    setFocus(false);
  };

  const onChange = (value: string) => {
    setValue(value);
    if (props.onChange) {
      props.onChange(value);
    }
  };

  React.useEffect(() => {
    setValue(props.defaultValue || "");
  }, [props.defaultValue]);

  return (
    <span
      className={`${styles.light[size].inputWrapper} ${styles.light.large.hover} ${
        focus ? styles.light.large.focus : styles.light.large.default
      }`}
      style={{ width, height }}>
      <input
        className={styles.input}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </span>
  );
};

export default Input;
