import { cva } from "class-variance-authority";
import { BUITheme } from "../..";

import { AlertType } from "./Alert";

export const alertBgVariants = cva(
  "bu-flex bu-min-h-[36px] bu-w-full  bu-justify-between bu-rounded-[6px] bu-px-[12px] bu-py-[8px]",
  {
    variants: {
      type: {
        doubt: "bu-bg-base-primary-14",
        success: "bu-bg-base-success-14",
        warning: "bu-bg-base-primary-14",
        danger: "bu-bg-base-danger-14"
      },
      alignType: {
        true: "bu-items-start",
        false: "bu-items-center"
      }
    }
  }
);

export const alertIconVariants = cva("ltr:bu-mr-[8px] rtl:bu-ml-[8px] bu-text-[20px]", {
  variants: {
    type: {
      doubt: "bu-text-base-primary",
      success: "bu-text-base-success",
      warning: "bu-text-base-primary",
      danger: "bu-text-base-danger"
    }
  }
});
