import { cva } from "class-variance-authority";

export const switchSize = cva("bu-flex bu-cursor-pointer bu-items-center bu-p-[2px]", {
  variants: {
    size: {
      tiny: `bu-h-[16px] bu-w-[28px]`,
      small: `bu-h-[18px] bu-w-[32px]`,
      medium: `bu-h-[24px] bu-w-[40px]`
    }
  }
});

export const thumbSize = cva("bu-rounded-full bu-bg-light-background", {
  variants: {
    size: {
      tiny: `bu-h-[12px] bu-w-[12px]`,
      small: `bu-h-[14px] bu-w-[14px]`,
      medium: `bu-h-[20px] bu-w-[20px]`
    }
  }
});

export const moveSize = cva("bu-transition-transform", {
  variants: {
    size: {
      // 默认 LTR 行为 + RTL 覆盖（即使没有 dir 属性也能正常工作）
      tiny: `bu-translate-x-[12px] rtl:-bu-translate-x-[12px]`,
      small: `bu-translate-x-[14px] rtl:-bu-translate-x-[14px]`,
      medium: `bu-translate-x-[16px] rtl:-bu-translate-x-[16px]`
    }
  }
});

export const bgStyle = cva("", {
  variants: {
    theme: {
      light: `bu-bg-light-fill-secondary`,
      dark: `bu-bg-dark-fill-tertiary`
    }
  }
});
