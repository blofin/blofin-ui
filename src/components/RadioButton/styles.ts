import { cva } from "class-variance-authority";
import { BUITheme } from "../..";

const RadioButtonCheckedStyles = cva("", {
  variants: {
    theme: {
      light: ["!bu-text-black"],
      dark: ["!bu-text-white"]
    }
  }
});

const RadioButtonLabelVariants = ({ theme, checked }: { theme: BUITheme; checked: boolean }) => {
  return cva("bu-select-none bu-text-sm", {
    variants: {
      theme: {
        light: ["bu-text-light-label-60"],
        dark: ["bu-text-dark-label-60"]
      },
      checked: {
        true: RadioButtonCheckedStyles({ theme })
      }
    }
  })({ theme, checked });
};

export { RadioButtonLabelVariants };
