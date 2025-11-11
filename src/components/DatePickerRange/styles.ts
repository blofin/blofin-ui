import { cva } from "class-variance-authority";

export const ArrowLine = cva("", {
  variants: {
    theme: {
      light: "bu-text-light-label-60",
      dark: "bu-text-dark-label-60"
    }
  },
});

export const TextDescribe = cva("", {
  variants: {
    theme: {
      light: "!bu-text-light-label-40",
      dark: "!bu-text-dark-label-40"
    }
  },
});

export const DatePickerBg = cva("", {
  variants: {
    theme: {
      light: "bu-bg-light-background bu-border-light-line-secondary hover:bu-bg-light-fill-secondary",
      dark: "bu-bg-dark-background bu-border-dark-line-secondary hover:bu-bg-dark-fill-secondary"
    }
  }
});