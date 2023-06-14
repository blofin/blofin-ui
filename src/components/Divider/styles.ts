import { cva } from "class-variance-authority";

const DividerVariants = cva("", {
  variants: {
    theme: {
      light: "h-px my-1 border-0 bg-light-line-primary",
      dark: "h-px my-1 border-0 bg-dark-line-primary",
    },
  },
});

export { DividerVariants };
