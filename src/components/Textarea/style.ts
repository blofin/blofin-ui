import { cva } from "class-variance-authority";

const borderStyles = cva("bu-rounded-[4px] bu-border-[1px] bu-p-[8px]", {
  variants: {
    theme: {
      light: [
        "bu-border-light-label-20 bu-bg-light-background focus-within:bu-border-light-primary hover:bu-border-light-primary"
      ],
      dark: [
        "bu-border-dark-label-60 bu-bg-dark-background focus-within:bu-border-dark-primary hover:bu-border-dark-primary"
      ]
    }
  }
});

const errorBorderStyles = cva("bu-rounded-[4px] bu-border-[1px] bu-p-[8px]", {
  variants: {
    theme: {
      light: [
        "bu-border-light-danger bu-bg-light-background focus-within:bu-border-light-danger hover:bu-border-light-danger"
      ],
      dark: [
        "bu-border-dark-danger bu-bg-dark-background focus-within:bu-border-dark-danger hover:bu-border-dark-danger"
      ]
    }
  }
});

const textAreaStyles = cva(
  "bu-h-[80px] bu-w-full bu-resize-none bu-rounded-[4px] bu-text-[12px] bu-leading-[18px] bu-shadow-none bu-outline-none",
  {
    variants: {
      theme: {
        light: ["bu-bg-light-background bu-text-light-label"],
        dark: ["bu-bg-dark-background bu-text-dark-label"]
      }
    }
  }
);

const HelperTextVariants = cva("", {
  variants: {
    theme: {
      light: ["bu-text-light-danger"],
      dark: ["bu-text-dark-danger"]
    }
  }
});

export { textAreaStyles, borderStyles, HelperTextVariants, errorBorderStyles };
