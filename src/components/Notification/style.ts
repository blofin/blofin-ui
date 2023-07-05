import { cva } from "class-variance-authority";
import { BUIComponentType, BUITheme } from "../../types/component";

const bgStyles = cva("", {
  variants: {
    theme: {
      light: "bg-light-background",
      dark: "bg-dark-background"
    }
  }
});

const textStyles = cva("w-[296px] break-words text-[14px] font-normal leading-[20px]", {
  variants: {
    theme: {
      light: "text-light-label",
      dark: "text-dark-label"
    }
  }
});

const textbg = cva("", {
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

  return cva("w-[24px mr-[16px] h-[24px]", {
    variants: {
      theme: {
        light: colors[theme][type],
        dark: colors[theme][type]
      }
    }
  })({ theme });
};

const closeIconStyles = cva("shrink-0 cursor-pointer", {
  variants: {
    theme: {
      dark: "text-dark-label",
      light: "text-light-label-40"
    }
  }
});

export { iconstyles, bgStyles, textStyles, closeIconStyles, textbg };
