import { cva } from "class-variance-authority";

const CheckboxCheckedStyles = cva("bu-select-none bu-text-sm", {
  variants: {
    theme: {
      light: ["bu-text-light-label"],
      dark: ["bu-text-dark-label"]
    }
  }
});

const UncheckedboxLabelVariants = cva("bu-select-none bu-text-sm", {
  variants: {
    theme: {
      light: ["bu-text-light-label"],
      dark: ["bu-text-dark-label"]
    }
  }
});

const CheckboxDisabledLabelVariants = cva("bu-select-none bu-text-sm", {
  variants: {
    theme: {
      light: ["bu-text-light-label-40"],
      dark: ["bu-text-dark-label-40"]
    }
  }
});

const CheckboxContainerSizeStyles = cva("bu-flex bu-items-center bu-justify-center", {
  variants: {
    size: {
      small: ["bu-h-[10px] bu-w-[10px]"],
      medium: ["bu-h-[18px] bu-w-[18px]"]
    }
  }
});

export {
  UncheckedboxLabelVariants,
  CheckboxDisabledLabelVariants,
  CheckboxCheckedStyles,
  CheckboxContainerSizeStyles
};
