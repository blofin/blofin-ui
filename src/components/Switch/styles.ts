import { cva } from "class-variance-authority";

export const switchSize = cva(
  "bu-flex bu-cursor-pointer bu-items-center bu-p-[2px]",
  {
    variants: {
      size: {
        small: `bu-h-[18px] bu-w-[30px]`,
        medium: `bu-h-[24px] bu-w-[40px]`
      }
    }
  }
);

export const thumbSize = cva("bu-rounded-full bu-bg-light-background", {
  variants: {
    size: {
      small: `bu-h-[14px] bu-w-[14px]`,
      medium: `bu-h-[20px] bu-w-[20px]`
    }
  }
});

export const moveSize = cva("", {
  variants: {
    size: {
      small: `bu-translate-x-[10px]`,
      medium: `bu-translate-x-[16px]`
    }
  }
});


export const bgStyle=cva("", {
  variants: {
    theme: {
      light: `bu-bg-light-fill-secondary`,
      dark: `bu-bg-dark-fill-tertiary`
    }
  }
});