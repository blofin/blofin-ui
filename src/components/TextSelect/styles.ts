import { cva } from "class-variance-authority";
import { BUITheme } from "../../types/component";

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

const baseIconStyles = "bu-mr-[8px] bu-h-[16px] bu-w-[16px]";

const iconStyles = cva("", {
  variants: {
    theme: {
      light: "bu-text-dark-background",
      dark: "bu-text-light-background"
    }
  }
});

const disabledIconStyles = cva("", {
  variants: {
    theme: {
      light: "bu-text-light-label-20",
      dark: "bu-text-dark-label-20"
    }
  }
});

const iconStylesVariants = ({
  theme,
  disabled = false
}: {
  theme: BUITheme;
  disabled?: boolean;
}) => {
  const styles = disabled ? disabledIconStyles({ theme }) : iconStyles({ theme });
  return `${baseIconStyles} ${styles}`;
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

const disabledStyles = cva("", {
  variants: {
    theme: {
      light: "bu-text-light-label-20",
      dark: "bu-text-dark-label-20"
    }
  }
});

export {
  bgStyles,
  itemStyles,
  iconStyles,
  disabledStyles,
  activeStyles,
  searchStyles,
  searchIconStyles,
  iconStylesVariants
};
