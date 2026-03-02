import { cva } from "class-variance-authority";

export const ArrowLine = cva("", {
  variants: {
    theme: {
      light: "bu-text-light-label-60",
      dark: "bu-text-dark-label-60"
    }
  }
});

export const TextDescribe = cva("", {
  variants: {
    theme: {
      light: "!bu-text-light-label-40",
      dark: "!bu-text-dark-label-40"
    }
  }
});

export const DatePickerBg = cva("", {
  variants: {
    theme: {
      light: "bu-border-light-line-secondary bu-bg-light-background",
      dark: "bu-border-dark-line-secondary bu-bg-dark-background"
    },
    hover: {
      light: "hover:bu-bg-light-fill-secondary",
      dark: "hover:bu-bg-dark-fill-secondary"
    }
  }
});

export const BorderColor = cva("", {
  variants: {
    theme: {
      light: "bu-border-light-line-secondary",
      dark: "bu-border-dark-line-secondary"
    }
  }
});
