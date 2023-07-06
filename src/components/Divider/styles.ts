import { cva } from "class-variance-authority";

const DividerVariants = cva("", {
  variants: {
    theme: {
      light: "bu-my-1 bu-h-px bu-border-0 bu-bg-light-line-primary",
      dark: "bu-my-1 bu-h-px bu-border-0 bu-bg-dark-line-primary"
    }
  }
});

export { DividerVariants };
