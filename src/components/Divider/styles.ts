import { cva } from "class-variance-authority";

const DividerVariants = cva("", {
  variants: {
    theme: {
      light: "bu-my-1 bu-h-px bu-border-0 bu-bg-light-line-primary",
      dark: "bu-my-1 bu-h-px bu-border-0 bu-bg-dark-line-primary"
    }
  }
});

const VerticalDividerVariants = cva("bu-h-full bu-w-px bu-border bu-border-r", {
  variants: {
    theme: {
      light: "bu-border-light-label-20 bu-bg-light-label-20",
      dark: "bu-bg-dark-light-label-20 bu-border-dark-label-20"
    }
  }
});

export { DividerVariants, VerticalDividerVariants };
