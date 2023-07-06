import { cva } from "class-variance-authority";

const SliderMarkVariants = cva("", {
  variants: {
    theme: {
      light: ["bu-bg-light-primary"],
      dark: ["bu-bg-dark-primary"]
    }
  }
});

export { SliderMarkVariants };
