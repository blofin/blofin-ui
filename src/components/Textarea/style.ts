import { cva } from "class-variance-authority";
import { BUITheme } from "../../types/component";

export type TextareaVariant = "filled" | "outlined";

const outlinedBorderStyles = cva("bu-rounded-[8px] bu-border-[1px] bu-p-[8px]", {
  variants: {
    theme: {
      light: [
        "bu-border-light-line-secondary bu-bg-light-background focus-within:bu-border-light-primary hover:bu-border-light-primary"
      ],
      dark: [
        "bu-border-dark-line-secondary bu-bg-dark-background focus-within:bu-border-dark-primary hover:bu-border-dark-primary"
      ]
    }
  }
});

const filledBorderStyles = cva("bu-rounded-[8px] bu-border-[1px] bu-p-[8px]", {
  variants: {
    theme: {
      light: [
        "bu-border-transparent bu-bg-light-fill-secondary focus-within:!bu-border-light-primary hover:bu-border-light-line-tertiary"
      ],
      dark: [
        "bu-border-transparent bu-bg-dark-fill-secondary focus-within:!bu-border-dark-primary hover:bu-border-dark-line-tertiary"
      ]
    }
  }
});

const borderStyles = ({
  theme,
  variant = "outlined"
}: {
  theme: BUITheme;
  variant?: TextareaVariant;
}) => {
  return variant === "filled"
    ? filledBorderStyles({ theme })
    : outlinedBorderStyles({ theme });
};

const errorBorderStyles = cva("bu-rounded-[8px] bu-border-[1px] bu-p-[8px]", {
  variants: {
    theme: {
      light: [
        "bu-border-light-danger bu-bg-light-background focus-within:bu-border-light-danger hover:bu-border-light-danger"
      ],
      dark: [
        "bu-border-dark-danger bu-bg-dark-background focus-within:bu-border-dark-danger hover:bu-border-dark-danger"
      ]
    }
  }
});

const outlinedTextAreaStyles = cva("", {
  variants: {
    theme: {
      light: ["bu-bg-light-background bu-text-light-label"],
      dark: ["bu-bg-dark-background bu-text-dark-label"]
    }
  }
});

const filledTextAreaStyles = cva("", {
  variants: {
    theme: {
      light: ["bu-bg-transparent bu-text-light-label"],
      dark: ["bu-bg-transparent bu-text-dark-label"]
    }
  }
});

const textAreaStyles = ({
  theme,
  variant = "outlined"
}: {
  theme: BUITheme;
  variant?: TextareaVariant;
}) => {
  const base =
    "bu-h-[80px] bu-w-full bu-resize-none bu-rounded-[8px] bu-text-[12px] bu-leading-[18px] bu-shadow-none bu-outline-none";
  const variantStyles =
    variant === "filled" ? filledTextAreaStyles({ theme }) : outlinedTextAreaStyles({ theme });
  return `${base} ${variantStyles}`;
};

const HelperTextVariants = cva("", {
  variants: {
    theme: {
      light: ["!bu-text-light-danger"],
      dark: ["!bu-text-dark-danger"]
    }
  }
});

export { textAreaStyles, borderStyles, HelperTextVariants, errorBorderStyles };
