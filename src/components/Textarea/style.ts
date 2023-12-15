import { cva } from "class-variance-authority";

const borderStyles = cva("bu-rounded-[4px] bu-border-[1px] bu-p-[8px]", {
  variants: {
    theme: {
      light: [
        "bu-border-light-label-20 bu-bg-light-background focus-within:bu-border-light-primary hover:bu-border-light-primary"
      ],
      dark: [
        "bu-border-dark-label-60 bu-bg-dark-background focus-within:bu-border-dark-primary hover:bu-border-dark-primary"
      ]
    }
  }
});

const textAreaStyles = cva(
  "bu-h-[80px] bu-w-full bu-resize-none bu-rounded-[4px] bu-text-[12px] bu-leading-[18px] bu-shadow-none bu-outline-none",
  {
    variants: {
      theme: {
        light: ["bu-text-light-label-60 bu-bg-light-background"],
        dark: ["bu-text-dark-label-60 bu-bg-dark-background"]
      }
    }
  }
);

export { textAreaStyles, borderStyles };
