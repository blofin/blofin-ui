import { cva } from "class-variance-authority";
import { BUITheme } from "../../types/component";

const bgStyles = cva("bu-border-[1px] bu-border-solid", {
  variants: {
    theme: {
      light: "bu-border-light-line-secondary bu-bg-light-background",
      dark: "bu-border-dark-line-primary bu-bg-dark-background"
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

const activeBackgroundStyles = cva("", {
  variants: {
    theme: {
      light: "bu-bg-light-hover-fill-primary",
      dark: "bu-bg-dark-hover-fill-primary"
    }
  }
});

const activeTextStyles = cva("", {
  variants: {
    theme: {
      light: "bu-text-light-primary",
      dark: "bu-text-dark-primary"
    }
  }
});

const baseIconStyles = "ltr:bu-mr-[8px] rtl:bu-ml-[8px] bu-h-[16px] bu-w-[16px]";
const baseIconStylesFill = "ltr:bu-mr-[8px] rtl:bu-ml-[8px] bu-h-[12px] bu-w-[12px]";

const iconStyles = cva("", {
  variants: {
    theme: {
      light: "bu-text-dark-background",
      dark: "bu-text-light-background"
    }
  }
});

const fillIconStyles = cva("", {
  variants: {
    theme: {
      light: "bu-text-light-label-40",
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
  disabled = false,
  variant = "line"
}: {
  theme: BUITheme;
  disabled?: boolean;
  variant?: "line" | "fill";
}) => {
  const iconStylesDefault = variant === "fill" ? fillIconStyles({ theme }) : iconStyles({ theme });
  const styles = disabled ? disabledIconStyles({ theme }) : iconStylesDefault;
  return `${variant === "fill" ? baseIconStylesFill : baseIconStyles} ${styles}`;
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
  activeTextStyles,
  activeBackgroundStyles,
  searchStyles,
  searchIconStyles,
  iconStylesVariants
};
