import { cva } from "class-variance-authority";

export const dialogVariants = cva(
  "absolute left-[50%] top-[50%] flex translate-x-[-50%] translate-y-[-50%] flex-col justify-between rounded-[10px] px-[24px] pt-[24px] pb-[32px]",
  {
    variants: {
      size: {
        large: `max-[600px]:w-[80%] min-[600px]:min-h-[234px] min-[600px]:w-[800px]`,
        medium: `max-[600px]:w-[80%] min-[600px]:min-h-[226px] min-[600px]:w-[600px]`,
        small: `max-[600px]:w-[80%] min-[600px]:min-h-[210px] min-[600px]:w-[520px]`
      },
      theme: {
        dark: "bg-dark-background",
        light: "bg-light-background"
      }
    }
  }
);

export const textStyles = cva("", {
  variants: {
    theme: {
      dark: "text-dark-label",
      light: "text-light-label"
    }
  }
});

export const iconStyles = cva("", {
  variants: {
    theme: {
      dark: "text-dark-label",
      light: "text-light-label-40"
    }
  }
});

export const footerStyles=cva("flex", {
  variants: {
    footerLayout: {
      right:"justify-end",
      left: "justify-start",
      center:"justify-center"
    }
  }
});
