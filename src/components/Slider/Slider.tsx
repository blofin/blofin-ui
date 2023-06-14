import { useCallback, useRef, useState } from "react";
import { BUITheme } from "../../types/component";
import { cn } from "../../utils/utils";
import styles from "./slider.module.scss";
import { SliderMarkVariants } from "./styles";

export interface SliderProps {
  /**
   * Value of the slider
   * @default 0
   */
  value: number;
  /**
   *
   * @param value number
   * @returns void
   */
  onSliderChange: (value: number) => void;
  /**
   * BUI theme
   */
  theme?: BUITheme;
}

export const Slider = ({ value, onSliderChange, theme = "light" }: SliderProps) => {
  const railRef = useRef<HTMLDivElement>(null);
  const [thumbLocation, setThumbLocation] = useState<number>(value);

  const handleSliderChange = (newValue: number) => {
    setThumbLocation(newValue);
    onSliderChange(newValue);
  };

  const handleDrag = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const { left: min, right: max } = railRef.current?.getBoundingClientRect() || {
      left: 0,
      right: 0
    };
    if (e.clientX >= min && e.clientX <= max) {
      handleSliderChange(Math.ceil(((e.clientX - min) / (max - min)) * 100));
    } else if (e.clientX < min && e.clientX > 0) {
      handleSliderChange(0);
    } else if (e.clientX > max) {
      handleSliderChange(100);
    }
  };

  const mouseDown = useRef<boolean>(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();

    mouseDown.current = true;

    document.addEventListener(
      "mouseup",
      () => {
        mouseDown.current = false;
        document.removeEventListener("mousemove", handleMouseMove);
      },
      { once: true }
    );

    document.addEventListener("mousemove", handleMouseMove);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (mouseDown.current) {
        handleDrag(e);
      }
    },
    [mouseDown.current]
  );

  const handleMarkClick = (percentage: number) => {
    handleSliderChange(percentage);
  };

  return (
    <div className={styles["slider-container"]}>
      <div className={styles["slider-content"]}>
        <div ref={railRef} className={styles["rail"]}></div>
        <div className={styles["track"]}></div>
        <div className={styles["mark-container"]}>
          <div
            className={`${styles["mark"]} ${cn(SliderMarkVariants({ theme }))}`}
            onClick={() => handleMarkClick(0)}>
            <span className={styles["mark-label"]}>0</span>
          </div>
          <div
            className={`${styles["mark"]} ${cn(SliderMarkVariants({ theme }))}`}
            onClick={() => handleMarkClick(25)}></div>
          <div
            className={`${styles["mark"]} ${cn(SliderMarkVariants({ theme }))}`}
            onClick={() => handleMarkClick(50)}></div>
          <div
            className={`${styles["mark"]} ${cn(SliderMarkVariants({ theme }))}`}
            onClick={() => handleMarkClick(75)}></div>
          <div
            className={`${styles["mark"]} ${cn(SliderMarkVariants({ theme }))}`}
            onClick={() => handleMarkClick(100)}>
            <span className={styles["mark-label"]}>100%</span>
          </div>
        </div>
        <div
          className={styles["thumb"]}
          style={{
            left: `${thumbLocation}%`
          }}
          onMouseDown={handleMouseDown}></div>
      </div>
    </div>
  );
};
