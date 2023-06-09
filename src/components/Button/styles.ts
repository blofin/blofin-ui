import { cva } from "class-variance-authority";
import { BUITheme } from "../../../types/component";
import { ButtonShape, ButtonSize, ButtonVariant } from "./types";

const primaryStyles = cva("text-white", {
  variants: {
    theme: {
      light: ["bg-light-primary", "hover:bg-light-hover-primary"],
      dark: ["bg-dark-primary", "hover:bg-dark-hover-primary"],
    },
  },
});

const primaryDisabledStyles = cva("text-white", {
  variants: {
    theme: {
      light: ["bg-light-primary-40", "hover:bg-light-primary-40"],
      dark: ["bg-dark-primary-40", "hover:bg-dark-primary-40"],
    },
  },
});

const secondaryStyles = cva("", {
  variants: {
    theme: {
      light: [
        "bg-light-primary-14",
        "hover:bg-light-hover-primary-10",
        "text-light-primary",
      ],
      dark: [
        "bg-dark-primary-14",
        "hover:bg-dark-hover-primary-10",
        "text-dark-primary",
      ],
    },
  },
});

const secondaryDisabledStyles = cva("", {
  variants: {
    theme: {
      light: [
        "bg-light-primary-14",
        "hover:bg-light-primary-14",
        "text-light-primary-60",
      ],
      dark: [
        "bg-dark-primary-14",
        "hover:bg-dark-primary-14",
        "text-dark-primary-60",
      ],
    },
  },
});

const tertiaryStyles = cva("", {
  variants: {
    theme: {
      light: [
        "bg-light-fill-primary",
        "hover:bg-light-hover-fill-primary",
        "text-light-label-70",
      ],
      dark: [
        "bg-dark-fill-primary",
        "hover:bg-dark-hover-fill-primary",
        "text-dark-label-70",
      ],
    },
  },
});

const tertiaryDisabledStyles = cva("", {
  variants: {
    theme: {
      light: [
        "bg-light-fill-primary",
        "hover:bg-light-fill-primary",
        "text-light-label-40",
      ],
      dark: [
        "bg-dark-fill-primary",
        "hover:bg-dark-fill-primary",
        "text-dark-label-70",
      ],
    },
  },
});

const textStyles = cva("", {
  variants: {
    theme: {
      light: ["text-light-label", "hover:text-light-primary"],
      dark: ["text-dark-label", "hover:text-dark-primary"],
    },
  },
});

const textDisabledStyles = cva("", {
  variants: {
    theme: {
      light: ["text-light-label-40", "hover:text-light-label-40"],
      dark: ["text-dark-label-40", "hover:text-dark-label-40"],
    },
  },
});

const ghostStyles = cva("", {
  variants: {
    theme: {
      light: [
        "text-light-primary",
        "hover:text-light-hover-primary",
        "border",
        "border-solid",
        "border-light-primary",
        "hover:bg-light-primary-10",
      ],
      dark: [
        "text-dark-primary",
        "hover:text-dark-hover-primary",
        "border",
        "border-solid",
        "border-dark-primary",
        "hover:bg-dark-primary-10",
      ],
    },
  },
});

const ghostDisabledStyles = cva("text-white", {
  variants: {
    theme: {
      light: [
        "text-light-primary-60",
        "hover:text-light-primary-60",
        "border",
        "border-solid",
        "border-light-primary-60",
        "hover:bg-transparent",
      ],
      dark: [
        "text-dark-primary-60",
        "hover:text-dark-primary-60",
        "border",
        "border-solid",
        "border-dark-primary-60",
        "hover:bg-transparent",
      ],
    },
  },
});

const styles = {
  primary: {
    variant: primaryStyles,
    disabled: primaryDisabledStyles,
  },
  secondary: {
    variant: secondaryStyles,
    disabled: secondaryDisabledStyles,
  },
  tertiary: {
    variant: tertiaryStyles,
    disabled: tertiaryDisabledStyles,
  },
  text: {
    variant: textStyles,
    disabled: textDisabledStyles,
  },
  ghost: {
    variant: ghostStyles,
    disabled: ghostDisabledStyles,
  },
};

const buttonVariants = (props: {
  variant: ButtonVariant;
  size: ButtonSize;
  theme: BUITheme;
  shape: ButtonShape;
  disabled: boolean;
}) => {
  const { theme, variant } = props;

  return cva(
    "rounded-[5px] box-border inline-flex items-center justify-center",
    {
      variants: {
        variant: {
          primary: styles[variant].variant({ theme }),
          secondary: styles[variant].variant({ theme }),
          tertiary: styles[variant].variant({ theme }),
          text: styles[variant].variant({ theme }),
          ghost: styles[variant].variant({ theme }),
        },
        size: {
          small: `px-[12px]  text-[14px] leading-[24px] h-[30px] min-w-[30px]`,
          medium: `px-[16px] text-[14px] leading-[24px] h-[40px] min-w-[40px]`,
          large: `px-[24px] text-[16px] leading-[28px] h-[48px] min-w-[48px]`,
          max: `px-[24px] text-[18px] leading-[30px] h-[56px] min-w-[56px]`,
        },
        shape: {
          normal: "",
          circle: "rounded-[50%] px-[0px] py-[0px]",
        },
        disabled: {
          true: styles[variant].disabled({ theme }),
        },
      },
    }
  )(props);
};

export default buttonVariants;
