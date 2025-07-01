import { cva } from "class-variance-authority";
import { BUITheme } from "../../types/component";
import { InputSize } from "../TextField/TextField";
import { TypesVariant } from "./MultiSelect";

const InputFilledStyles = cva("", {
  variants: {
    theme: {
      light:
        "bu-border-transparent bu-bg-light-fill-secondary focus-within:!bu-border-light-primary hover:bu-border-[1px] hover:bu-border-light-primary",
      dark: "bu-border-transparent bu-bg-dark-fill-secondary focus-within:!bu-border-dark-primary hover:bu-border-[1px] hover:bu-border-dark-primary"
    }
  }
});

const InputOutlinedStyles = cva("", {
  variants: {
    theme: {
      light: [
        "bu-border-light-line-secondary focus-within:bu-border-light-primary focus-within:!bu-bg-transparent hover:bu-border-light-primary"
      ],
      dark: [
        "bu-border-dark-line-secondary focus-within:bu-border-light-primary focus-within:!bu-bg-transparent hover:bu-border-dark-primary"
      ]
    }
  }
});

const MultiWrapperStyles = ({
  theme,
  size,
  variant
}: {
  theme?: BUITheme;
  size?: InputSize;
  variant?: TypesVariant;
}) => {
  return cva("bu-flex bu-items-center bu-justify-between bu-rounded-[8px] bu-border-[1px]", {
    variants: {
      variant: {
        filled: InputFilledStyles({ theme }),
        outlined: InputOutlinedStyles({ theme })
      },
      theme: {
        light: [],
        dark: []
      },
      size: {
        sm: ["bu-h-[32px]", "bu-px-[8px]"],
        md: ["bu-h-[40px]", "bu-px-[8px]"],
        lg: ["bu-h-[48px]", "bu-px-[12px]"]
      }
    },
    defaultVariants: {
      theme: "light",
      size: "md"
    }
  })({ theme, size, variant });
};

const ArrowWrapperStyles = cva("bu-flex bu-items-center bu-justify-center", {
  variants: {
    size: {
      sm: "bu-h-[16px] bu-w-[16px]",
      md: "bu-h-[20px] bu-w-[20px]",
      lg: "bu-h-[20px] bu-w-[20px]"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

const bgStyles = cva("bu-border-[1px] bu-border-solid", {
  variants: {
    theme: {
      light: "bu-border-light-line-secondary bu-bg-light-background",
      dark: "bu-border-dark-line-primary bu-bg-dark-background"
    }
  }
});

const placeholderStyles = cva("bu-select-none", {
  variants: {
    theme: {
      light: "bu-text-light-label-40",
      dark: "bu-text-dark-label-40"
    },
    size: {
      sm: "bu-text-[12px] bu-leading-[18px]",
      md: "bu-text-[14px] bu-leading-[20px]",
      lg: "bu-text-[16px] bu-leading-[24px]"
    }
  }
});

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

const clearSearchIconStyles = cva("bu-mx-[8px] bu-cursor-pointer", {
  variants: {
    theme: {
      light: "bu-text-light-label-40",
      dark: "bu-text-dark-label-40"
    }
  }
});

export {
  MultiWrapperStyles,
  ArrowWrapperStyles,
  bgStyles,
  placeholderStyles,
  searchStyles,
  searchIconStyles,
  clearSearchIconStyles
};
