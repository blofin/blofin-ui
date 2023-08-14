import { cva } from "class-variance-authority";

const bgStyles = cva("bu-text-white", {
  variants: {
    theme: {
      light: "bu-bg-light-fill-tertiary",
      dark: "bu-bg-dark-fill-tertiary"
    }
  }
});

const arrowPositionStyles=cva('bu-absolute bu-w-[8px] bu-h-[8px]',{
  variants: {
    placement: {
      top: "bu-left-[50%] bu-translate-x-[-50%] bu-bottom-[-7px]",
      topLeft: "bu-left-[16px] bu-bottom-[-7px]",
      topRight:"bu-right-[16px] bu-bottom-[-7px]",
      bottom:"bu-left-[50%] bu-translate-x-[-50%] bu-top-[-7.5px] bu-rotate-[180deg]",
      bottomLeft:"bu-left-[16px] bu-top-[-7.5px] bu-rotate-[180deg]",
      bottomRight:"bu-right-[16px] bu-top-[-7.5px] bu-rotate-[180deg]",
    }
  }
})

export { bgStyles,arrowPositionStyles };
