import { cva } from "class-variance-authority";

const LabelVariants = cva("bu-mb-1", {
  variants: {
    theme: {
      light: ["bu-text-light-label-60"],
      dark: ["bu-text-dark-label-60"]
    }
  }
});

const InputBgVariants = cva("bu-rounded", {
  variants: {
    theme: {
      light: ["bu-bg-light-fill-secondary bu-text-light-label"],
      dark: ["bu-bg-dark-fill-secondary bu-text-dark-label"]
    }
  }
});

export { InputBgVariants, LabelVariants };
