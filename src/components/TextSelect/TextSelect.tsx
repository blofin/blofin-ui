import { FC, ReactNode, useRef } from "react";
import Input, { InputProps } from "../Input/Input";
import styles from "./index.module.scss";
import ReactDOM from "react-dom";
import { useTheme } from "../..";
import useAlign from "../../hooks/useAlign";

interface Options {
  label: ReactNode;
  value: string;
}

interface TextSelectProps extends InputProps {
  options: Options[];
}

const Options: FC<{ parent: HTMLDivElement; options: Options[] }> = ({ parent, options }) => {
  const { theme } = useTheme();

  const targetRef = useRef<HTMLDivElement | null>(null);

  const { offsetX, offsetY, clientWidth, clientHeight, offsetLeft, offsetRight } = useAlign(parent);

  const { height, width } = parent.getBoundingClientRect();

  return ReactDOM.createPortal(
    <div
      className={styles.options}
      style={{ top: offsetY + height + "px", left: offsetX + "px" }}
      ref={targetRef}>
      {options.map((item) => {
        return (
          <div className={styles.item} style={{ width: width + "px" }} key={item.value}>
            {item.label}
          </div>
        );
      })}
    </div>,
    document.body
  );
};

const TextSelect: FC<TextSelectProps> = (props) => {
  const { placeholder, defaultValue, options } = props;

  const targetRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={targetRef} className={styles.selector}>
      <Input size="medium" placeholder={placeholder} defaultValue={defaultValue} />
      <Options parent={targetRef.current!} options={options} />
    </div>
  );
};

export { TextSelect };
