import { cva } from "class-variance-authority";
import { BUITheme } from "../..";
import { BUIComponentType } from "../../types/component";

const toastVariants = cva(
  "bu-flex bu-rounded-[6px] bu-px-[18px] bu-py-[8px] bu-text-[16px] max-[600px]:bu-flex-col max-[600px]:bu-items-center max-[600px]:bu-px-[9px] max-[600px]:bu-py-[4px]  max-[600px]:bu-text-[12px]",
  {
    variants: {
      type: {
        info: "bu-bg-light-primary-14",
        success: "bu-bg-light-success-14",
        warning: "bu-bg-light-warning-14",
        danger: "bu-bg-light-danger-14"
      }
    }
  }
);

const bgStyles = cva("", {
  variants: {
    theme: {
      light: "bu-bg-light-background",
      dark: "bu-bg-dark-background"
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

const iconstyles = (type: BUIComponentType, theme: BUITheme) => {
  const colors = {
    light: {
      info: "bu-text-light-primary",
      warning: "bu-text-light-warning",
      success: "bu-text-light-success",
      danger: "bu-text-light-danger"
    },
    dark: {
      info: "bu-text-dark-primary",
      warning: "bu-text-dark-warning",
      success: "bu-text-dark-success",
      danger: "bu-text-dark-danger"
    }
  };

  return cva("bu-w-[24px bu-mr-[16px] bu-h-[24px] bu-shrink-0 max-[600px]:bu-mr-[0] max-[600px]:bu-mb-[8px]", {
    variants: {
      theme: {
        light: colors[theme][type],
        dark: colors[theme][type]
      }
    }
  })({ theme });
};

export { toastVariants, bgStyles, textStyles, iconstyles };
