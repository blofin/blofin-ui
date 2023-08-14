import { cva } from "class-variance-authority";
import { BUIComponentColor, BUITheme } from "../../types/component";

export type BadgeColor = BUIComponentColor | "info" | "secondary";

const BadgeVariants = (props: { theme: BUITheme; color: BadgeColor }) => {
  const color = {
    dark: {
      primary: "bu-bg-dark-badge-primary-bg bu-text-dark-primary",
      secondary: "bu-bg-dark-badge-secondary-bg bu-text-dark-secondary",
      danger: "bu-bg-dark-badge-danger-bg bu-text-dark-danger",
      success: "bu-bg-dark-badge-success-bg bu-text-dark-success",
      warning: "bu-bg-dark-badge-warning-bg bu-text-dark-warning",
      info: "bu-bg-dark-badge-info-bg bu-text-dark-label-tertiary"
    },
    light: {
      primary: "bu-bg-light-badge-primary-bg bu-text-light-primary",
      secondary: "bu-bg-light-badge-secondary-bg bu-text-light-secondary",
      danger: "bu-bg-light-badge-danger-bg bu-text-light-danger",
      success: "bu-bg-light-badge-success-bg bu-text-light-success",
      warning: "bu-bg-light-badge-warning-bg bu-text-light-warning",
      info: "bu-bg-light-badge-info-bg bu-text-light-label-tertiary"
    }
  };

  const { theme } = props;

  return cva("bu-rounded bu-px-[10px] bu-py-[5px] bu-text-[12px]", {
    variants: {
      color: {
        primary: color[theme].primary,
        secondary: color[theme].secondary,
        danger: color[theme].danger,
        success: color[theme].success,
        warning: color[theme].warning,
        info: color[theme].info
      }
    },
    defaultVariants: {
      color: "primary"
    }
  })(props);
};

export default BadgeVariants;
