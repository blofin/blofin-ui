import { cva } from "class-variance-authority";

export const dialogVariants = cva(
  "bu-absolute bu-left-[50%] bu-top-[50%] bu-flex bu-translate-x-[-50%] bu-translate-y-[-50%] bu-flex-col bu-justify-between bu-rounded-[10px] bu-px-[24px] bu-pt-[24px] bu-pb-[32px]",
  {
    variants: {
      size: {
        large: `max-[600px]:bu-w-[80%] min-[600px]:bu-min-h-[234px] min-[600px]:bu-w-[800px]`,
        medium: `max-[600px]:bu-w-[80%] min-[600px]:bu-min-h-[226px] min-[600px]:bu-w-[600px]`,
        small: `max-[600px]:bu-w-[80%] min-[600px]:bu-min-h-[210px] min-[600px]:bu-w-[520px]`
      },
      theme: {
        dark: "bu-bg-dark-fill-secondary",
        light: "bu-bg-light-fill-secondary"
      }
    }
  }
);

export const textStyles = cva("", {
  variants: {
    theme: {
      dark: "bu-text-dark-label",
      light: "bu-text-light-label"
    }
  }
});

export const iconStyles = cva("", {
  variants: {
    theme: {
      dark: "bu-text-dark-label",
      light: "bu-text-light-label-40"
    }
  }
});

export const footerStyles=cva("bu-flex", {
  variants: {
    footerLayout: {
      right:"bu-justify-end",
      left: "bu-justify-start",
      center:"bu-justify-center"
    }
  }
});
