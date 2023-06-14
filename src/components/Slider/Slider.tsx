import { BUITheme } from "../../types/component";
import { cn } from "../../utils/utils";
import styles from "./slider.module.scss";
import { SliderVariants } from "./styles";

export interface SliderProps {
  /**
   * BUI theme
   */
  theme?: BUITheme;
}

export const Slider = ({ theme = "light" }: SliderProps) => {
  return (
    <div className={styles["slider-container"]}>
      <div className={styles["slider-content"]}>
        <div className={styles["rail"]}></div>
        <div className={styles["track"]}></div>
        <div className={styles["mark-container"]}>
          <div className={styles["mark"]}>
            <span className={styles["mark-label"]}>0</span>
          </div>
          <div className={styles["mark"]}>
            <span className={styles["mark-label"]}>100%</span>
          </div>
        </div>
        <div className={styles["thumb"]}></div>
      </div>
    </div>
  );
};
