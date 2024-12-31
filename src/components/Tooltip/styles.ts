import { cva } from "class-variance-authority";

const bgStyles = cva("bu-text-white", {
  variants: {
    theme: {
      light: "bu-bg-light-hover-fill-tertiary",
      dark: "bu-bg-dark-hover-fill-tertiary"
    }
  }
});

const arrowPositionStyles = cva("bu-absolute bu-h-[8px] bu-w-[8px]", {
  variants: {
    placement: {
      top: "bu-bottom-[-7px] bu-left-[50%] bu-translate-x-[-50%]",
      topLeft: "bu-bottom-[-8px] bu-left-[16px]",
      topRight: "bu-bottom-[-7px] bu-right-[16px]",
      bottom: "bu-left-[50%] bu-top-[-7.5px] bu-translate-x-[-50%] bu-rotate-[180deg]",
      bottomLeft: "bu-left-[16px] bu-top-[-7.5px] bu-rotate-[180deg]",
      bottomRight: "bu-right-[16px] bu-top-[-7.5px] bu-rotate-[180deg]"
    }
  }
});

const popperStyles = cva("bu-transition-opacity bu-delay-200", {
  variants: {
    show: {
      true: "bu-opacity-1 bu-visible bu-z-[10000]",
      false: "bu-invisible bu-opacity-0 bu-z-[-100]"
    }
  }
});

export { bgStyles, arrowPositionStyles, popperStyles };
