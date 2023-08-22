import { cva } from "class-variance-authority";

const bgStyles = cva("", {
  variants: {
    theme: {
      light: "bu-bg-light-fill-secondary",
      dark: "bu-bg-dark-fill-secondary"
    }
  }
});

const itemStyles = cva("", {
  variants: {
    theme: {
      light:
        "bu-text-light-label hover:bu-bg-light-hover-fill-secondary hover:bu-text-light-primary",
      dark: "bu-text-dark-label hover:bu-bg-dark-hover-fill-secondary hover:bu-text-dark-primary"
    }
  }
});

const activeStyles = cva("", {
  variants: {
    theme: {
      light: " bu-bg-light-hover-fill-secondary bu-text-light-primary",
      dark: " bu-bg-dark-hover-fill-secondary bu-text-dark-primary"
    }
  }
});

const iconStyles = cva("bu-h-[16px] bu-w-[16px] bu-mr-[8px]", {
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

export { bgStyles, itemStyles, iconStyles, disabledStyles,activeStyles };
