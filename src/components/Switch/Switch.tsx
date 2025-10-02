import * as React from "react";
import styles from "./index.module.scss";
import { bgStyle, moveSize, switchSize, thumbSize } from "./styles";
import { useTheme } from "../../provider/useTheme";

interface SwitchProps {
  check: boolean;
  onChange: () => void;
  size?: "tiny" | "small" | "medium";
  className?: string;
}

export const Switch: React.FC<SwitchProps> = ({ check, onChange, size = "medium", className = "" }) => {
  const { theme } = useTheme();

  const change = () => {
    onChange();
  };

  return (
    <div
      className={`${styles.switch} ${bgStyle({ theme: theme })} ${switchSize({ size })} ${
        check ? "bu-bg-light-primary" : ""
      } ${className}`}
      onClick={change}>
      <div
        className={`${styles.thumb} ${check ? moveSize({ size }) : ""} ${thumbSize({
          size
        })}`}></div>
    </div>
  );
};
