import { cva } from "class-variance-authority";

const bgStyles = cva("bu-border-[1px] bu-border-solid", {
  variants: {
    theme: {
      light: "bu-border-light-line-secondary bu-bg-light-background",
      dark: "bu-border-dark-line-secondary bu-bg-dark-background"
    }
  }
});

const itemStyles = cva("", {
  variants: {
    theme: {
      light: "bu-text-light-label hover:bu-bg-light-hover-fill-primary",
      dark: "bu-text-dark-label hover:bu-bg-dark-hover-fill-primary"
    }
  }
});

const activeStyles = cva("", {
  variants: {
    theme: {
      light: "bu-bg-light-hover-fill-primary",
      dark: "bu-bg-dark-hover-fill-primary"
    }
  }
});

const iconStyles = cva("bu-mr-[8px] bu-h-[16px] bu-w-[16px]", {
  variants: {
    theme: {
      light: "bu-text-dark-background",
      dark: "bu-text-light-background"
    }
  }
});

const disabledStyles = cva("", {
  variants: {
    theme: {
      light: "bu-text-light-label-20",
      dark: "bu-text-dark-label-20"
    }
  }
});

export { bgStyles, itemStyles, iconStyles, disabledStyles, activeStyles };
