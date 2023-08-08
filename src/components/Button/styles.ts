import { cva } from "class-variance-authority";
import { BUITheme } from "../../types/component";
import { ButtonShape, ButtonSize, ButtonVariant } from "./types";

const primaryStyles = cva("bu-text-white", {
  variants: {
    theme: {
      light: ["bu-bg-light-primary", "hover:bu-bg-light-hover-primary"],
      dark: ["bu-bg-dark-primary", "hover:bu-bg-dark-hover-primary"]
    }
  }
});

const primaryDisabledStyles = cva("bu-text-white", {
  variants: {
    theme: {
      light: ["bu-bg-light-primary-40", "hover:bu-bg-light-primary-40"],
      dark: ["bu-bg-dark-primary-40", "hover:bu-bg-dark-primary-40"]
    }
  }
});

const secondaryStyles = cva("", {
  variants: {
    theme: {
      light: ["bu-bg-light-primary-14", "hover:bu-bg-light-hover-primary-10", "bu-text-light-primary"],
      dark: ["bu-bg-dark-primary-14", "hover:bu-bg-dark-hover-primary-10", "bu-text-dark-primary"]
    }
  }
});

const secondaryDisabledStyles = cva("", {
  variants: {
    theme: {
      light: ["bu-bg-light-primary-14", "hover:bu-bg-light-primary-14", "bu-text-light-primary-60"],
      dark: ["bu-bg-dark-primary-14", "hover:bu-bg-dark-primary-14", "bu-text-dark-primary-60"]
    }
  }
});

const tertiaryStyles = cva("", {
  variants: {
    theme: {
      light: ["bu-bg-light-fill-secondary", "hover:bu-bg-light-hover-fill-secondary", "bu-text-light-label"],
      dark: ["bu-bg-dark-fill-secondary", "hover:bu-bg-dark-hover-fill-secondary", "bu-text-dark-label"]
    }
  }
});

const tertiaryDisabledStyles = cva("", {
  variants: {
    theme: {
      light: ["bu-bg-light-fill-primary", "hover:bu-bg-light-fill-primary", "bu-text-light-label-40"],
      dark: ["bu-bg-dark-fill-primary", "hover:bu-bg-dark-fill-primary", "bu-text-dark-label-60"]
    }
  }
});

const textStyles = cva("", {
  variants: {
    theme: {
      light: ["bu-text-light-label", "hover:bu-text-light-primary"],
      dark: ["bu-text-dark-label", "hover:bu-text-dark-primary"]
    }
  }
});

const textDisabledStyles = cva("", {
  variants: {
    theme: {
      light: ["bu-text-light-label-40", "hover:bu-text-light-label-40"],
      dark: ["bu-text-dark-label-40", "hover:bu-text-dark-label-40"]
    }
  }
});

const infoStyles = cva("", {
  variants: {
    theme: {
      light: ["bu-text-light-label-40", "hover:bu-text-light-primary"],
      dark: ["bu-text-dark-label-40", "hover:bu-text-dark-primary"]
    }
  }
});

const infoDisabledStyles = cva("", {
  variants: {
    theme: {
      light: ["bu-text-light-label-40", "hover:bu-text-light-label-40"],
      dark: ["bu-text-dark-label-40", "hover:bu-text-dark-label-40"]
    }
  }
});

const ghostStyles = cva("", {
  variants: {
    theme: {
      light: [
        "bu-text-light-primary",
        "hover:bu-text-light-hover-primary",
        "bu-border",
        "bu-border-solid",
        "bu-border-light-primary",
        "hover:bu-bg-light-primary-10"
      ],
      dark: [
        "bu-text-dark-primary",
        "hover:bu-text-dark-hover-primary",
        "bu-border",
        "bu-border-solid",
        "bu-border-dark-primary",
        "hover:bu-bg-dark-primary-10"
      ]
    }
  }
});

const ghostDisabledStyles = cva("", {
  variants: {
    theme: {
      light: [
        "bu-text-light-primary-60",
        "hover:bu-text-light-primary-60",
        "bu-border",
        "bu-border-solid",
        "bu-border-light-primary-60",
        "hover:bu-bg-transparent"
      ],
      dark: [
        "bu-text-dark-primary-60",
        "hover:bu-text-dark-primary-60",
        "bu-border",
        "bu-border-solid",
        "bu-border-dark-primary-60",
        "hover:bu-bg-transparent"
      ]
    }
  }
});

const styles = {
  primary: {
    variant: primaryStyles,
    disabled: primaryDisabledStyles
  },
  secondary: {
    variant: secondaryStyles,
    disabled: secondaryDisabledStyles
  },
  tertiary: {
    variant: tertiaryStyles,
    disabled: tertiaryDisabledStyles
  },
  text: {
    variant: textStyles,
    disabled: textDisabledStyles
  },
  ghost: {
    variant: ghostStyles,
    disabled: ghostDisabledStyles
  },
  info:{
    variant:infoStyles,
    disabled: infoDisabledStyles
  }
};

const buttonVariants = (props: {
  variant: ButtonVariant;
  size: ButtonSize;
  theme: BUITheme;
  shape: ButtonShape;
  disabled: boolean;
}) => {
  const { theme, variant } = props;

  return cva("bu-box-border bu-inline-flex bu-items-center bu-justify-center bu-rounded-[4px]", {
    variants: {
      variant: {
        primary: styles[variant].variant({ theme }),
        secondary: styles[variant].variant({ theme }),
        tertiary: styles[variant].variant({ theme }),
        text: styles[variant].variant({ theme }),
        ghost: styles[variant].variant({ theme }),
        info:styles[variant].variant({ theme })
      },
      size: {
        small: `bu-h-[30px] bu-min-w-[80px] bu-px-[12px] bu-text-[14px] bu-leading-[20px]`,
        medium: `bu-h-[40px] bu-min-w-[100px] bu-px-[16px] bu-text-[14px] bu-leading-[20px]`,
        large: `bu-h-[48px] bu-min-w-[140px] bu-px-[24px] bu-text-[16px] bu-leading-[24px]`,
        max: `bu-h-[56px] bu-min-w-[180px] bu-px-[24px] bu-text-[18px] bu-leading-[26px]`
      },
      shape: {
        normal: "",
        circle: "bu-rounded-[50%] bu-px-[0px] bu-py-[0px]"
      },
      disabled: {
        true: styles[variant].disabled({ theme })
      }
    }
  })(props);
};

export default buttonVariants;
