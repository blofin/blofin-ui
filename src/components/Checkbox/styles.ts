import { cva } from "class-variance-authority";

const CheckboxCheckedStyles = cva("bu-select-none bu-text-sm", {
  variants: {
    theme: {
      light: ["bu-text-light-label"],
      dark: ["bu-text-dark-label"]
    }
  }
});

const CheckedMarkCheckedStyles = cva("bu-flex bu-items-center bu-justify-center bu-border", {
  variants: {
    theme: {
      light: ["bu-border-light-primary bu-bg-light-primary after:bu-border-light-background"],
      dark: ["bu-border-light-background bu-bg-light-background after:bu-border-dark-background"]
    }
  }
});

const CheckedMarkCheckedSizeStyles = cva(
  "bu-h-[10px] bu-w-[10px] after:bu-border-l-0 after:bu-border-t-0",
  {
    variants: {
      size: {
        small: [
          "bu-h-[10px] bu-w-[10px] bu-rounded-[2px] after:bu-h-[6px] after:bu-w-[4px] after:bu-border-b-[1.8px] after:bu-border-r-[1.8px]"
        ],
        medium: [
          "bu-h-[18px] bu-w-[18px] bu-rounded-[3px] after:bu-h-[10px] after:bu-w-[8px] after:bu-border-b-[2px] after:bu-border-r-[2px]"
        ]
      }
    }
  }
);

const UncheckedMarkCheckedStyles = cva(
  "bu-flex bu-h-[10px] bu-w-[10px] bu-items-center bu-justify-center bu-border",
  {
    variants: {
      theme: {
        light: [
          "bu-border-light-label-40 after:bu-border-light-background hover:bu-border-light-primary"
        ],
        dark: [
          "bu-border-dark-label-40  after:bu-border-dark-background hover:bu-border-light-background"
        ]
      }
    }
  }
);

const CheckMarkVariants = cva(
  "bu-flex bu-h-[10px] bu-w-[10px] bu-items-center bu-justify-center bu-border bu-bg-transparent",
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
  "bu-flex bu-h-[10px] bu-w-[10px] bu-items-center bu-justify-center bu-border",
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
  CheckedMarkCheckedSizeStyles,
  disabledMarkStyles
};
