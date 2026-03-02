import { cva } from "class-variance-authority";

const itemStyles = cva("bu-min-w-[32px] bu-cursor-pointer", {
  variants: {
    size: {
      small: "bu-text-[14px] ltr:bu-mr-[16px] rtl:bu-ml-[16px]",
      medium: "bu-text-[14px] ltr:bu-mr-[16px] rtl:bu-ml-[16px]",
      large: "bu-text-[16px] ltr:bu-mr-[16px] rtl:bu-ml-[16px]",
      max: "bu-text-[20px] ltr:bu-mr-[24px] rtl:bu-ml-[24px]"
    }
  }
});

const itemActStyles = cva("after:bu-mt-[8px] after:bu-block after:bu-h-[2px] after:bu-w-[32px]");

const smallActStyles = cva("", {
  variants: {
    theme: {
      light: "bu-text-light-primary",
      dark: "bu-text-dark-primary"
    }
  }
});

const defaultActStyles = cva("", {
  variants: {
    theme: {
      light: "bu-text-light-label after:bu-bg-light-primary",
      dark: "bu-text-dark-label  after:bu-bg-dark-primary"
    }
  }
});

const noActStyles = cva("", {
  variants: {
    theme: {
      light: "bu-text-light-label-40",
      dark: "bu-text-dark-label-40"
    }
  }
});

const noSmallActStyles = cva("", {
  variants: {
    theme: {
      light: "bu-text-light-label-40",
      dark: "bu-text-dark-label-40"
    }
  }
});

const borderSyles = cva("bu-border-b-[1px] bu-px-[16px]", {
  variants: {
    theme: {
      light: "bu-border-light-line-primary",
      dark: "bu-border-dark-line-primary"
    }
  }
});

export {
  itemStyles,
  itemActStyles,
  defaultActStyles,
  smallActStyles,
  noActStyles,
  noSmallActStyles,
  borderSyles
};
