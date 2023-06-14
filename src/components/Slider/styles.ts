import { cva } from "class-variance-authority";

const SliderVariants = cva("", {
  variants: {
    theme: {
      light: [
        "bg-light-primary-14",
        "hover:bg-light-hover-primary-10",
        "text-light-primary",
      ],
      dark: [
        "bg-dark-primary-14",
        "hover:bg-dark-hover-primary-10",
        "text-dark-primary",
      ],
    },
  },
});

export { SliderVariants };
