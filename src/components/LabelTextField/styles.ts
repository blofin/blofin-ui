import { cva } from "class-variance-authority";
import { BUITheme } from "../../types/component";

const LabelVariants = cva("bu-mb-1", {
  variants: {
    theme: {
      light: ["bu-text-light-label-60"],
      dark: ["bu-text-dark-label-60"]
    }
  }
});

const InputErrorStyles = cva("", {
  variants: {
    theme: {
      light: ["!bu-border-light-danger"],
      dark: ["!bu-border-dark-danger"]
    }
  }
});

const InputBgVariants = ({ theme, error = false }: { theme: BUITheme; error?: boolean }) => {
  return cva("bu-rounded bu-border bu-border-transparent", {
    variants: {
      theme: {
        light: [
          "bu-bg-light-fill-secondary bu-text-light-label focus-within:bu-border-light-primary"
        ],
        dark: ["bu-bg-dark-fill-secondary bu-text-dark-label focus-within:bu-border-dark-primary"]
      },
      error: {
        true: InputErrorStyles({ theme })
      }
    }
  })({ theme, error });
};

export { InputBgVariants, LabelVariants };
