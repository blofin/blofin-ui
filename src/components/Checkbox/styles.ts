import { cva } from "class-variance-authority";

const CheckboxCheckedStyles = cva("bu-select-none bu-text-sm", {
  variants: {
    theme: {
      light: ["bu-text-light-label"],
      dark: ["bu-text-dark-label"]
    }
  }
});

const CheckedMarkCheckedStyles = cva(
  "bu-flex bu-h-[12px] bu-w-[12px] bu-items-center bu-justify-center bu-border",
  {
    variants: {
      theme: {
        light: ["bu-border-dark-background bu-bg-dark-background after:bu-border-light-background"],
        dark: ["bu-border-light-background bu-bg-light-background after:bu-border-dark-background"]
      }
    }
  }
);

const UncheckedMarkCheckedStyles = cva(
  "bu-flex bu-h-[12px] bu-w-[12px] bu-items-center bu-justify-center bu-border",
  {
    variants: {
      theme: {
        light: ["bu-border-light-label-40 after:bu-border-light-background"],
        dark: ["bu-border-dark-label-40  after:bu-border-dark-background"]
      }
    }
  }
);

const CheckMarkVariants = cva(
  "bu-flex bu-h-[12px] bu-w-[12px] bu-items-center bu-justify-center bu-border bu-bg-transparent",
  {
    variants: {
      theme: {
        light: ["bu-border-light-label-40"],
        dark: ["bu-border-dark-label-40"]
      }
    }
  }
);

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

const disabledMarkStyles = cva(
  "bu-flex bu-h-[12px] bu-w-[12px] bu-items-center bu-justify-center bu-border",
  {
    variants: {
      theme: {
        light: ["bu-border-light-label-40 after:bu-border-light-label-40"],
        dark: ["bu-border-dark-label-40  after:bu-border-dark-label-40"]
      }
    }
  }
);

export {
  CheckMarkVariants,
  UncheckedboxLabelVariants,
  CheckboxDisabledLabelVariants,
  CheckedMarkCheckedStyles,
  UncheckedMarkCheckedStyles,
  CheckboxCheckedStyles,
  disabledMarkStyles
};
