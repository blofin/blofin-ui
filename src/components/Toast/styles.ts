import { cva } from "class-variance-authority";
import { BUITheme } from "../../types/component";

const toastVariants = cva("flex rounded-[6px] px-[18px] py-[8px] text-[16px]", {
  variants: {
    type: {
      info: "bg-light-primary-14",
      success: "bg-light-success-14",
      warning: "bg-light-warning-14",
      danger: "bg-light-danger-14"
    }
  }
});

const bgStyles = cva("", {
  variants: {
    theme: {
      light: "bg-light-background",
      dark: "bg-dark-background"
    }
  }
});

const textStyles = cva("", {
  variants: {
    theme: {
      light: "text-light-label",
      dark: "text-dark-label"
    }
  }
});


export { toastVariants, bgStyles, textStyles };
