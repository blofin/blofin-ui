import { cva } from "class-variance-authority";
import { BUITheme } from "../..";

const RadioButtonCheckedStyles = cva("", {
  variants: {
    theme: {
      light: ["!bu-text-light-label"],
      dark: ["!bu-text-dark-label"]
    }
  }
});

const RadioButtonLabelVariants = ({ theme, checked }: { theme: BUITheme; checked: boolean }) => {
  return cva("bu-cursor-pointer bu-select-none bu-text-sm", {
    variants: {
      theme: {
        light: ["bu-text-light-label-60 group-hover:!bu-text-light-label"],
        dark: ["bu-text-dark-label-60 group-hover:!bu-text-dark-label"]
      },
      checked: {
        true: RadioButtonCheckedStyles({ theme })
      }
    }
  })({ theme, checked });
};

const RadioButtonInputVariants = ({ theme }: { theme: BUITheme }) => {
  return cva(
    "bu-relative bu-h-[12px] bu-w-[12px] bu-cursor-pointer bu-appearance-none bu-rounded-full bu-border-[1px] checked:after:bu-absolute checked:after:bu-left-1/2 checked:after:bu-top-1/2 checked:after:bu-block checked:after:bu-h-[6px] checked:after:bu-w-[6px] checked:after:bu--translate-x-1/2 checked:after:bu--translate-y-1/2 checked:after:bu-transform checked:after:bu-rounded-full",
    {
      variants: {
        theme: {
          light: [
            "!bu-border-light-label-60 checked:!bu-border-light-primary checked:after:!bu-bg-light-primary group-hover:!bu-border-light-primary"
          ],
          dark: [
            "!bu-border-dark-label-60 checked:!bu-border-dark-primary checked:after:!bu-bg-dark-primary group-hover:!bu-border-dark-primary"
          ]
        }
      }
    }
  )({ theme });
};

export { RadioButtonInputVariants, RadioButtonLabelVariants };
