import { cva } from "class-variance-authority";
import { ToastType } from "./types";
import { BUITheme } from "../..";

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

const iconstyles = (type: ToastType, theme: BUITheme) => {
  const colors = {
    light: {
      info: "text-light-primary",
      warning: "text-light-warning",
      success: "text-light-success",
      danger: "text-light-danger"
    },
    dark: {
      info: "text-dark-primary",
      warning: "text-dark-warning",
      success: "text-dark-success",
      danger: "text-dark-danger"
    }
  };

  return cva("mr-[16px] h-[24px] w-[24px", {
    variants: {
      theme: {
        light: colors[theme][type],
        dark: colors[theme][type]
      }
    }
  })({theme});
};

export { toastVariants, bgStyles, textStyles, iconstyles };
