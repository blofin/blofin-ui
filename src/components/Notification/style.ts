import { cva } from "class-variance-authority";
import { BUIComponentType, BUITheme } from "../../types/component";

const bgStyles = cva("", {
  variants: {
    theme: {
      light:
        "bu-border bu-border-light-line-secondary bu-bg-light-background bu-shadow-[0px_2px_8px_0px_rgba(48,53,71,0.04)]",
      dark: "bu-bg-dark-fill-tertiary"
    }
  }
});

const textStyles = cva(
  "bu-w-[296px] bu-break-words bu-text-[14px] bu-font-normal bu-leading-[20px]",
  {
    variants: {
      theme: {
        light: "bu-text-light-label-60",
        dark: "bu-text-dark-label-60"
      }
    }
  }
);

const textbg = cva("", {
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
      danger: "bu-text-light-danger",
      loading: "bu-text-light-label bu-animate-spin"
    },
    dark: {
      info: "bu-text-dark-primary",
      warning: "bu-text-dark-warning",
      success: "bu-text-dark-success",
      danger: "bu-text-dark-danger",
      loading: "bu-text-dark-label bu-animate-spin"
    }
  };

  return cva("ltr:bu-mr-[8px] rtl:bu-ml-[8px] bu-h-[24px] bu-w-[24px]", {
    variants: {
      theme: {
        light: colors[theme][type],
        dark: colors[theme][type]
      }
    }
  })({ theme });
};

const closeIconStyles = cva("bu-shrink-0 bu-cursor-pointer", {
  variants: {
    theme: {
      dark: "bu-text-dark-label-40",
      light: "bu-text-light-label-40"
    }
  }
});

export { iconstyles, bgStyles, textStyles, closeIconStyles, textbg };
