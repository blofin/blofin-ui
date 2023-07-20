import { cva } from "class-variance-authority";
import { BUIComponentType, BUITheme } from "../../types/component";

const menuItemStyles = cva(
  "bu-p-[8px] bu-tracking-[-0.2px bu-w-full bu-text-[12px] bu-leading-[18px] bu-cursor-pointer",
  {
    variants: {
      theme: {
        light: "bu-bg-light-backgroun hover:bu-bg-light-fill-secondary hover:bu-text-light-label",
        dark: "bu-bg-dark-backgroun bu-text-dark-label hover:bu-bg-dark-fill-secondary"
      }
    }
  }
);

const labelStyles = cva("", {
  variants: {
    theme: {
      light: "bu-text-light-label-60",
      dark: "bu-text-dark-label-60"
    }
  }
});

export { menuItemStyles,labelStyles };
