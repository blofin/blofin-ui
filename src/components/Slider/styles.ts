import { cva } from "class-variance-authority";

const SliderMarkVariants = cva("", {
  variants: {
    theme: {
      light: ["bg-light-primary"],
      dark: ["bg-dark-primary"]
    }
  }
});

export { SliderMarkVariants };
