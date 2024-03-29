import { cva } from "class-variance-authority";

const DividerVariants = cva("", {
  variants: {
    theme: {
      light: "bu-my-1 bu-h-px bu-border-0 bu-bg-light-line-primary",
      dark: "bu-my-1 bu-h-px bu-border-0 bu-bg-dark-line-primary"
    }
  }
});

const VerticalDividerVariants = cva("bu-h-full bu-w-px", {
  variants: {
    theme: {
      light: "bu-bg-light-label-20",
      dark: "bu-bg-dark-label-20"
    }
  }
});

export { DividerVariants, VerticalDividerVariants };
