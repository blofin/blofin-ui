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
      light: "bu-border-light-line-secondary bu-bg-light-background",
      dark: "bu-border-dark-line-primary bu-bg-dark-background"
    }
  }
});

const activeItemStyles = cva("", {
  variants: {
    theme: {
      light: "bu-bg-light-fill-secondary bu-text-light-primary",
      dark: "bu-bg-dark-fill-secondary bu-text-dark-primary"
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
          false: ""
        }
      }
    }
  )({ theme, active });
};

const searchStyles = cva("bu-sticky bu-top-0 bu-mb-[8px] bu-px-[8px] bu-pt-[8px]", {
  variants: {
    theme: {
      light: "bu-bg-light-background",
      dark: "bu-bg-dark-background"
    }
  }
});

const searchIconStyles = cva("bu-mx-[8px]", {
  variants: {
    theme: {
      light: "bu-text-light-label-40",
      dark: "bu-text-dark-label-40"
    }
  }
});

export { labelStyles, menuItemStyles, menuStyles, outlinedStyles, searchStyles, searchIconStyles };
