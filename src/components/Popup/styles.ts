import { cva } from "class-variance-authority";

export const contentStyles = cva("", {
  variants: {
    show: {
      true: "bu-opacity-1 bu-z-[1]",
      false: "bu-z-[1] bu-opacity-0"
    }
  }
});
