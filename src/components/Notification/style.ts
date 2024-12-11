import { cva } from "class-variance-authority";
import { BUIComponentType, BUITheme } from "../../types/component";

const bgStyles = cva("", {
  variants: {
    theme: {
      light: "bu-border-light-line-primary bu-bg-light-background",
      dark: "bu-border-dark-line-primary bu-bg-dark-background"
    }
  }
});

const textStyles = cva(
  "bu-w-[296px] bu-break-words bu-text-[14px] bu-font-normal bu-leading-[20px]",
  {
    variants: {
      theme: {
        light: "bu-text-light-label",
        dark: "bu-text-dark-label"
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
      danger: "bu-text-light-danger"
    },
    dark: {
      info: "bu-text-dark-primary",
      warning: "bu-text-dark-warning",
      success: "bu-text-dark-success",
      danger: "bu-text-dark-danger"
    }
  };

  return cva("bu-w-[24px bu-mr-[16px] bu-h-[24px]", {
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
      dark: "bu-text-dark-label",
      light: "bu-text-light-label-40"
    }
  }
});

export { iconstyles, bgStyles, textStyles, closeIconStyles, textbg };
