import { cva } from "class-variance-authority";
import { BUITheme } from "../../types/component";

export type InputVariant = "filled" | "outlined";

const LabelVariants = cva("bu-mb-1", {
  variants: {
    theme: {
      light: ["!bu-text-light-label-60"],
      dark: ["!bu-text-dark-label-60"]
    }
  }
});

const InputErrorStyles = cva("", {
  variants: {
    theme: {
      light: ["!bu-border-light-danger"],
      dark: ["!bu-border-dark-danger"]
    }
  }
});

const InputDisabledStyles = (props: { variant: InputVariant; theme: BUITheme }) => {
  return cva("", {
    variants: {
      theme: {
        light: ["!bu-text-light-label-40"],
        dark: ["!bu-text-dark-label-40"]
      },
      variant: {
        filled:
          props.theme === "dark" ? "!bu-bg-dark-fill-quaternary" : "!bu-bg-light-fill-quaternary",
        outlined:
          props.theme === "dark" ? "!bu-bg-dark-fill-secondary" : "!bu-bg-light-fill-secondary"
      }
    }
  })(props);
};

const InputFilledStyles = cva("", {
  variants: {
    theme: {
      light: "bu-border-transparent bu-bg-light-fill-secondary",
      dark: "bu-border-transparent bu-bg-dark-fill-secondary"
    }
  }
});

const InputOutlinedStyles = cva("", {
  variants: {
    theme: {
      light: ["bu-border-light-line-secondary"],
      dark: ["bu-border-dark-line-secondary"]
    }
  }
});

const InputWithFocus = cva("", {
  variants: {
    theme: {
      light: ["focus-within:bu-border-light-primary hover:bu-border-light-primary"],
      dark: ["focus-within:bu-border-dark-primary hover:bu-border-dark-primary"]
    }
  }
});

const AdornmentStyles = (props: { size: "md" | "lg"; position: "start" | "end" }) => {
  return cva("", {
    variants: {
      size: {
        md: ["bu-px-2 bu-text-sm bu-font-medium"],
        lg:
          props.position === "start"
            ? ["bu-pl-3 bu-pr-2 bu-text-md bu-font-medium"]
            : ["bu-pl-2 bu-pr-3 bu-text-md bu-font-medium"]
      }
    }
  })(props);
};

const InputBgVariants = ({
  variant,
  theme,
  error = false,
  disabled = false,
  noClassName = true,
  size
}: {
  variant: InputVariant;
  theme: BUITheme;
  error?: boolean;
  disabled?: boolean;
  noClassName?: boolean;
  size: "md" | "lg";
}) => {
  return cva("bu-w-full bu-rounded bu-border", {
    variants: {
      variant: {
        filled: InputFilledStyles({ theme }),
        outlined: InputOutlinedStyles({ theme })
      },
      theme: {
        light: ["bu-text-light-label"],
        dark: ["bu-text-dark-label"]
      },
      error: {
        true: InputErrorStyles({ theme })
      },
      disabled: {
        true: InputDisabledStyles({ theme, variant }),
        false: InputWithFocus({ theme })
      },
      noClassName: {
        true: size === "lg" ? "bu-h-[48px]" : "bu-h-[40px]"
      }
    }
  })({ variant, theme, error, disabled, noClassName });
};

const HelperTextVariants = cva("", {
  variants: {
    theme: {
      light: ["!bu-text-light-danger"],
      dark: ["!bu-text-dark-danger"]
    }
  }
});

export { HelperTextVariants, InputBgVariants, LabelVariants, AdornmentStyles };
