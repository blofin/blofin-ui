import { cva } from "class-variance-authority";
import { BUITheme } from "../..";

const CheckboxCheckedStyles = cva("", {
  variants: {
    theme: {
      light: ["!bu-text-black"],
      dark: ["!bu-text-white"]
    }
  }
});

const CheckMarkCheckedStyles = cva("", {
  variants: {
    theme: {
      light: ["!bu-border-light-primary !bu-bg-light-primary after:bu-border-light-background"],
      dark: ["!bu-border-dark-primary !bu-bg-dark-primary after:bu-border-dark-background"]
    }
  }
});

const CheckMarkVariants = ({ theme, checked }: { theme: BUITheme; checked: boolean }) => {
  return cva(
    "bu-flex bu-h-3 bu-w-3 bu-items-center bu-justify-center bu-border bu-bg-transparent",
    {
      variants: {
        theme: {
          light: ["!bu-border-light-label-60"],
          dark: ["!bu-border-dark-label-60"]
        },
        checked: {
          true: CheckMarkCheckedStyles({ theme })
        }
      }
    }
  )({ theme, checked });
};

const CheckboxLabelVariants = ({ theme, checked }: { theme: BUITheme; checked: boolean }) => {
  return cva("bu-select-none bu-text-sm", {
    variants: {
      theme: {
        light: ["bu-text-light-label-60"],
        dark: ["bu-text-dark-label-60"]
      },
      checked: {
        true: CheckboxCheckedStyles({ theme })
      }
    }
  })({ theme, checked });
};

export { CheckMarkVariants, CheckboxLabelVariants };
