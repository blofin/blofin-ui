import { cva } from "class-variance-authority";
import { BUITheme } from "../..";
import { BUIComponentType } from "../../types/component";

const toastVariants = cva(
  "bu-flex bu-rounded-[6px] bu-px-[16px] bu-py-[12px] bu-text-[16px] max-[634px]:bu-flex-col max-[634px]:bu-items-center max-[634px]:bu-px-[9px] max-[634px]:bu-py-[4px]  max-[634px]:bu-text-[12px]",
  {
    variants: {
      theme: {
        light: "bu-border-[1px] bu-border-light-line-secondary bu-bg-light-background",
        dark: "bu-bg-dark-fill-tertiary"
      }
    }
  }
);

const bgStyles = cva("", {
  variants: {
    theme: {
      light: "bu-bg-light-background",
      dark: "bu-bg-dark-fill-tertiary"
    }
  }
});

const textStyles = cva("bu-leading-[24px]", {
  variants: {
    theme: {
      light: "bu-text-light-label",
      dark: "bu-text-dark-label"
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

  return cva(
    "bu-w-[24px bu-mr-[8px] bu-h-[24px] bu-shrink-0 max-[634px]:bu-mb-[8px] max-[634px]:bu-mr-[0]",
    {
      variants: {
        theme: {
          light: colors[theme][type],
          dark: colors[theme][type]
        }
      }
    }
  )({ theme });
};

export { toastVariants, bgStyles, textStyles, iconstyles };
