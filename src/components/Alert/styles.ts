import { cva } from "class-variance-authority";

export const alertBgVariants = cva(
  "bu-flex bu-min-h-[36px] bu-w-full bu-justify-between bu-rounded-[6px] bu-px-[12px] bu-py-[8px]",
  {
    variants: {
      type: {
        doubt: "bu-bg-base-primary-14",
        success: "bu-bg-base-success-14",
        warning: "bu-bg-base-warning-14",
        danger: "bu-bg-base-danger-14"
      },
      alignType: {
        true: "bu-items-start",
        false: "bu-items-center"
      }
    }
  }
);

export const alertIconVariants = cva(
  "bu-text-[16px] bu-leading-[16px] ltr:bu-mr-[4px] rtl:bu-ml-[4px]",
  {
    variants: {
      type: {
        doubt: "bu-text-base-primary",
        success: "bu-text-base-success",
        warning: "bu-text-base-warning",
        danger: "bu-text-base-danger"
      }
    }
  }
);
