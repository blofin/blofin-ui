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
  TrackVariants,
  SliderActivityMarkVariants
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
  id?: string;
}

export const Slider = forwardRef<HTMLInputElement, SliderProps>((props, ref) => {
  const { value, onSliderChange, theme: mode, id } = props;
  const { theme } = useTheme();

  const railRef = useRef<HTMLDivElement>(null);

  const handleDrag = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const { left: min, right: max } = railRef.current?.getBoundingClientRect() || {
      left: 0,
      right: 0
    };
    if (e.clientX >= min && e.clientX <= max) {
      onSliderChange(Math.ceil(((e.clientX - min) / (max - min)) * 100));
    } else if (e.clientX < min && e.clientX > 0) {
      onSliderChange(0);
    } else if (e.clientX > max) {
      onSliderChange(100);
    }
  };

  const mouseDown = useRef<boolean>(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();
    (document.activeElement as HTMLElement).blur();

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

  const handleMarkClick = (e: React.MouseEvent<HTMLDivElement>, percentage: number) => {
    e.stopPropagation();
    onSliderChange(percentage);
  };

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    handleDrag(e as any);
  };

  return (
    <div id={id ? `${id}-slider-container` : ""} className={styles["slider-container"]}>
      <div className={styles["slider-content"]}>
        <div
          ref={railRef}
          className={`${styles["rail"]} ${cn(RailVariants({ theme: mode || theme }))}`}></div>
        <div
          className={`${styles["track"]} ${cn(TrackVariants({ theme: mode || theme }))}`}
          style={{ width: `${value}%` }}></div>
        <div
          id={id ? `${id}-mark-container` : ""}
          className={styles["mark-container"]}
          onClick={(e) => handleContainerClick(e)}>
          <div
            className={`${styles["mark"]} ${cn(
              SliderMarkVariants({ theme: mode || theme }),
              value >= 0 ? SliderActivityMarkVariants({ theme: mode || theme }) : ""
            )}`}
            onClick={(e) => handleMarkClick(e, 0)}>
            <span
              className={`${styles["mark-label"]} ${cn(
                MarkLabelVariants({ theme: mode || theme })
              )}`}>
              0
            </span>
          </div>
          <div
            className={`${styles["mark"]} ${cn(
              SliderMarkVariants({ theme: mode || theme }),
              value >= 25 ? SliderActivityMarkVariants({ theme: mode || theme }) : ""
            )}`}
            onClick={(e) => handleMarkClick(e, 25)}></div>
          <div
            className={`${styles["mark"]} ${cn(
              SliderMarkVariants({ theme: mode || theme }),
              value >= 50 ? SliderActivityMarkVariants({ theme: mode || theme }) : ""
            )}`}
            onClick={(e) => handleMarkClick(e, 50)}></div>
          <div
            className={`${styles["mark"]} ${cn(
              SliderMarkVariants({ theme: mode || theme }),
              value >= 75 ? SliderActivityMarkVariants({ theme: mode || theme }) : ""
            )}`}
            onClick={(e) => handleMarkClick(e, 75)}></div>
          <div
            className={`${styles["mark"]} ${cn(
              SliderMarkVariants({ theme: mode || theme }),
              value >= 100 ? SliderActivityMarkVariants({ theme: mode || theme }) : ""
            )}`}
            onClick={(e) => handleMarkClick(e, 100)}>
            <span
              className={`${styles["mark-label"]} ${cn(
                MarkLabelVariants({ theme: mode || theme })
              )}`}>
              100%
            </span>
          </div>
        </div>
        <div
          id={id ? `${id}-thumb-container` : ""}
          className={styles["thumb-container"]}
          style={{
            left: `${value}%`
          }}>
          <div
            className={`${styles["tooltip"]} ${cn(
              SliderTooltipVariants({ theme: mode || theme })
            )}`}>
            {value}%
          </div>
          <div
            id={id ? `${id}-thumb` : ""}
            className={`${styles["thumb"]} ${cn(SliderThumbVariants({ theme: mode || theme }))}`}
            onMouseDown={handleMouseDown}></div>
        </div>
      </div>
      <input type="hidden" value={value} ref={ref} />
    </div>
  );
});
