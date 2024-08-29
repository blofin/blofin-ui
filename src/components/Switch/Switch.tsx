import { FC } from "react";
import styles from "./index.module.scss";
import { moveSize, switchSize, thumbSize } from "./styles";

interface SwitchProps {
  check: boolean;
  onChange: () => void;
  size?: "small" | "medium";
}

export const Switch: FC<SwitchProps> = ({ check, onChange, size = "medium" }) => {
  const change = () => {
    onChange();
  };

  return (
    <div
      className={`${styles.switch} ${check ? styles.primary : ""} ${switchSize({ size })} `}
      onClick={change}>
      <div className={`${styles.thumb} ${check ? moveSize({size}) : "" } ${thumbSize({size})}`}></div>
    </div>
  );
};
