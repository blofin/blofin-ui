import { cva } from "class-variance-authority";

export const ArrowLine = cva("", {
  variants: {
    theme: {
      light: "bu-text-light-label",
      dark: "bu-text-dark-label"
    }
  },
});

export const DatePickerBg = cva("", {
  variants: {
    theme: {
      light: "bu-bg-light-background bu-border-light-line-secondary",
      dark: "bu-bg-dark-background bu-border-dark-line-secondary"
    }
  }
});