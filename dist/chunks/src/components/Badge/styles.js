import { c as e } from "../../../vendor.js";
const n = (g) => {
  const a = {
    dark: {
      primary: "bg-dark-badge-primary-bg text-dark-primary",
      secondary: "bg-dark-badge-secondary-bg text-dark-secondary",
      danger: "bg-dark-badge-danger-bg text-dark-danger",
      success: "bg-dark-badge-success-bg text-dark-success",
      warning: "bg-dark-badge-warning-bg text-dark-warning",
      info: "bg-dark-badge-info-bg text-dark-label-tertiary"
    },
    light: {
      primary: "bg-light-badge-primary-bg text-light-primary",
      secondary: "bg-light-badge-secondary-bg text-light-secondary",
      danger: "bg-light-badge-danger-bg text-light-danger",
      success: "bg-light-badge-success-bg text-light-success",
      warning: "bg-light-badge-warning-bg text-light-warning",
      info: "bg-light-badge-info-bg text-light-label-tertiary"
    }
  }, { theme: r = "light" } = g;
  return e("rounded px-[10px] py-[5px] text-[12px]", {
    variants: {
      color: {
        primary: a[r].primary,
        secondary: a[r].secondary,
        danger: a[r].danger,
        success: a[r].success,
        warning: a[r].warning,
        info: a[r].info
      }
    },
    defaultVariants: {
      color: "primary"
    }
  })(g);
};
export {
  n as B
};
