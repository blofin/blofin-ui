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

const outlinedStyles = cva("", {
  variants: {
    theme: {
      light: "bu-text-light-label-60",
      dark: "bu-text-white"
    }
  }
});

const menuStyles = cva("bu-border-[1px]", {
  variants: {
    theme: {
      light: "bu-bg-light-background bu-border-light-line-secondary",
      dark: "bu-bg-dark-background bu-border-dark-line-primary"
    }
  }
});

const activeItemStyles = cva("", {
  variants: {
    theme: {
      light: "bu-text-light-primary bu-bg-light-fill-secondary",
      dark: "bu-text-dark-primary bu-bg-dark-fill-secondary"
    }
  }
});

const menuItemStyles = ({ theme, active }: { theme: BUITheme; active: boolean }) => {
  return cva(
    "bu-tracking-[-0.2px bu-w-full bu-cursor-pointer bu-p-[8px] bu-text-[12px] bu-leading-[18px]",
    {
      variants: {
        theme: {
          light: "bu-bg-light-background hover:bu-bg-light-hover-fill-secondary",
          dark: "bu-bg-dark-background bu-text-dark-label hover:bu-bg-dark-hover-fill-secondary"
        },
        active: {
          true: activeItemStyles({ theme }),
          false:''
        }
      }
    }
  )({ theme, active });
};

export { labelStyles, menuItemStyles, menuStyles,outlinedStyles };
