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
  checked
}: {
  theme: BUITheme;
  checked: boolean;
  arrow: "circle" | "check";
}) => {
  return cva("bu-cursor-pointer bu-select-none bu-text-sm", {
    variants: {
      theme: {
        light: ["bu-text-light-label-60 group-hover:!bu-text-light-label"],
        dark: ["bu-text-dark-label-60 group-hover:!bu-text-dark-label"]
      },
      checked: {
        true: RadioButtonCheckedStyles({ theme })
      }
    }
  })({ theme, checked });
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
  check
}: {
  theme: BUITheme;
  arrow: "circle" | "check";
  check: boolean;
}) => {
  return cva(
    "bu-relative bu-h-[12px] bu-w-[12px] bu-cursor-pointer bu-appearance-none bu-rounded-full bu-border-[1px]",
    {
      variants: {
        theme: {
          light: [
            "!bu-border-light-label-60 checked:!bu-border-light-primary checked:after:!bu-bg-light-primary group-hover:!bu-border-light-primary"
          ],
          dark: [
            "!bu-border-dark-label-60 checked:!bu-border-dark-primary checked:after:!bu-bg-dark-primary group-hover:!bu-border-dark-primary"
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
        }
      }
    }
  )({ theme, arrow, check });
};
export { RadioButtonInputVariants, RadioButtonLabelVariants };
