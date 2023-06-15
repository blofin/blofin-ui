import { cva } from "class-variance-authority";
import { BUIComponentSize } from "../../types/component";

export const dialogVariants = cva(
  "absolute left-[50%] top-[50%] flex translate-x-[-50%] translate-y-[-50%] flex-col justify-between rounded-[10px] bg-white p-[30px]",
  {
    variants: {
      size: {
        large: `min-h-[290px] w-[680px]`,
        medium: `min-h-[290px] w-[520px]`,
        small: `min-h-[210px] w-[520px] px-[24px] py-[32px]`
      },
      theme: {
        dark: "bg-dark-background",
        light: "bg-light-background"
      }
    }
  }
);

export const textStyles=cva('',{
  variants: {
    theme: {
      dark: "text-dark-label",
      light: "text-light-label"
    }
  }
})
