import { useRef, useState } from "react";
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
  const railRef = useRef<HTMLDivElement>(null);
  const [thumbLocation, setThumbLocation] = useState<number>(0);

  const handleDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();
    const { left: min, right: max } = railRef.current?.getBoundingClientRect() || {
      left: 0,
      right: 0
    };
    if (e.clientX >= min && e.clientX <= max) {
      setThumbLocation(((e.clientX - min) / (max - min)) * 100);
    } else if (e.clientX < min && e.clientX > 0) {
      setThumbLocation(0);
    } else if (e.clientX > max) {
      setThumbLocation(100);
    }
  };
  return (
    <div className={styles["slider-container"]}>
      <div className={styles["slider-content"]}>
        <div ref={railRef} className={styles["rail"]}></div>
        <div className={styles["track"]}></div>
        <div className={styles["mark-container"]}>
          <div className={styles["mark"]}>
            <span className={styles["mark-label"]}>0</span>
          </div>
          <div className={styles["mark"]}></div>
          <div className={styles["mark"]}></div>
          <div className={styles["mark"]}></div>
          <div className={styles["mark"]}>
            <span className={styles["mark-label"]}>100%</span>
          </div>
        </div>
        <div
          className={styles["thumb"]}
          style={{
            left: `${thumbLocation}%`
          }}
          draggable
          onDrag={handleDrag}></div>
      </div>
    </div>
  );
};
