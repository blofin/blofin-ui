import { cva } from "class-variance-authority";

export const contentStyles = cva("bu-z-[-1]", {
  variants: {
    show: {
      true: "bu-opacity-1",
      false: "bu-opacity-0"
    },
    isToped: {
      true: "bu-top-[30px]",
      false: "bu-bottom-[30px]"
    }
  }
});
