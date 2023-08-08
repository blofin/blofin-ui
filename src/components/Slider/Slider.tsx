import { forwardRef, useCallback, useRef, useState } from "react";
import useTheme from "../../provider/useTheme";
import { BUITheme } from "../../types/component";
import { cn } from "../../utils/utils";
import styles from "./slider.module.scss";
import {
  MarkLabelVariants,
  RailVariants,
  SliderMarkVariants,
  SliderThumbVariants,
  SliderTooltipVariants,
  TrackVariants
} from "./styles";

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

export const Slider = forwardRef<HTMLInputElement, SliderProps>((props, ref) => {
  const { value, onSliderChange, theme: mode } = props;
  const { theme } = useTheme();

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
        <div
          ref={railRef}
          className={`${styles["rail"]} ${cn(RailVariants({ theme: mode || theme }))}`}></div>
        <div
          className={`${styles["track"]} ${cn(TrackVariants({ theme: mode || theme }))}`}
          style={{ width: `${value}%` }}></div>
        <div className={styles["mark-container"]}>
          <div
            className={`${styles["mark"]} ${cn(SliderMarkVariants({ theme: mode || theme }))}`}
            onClick={() => handleMarkClick(0)}>
            <span
              className={`${styles["mark-label"]} ${cn(
                MarkLabelVariants({ theme: mode || theme })
              )}`}>
              0
            </span>
          </div>
          <div
            className={`${styles["mark"]} ${cn(SliderMarkVariants({ theme: mode || theme }))}`}
            onClick={() => handleMarkClick(25)}></div>
          <div
            className={`${styles["mark"]} ${cn(SliderMarkVariants({ theme: mode || theme }))}`}
            onClick={() => handleMarkClick(50)}></div>
          <div
            className={`${styles["mark"]} ${cn(SliderMarkVariants({ theme: mode || theme }))}`}
            onClick={() => handleMarkClick(75)}></div>
          <div
            className={`${styles["mark"]} ${cn(SliderMarkVariants({ theme: mode || theme }))}`}
            onClick={() => handleMarkClick(100)}>
            <span
              className={`${styles["mark-label"]} ${cn(
                MarkLabelVariants({ theme: mode || theme })
              )}`}>
              100%
            </span>
          </div>
        </div>
        <div
          className={styles["thumb-container"]}
          style={{
            left: `${thumbLocation}%`
          }}>
          <div
            className={`${styles["tooltip"]} ${cn(
              SliderTooltipVariants({ theme: mode || theme })
            )}`}>
            {value}%
          </div>
          <div
            className={`${styles["thumb"]} ${cn(SliderThumbVariants({ theme: mode || theme }))}`}
            onMouseDown={handleMouseDown}></div>
        </div>
      </div>
      <input type="hidden" value={value} ref={ref} />
    </div>
  );
});
