import { cva } from "class-variance-authority";
import { BUITheme } from "../../types/component";

const labelStyles = cva("", {
  variants: {
    theme: {
      light: "bu-text-light-label-60",
      dark: "bu-text-dark-label-60"
    }
  }
});

const menuStyles = cva("", {
  variants: {
    theme: {
      light: "bu-bg-light-fill-secondary",
      dark: "bu-bg-dark-fill-secondary"
    }
  }
});

const activeItemStyles = cva("", {
  variants: {
    theme: {
      light: "bu-text-light-primary",
      dark: "bu-text-dark-primary"
    }
  }
});

const menuItemStyles = ({ theme, active }: { theme: BUITheme; active: boolean }) => {
  return cva(
    "bu-tracking-[-0.2px bu-w-full bu-cursor-pointer bu-p-[8px] bu-text-[12px] bu-leading-[18px]",
    {
      variants: {
        theme: {
          light: "bu-bg-light-fill-secondary hover:bu-bg-light-hover-fill-secondary",
          dark: "bu-bg-dark-fill-secondary bu-text-dark-label hover:bu-bg-dark-hover-fill-secondary"
        },
        active: {
          true: activeItemStyles({ theme })
        }
      }
    }
  )({ theme, active });
};

export { labelStyles, menuItemStyles, menuStyles };
