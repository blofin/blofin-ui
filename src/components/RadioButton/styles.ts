import { cva } from "class-variance-authority";
import { BUITheme } from "../..";

const RadioButtonCheckedStyles = cva("", {
  variants: {
    theme: {
      light: ["!bu-text-light-label"],
      dark: ["!bu-text-dark-label"]
    }
  }
});

const RadioButtonLabelVariants = ({
  theme,
  checked,
  disabled
}: {
  theme: BUITheme;
  checked: boolean;
  arrow: "circle" | "check";
  disabled: boolean;
}) => {
  return cva("bu-cursor-pointer bu-select-none bu-text-sm", {
    variants: {
      theme: {
        light: ["bu-text-light-label-60"],
        dark: ["bu-text-dark-label-60"]
      },
      disabled: {
        true: ["!bu-cursor-not-allowed"],
        false: ["group-hover:bu-text-light-label"]
      },
      checked: {
        true: RadioButtonCheckedStyles({ theme })
      }
    },
    compoundVariants: [
      {
        theme: "light",
        disabled: false,
        class: "group-hover:!bu-text-light-label"
      },
      {
        theme: "dark",
        disabled: false,
        class: "group-hover:!bu-text-dark-label"
      }
    ]
  })({ theme, checked, disabled });
};

const RadioButtonCircleCheckedStyles = cva("", {
  variants: {
    theme: {
      light: ["bu-bg-light-primary checked:after:bu-border-light-background"],
      dark: ["bu-bg-dark-primary checked:after:bu-border-dark-background"]
    }
  }
});

const RadioButtonInputVariants = ({
  theme,
  arrow,
  check,
  disabled
}: {
  theme: BUITheme;
  arrow: "circle" | "check";
  check: boolean;
  disabled: boolean;
}) => {
  return cva(
    "bu-relative bu-h-[12px] bu-w-[12px] bu-cursor-pointer bu-appearance-none bu-rounded-full bu-border-[1px]",
    {
      variants: {
        theme: {
          light: [
            "!bu-border-light-label-60",
            "checked:!bu-border-light-primary",
            "checked:after:!bu-bg-light-primary"
          ],
          dark: [
            "!bu-border-dark-label-60",
            "checked:!bu-border-dark-primary",
            "checked:after:!bu-bg-dark-primary"
          ]
        },
        arrow: {
          circle:
            "bu-bg-transparent checked:after:bu-absolute checked:after:bu-left-1/2 checked:after:bu-top-1/2 checked:after:bu-block checked:after:bu-h-[6px] checked:after:bu-w-[6px] checked:after:bu--translate-x-1/2 checked:after:bu--translate-y-1/2 checked:after:bu-transform checked:after:bu-rounded-full",
          check:
            "checked:after:bu-absolute checked:after:bu-left-1/2 checked:after:bu-top-[4.5px] checked:after:bu-block checked:after:bu-h-[6px] checked:after:bu-w-[4px] checked:after:bu--translate-x-1/2 checked:after:bu--translate-y-1/2 checked:after:bu-rotate-[35deg] checked:after:bu-transform checked:after:bu-border-b-[1.8px] checked:after:bu-border-r-[1.8px]"
        },
        check: {
          true: RadioButtonCircleCheckedStyles({ theme })
        },
        disabled: {
          true: "!bu-cursor-not-allowed",
          false: "bu-cursor-pointer"
        }
      },
      compoundVariants: [
        {
          theme: "light",
          disabled: false,
          class: "group-hover:!bu-border-light-primary"
        },
        {
          theme: "dark",
          disabled: false,
          class: "group-hover:!bu-border-dark-primary"
        }
      ]
    }
  )({ theme, arrow, check, disabled });
};

export { RadioButtonInputVariants, RadioButtonLabelVariants };
