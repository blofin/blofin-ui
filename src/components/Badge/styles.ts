import { cva } from "class-variance-authority";
import { BUIComponentColor, BUITheme } from "../../types/component";

export type BadgeColor = BUIComponentColor | "info" | "secondary";

const BadgeVariants = (props: { theme?: BUITheme; color: BadgeColor }) => {
  const color = {
    dark: {
      primary: "bg-dark-badge-primary-bg text-dark-primary",
      secondary: "bg-dark-badge-secondary-bg text-dark-secondary",
      danger: "bg-dark-badge-danger-bg text-dark-danger",
      success: "bg-dark-badge-success-bg text-dark-success",
      warning: "bg-dark-badge-warning-bg text-dark-warning",
      info: "bg-dark-badge-info-bg text-dark-label-tertiary",
    },
    light: {
      primary: "bg-light-badge-primary-bg text-light-primary",
      secondary: "bg-light-badge-secondary-bg text-light-secondary",
      danger: "bg-light-badge-danger-bg text-light-danger",
      success: "bg-light-badge-success-bg text-light-success",
      warning: "bg-light-badge-warning-bg text-light-warning",
      info: "bg-light-badge-info-bg text-light-label-tertiary",
    },
  };

  const { theme = "light" } = props;

  return cva("rounded px-[10px] py-[5px] text-[12px]", {
    variants: {
      color: {
        primary: color[theme].primary,
        secondary: color[theme].secondary,
        danger: color[theme].danger,
        success: color[theme].success,
        warning: color[theme].warning,
        info: color[theme].info,
      },
    },
    defaultVariants: {
      color: "primary",
    },
  })(props);
};

export default BadgeVariants;
