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

const RadioButtonInputCheckedStyles = cva("", {
  variants: {
    theme: {
      light: ["checked:after:!bu-bg-light-primary"],
      dark: ["checked:after:!bu-bg-dark-primary"]
    }
  }
});

const RadioButtonInputVariants = ({ theme, checked }: { theme: BUITheme; checked: boolean }) => {
  return cva(
    "bu-relative bu-h-4 bu-w-4 bu-appearance-none bu-rounded-full bu-border checked:after:bu-absolute checked:after:bu-left-1/2 checked:after:bu-top-1/2 checked:after:bu-block checked:after:bu-h-2.5 checked:after:bu-w-2.5 checked:after:bu--translate-x-1/2 checked:after:bu--translate-y-1/2 checked:after:bu-transform checked:after:bu-rounded-full",
    {
      variants: {
        theme: {
          light: ["!bu-border-light-label-60"],
          dark: ["!bu-border-dark-label-60"]
        },
        checked: {
          true: RadioButtonInputCheckedStyles({ theme })
        }
      }
    }
  )({ theme, checked });
};

export { RadioButtonInputVariants, RadioButtonLabelVariants };
