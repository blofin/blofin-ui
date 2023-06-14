import { cva } from "class-variance-authority";

const DividerVariants = cva("", {
  variants: {
    theme: {
      light: "my-1 h-px border-0 bg-light-line-primary",
      dark: "my-1 h-px border-0 bg-dark-line-primary",
    },
  },
});

export { DividerVariants };
