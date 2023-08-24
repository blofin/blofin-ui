import { cva } from "class-variance-authority";

const labelStyles = cva("", {
  variants: {
    theme: {
      light: "bu-text-light-label-60",
      dark: "bu-text-dark-label-60"
    }
  }
});

const menuStyles = cva(
  "bu-absolute bu-left-0 bu-mt-2 bu-w-[300px] bu-origin-top-left bu-rounded bu-shadow-lg bu-outline-none",
  {
    variants: {
      theme: {
        light: "bu-bg-light-background",
        dark: "bu-bg-dark-background"
      }
    }
  }
);

export { labelStyles, menuStyles };
