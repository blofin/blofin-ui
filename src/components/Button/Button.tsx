import React, { ButtonHTMLAttributes, FC } from "react";
import { Base } from "../../types/component";
import { cn } from "../../utils/utils";
import buttonVariants, { refreshIconStyles } from "./styles";
import { ButtonShape, ButtonSize, ButtonVariant, LoadingType } from "./types";
import useTheme from "../../provider/useTheme";
import Loading from "./Loading";
import IconRefresh from "../../assets/icons/refresh-line.svg";
import IconCheckLight from "../../assets/icons/check-line-light.svg";
import IconCheckDark from "../../assets/icons/check-line-dark.svg";
import clsx from "clsx";

export interface ButtonProps extends Base, ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button type
   */
  variant?: ButtonVariant;
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * Button state
   */
  disabled?: boolean;
  /**
   * Element placed before the children
   */
  startIcon?: React.ReactNode;
  /**
   * Element placed after the children
   */
  endIcon?: React.ReactNode;

  icon?: React.ReactNode;

  size: ButtonSize;

  shape?: ButtonShape;

  children?: React.ReactNode;

  loading?: boolean;

  loadingType?: LoadingType;

  checked?: boolean;
}

export const Button = ({
  size = "large",
  disabled = false,
  variant = "primary",
  children,
  startIcon,
  endIcon,
  icon,
  onClick,
  shape = "normal",
  className = "",
  theme: mode,
  loading,
  loadingType = "default",
  checked = true,
  ...props
}: ButtonProps) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (loading) {
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  const { theme } = useTheme();

  const buttonProps = {
    variant: loading ? "tertiary" : variant,
    size,
    theme: mode ? mode : theme,
    shape,
    disabled: loading ? true : disabled,
    checked
  };


  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${cn(buttonVariants(buttonProps))} ${className}`}
      disabled={disabled}
      {...props}>
      {loading ? (
        loadingType === "refresh" ? (
          <IconRefresh className={cn(refreshIconStyles({ size }))} />
        ) : (
          <Loading size={size} theme={buttonProps.theme} />
        )
      ) : (
        <>
          {startIcon && <span className="ltr:bu-mr-[9px] rtl:bu-ml-[9px]">{startIcon}</span>}
          {children}
          {endIcon && (
            <span className="ltr:bu-ml-[9px] rtl:bu-mr-[9px] bu-flex bu-items-center">{endIcon}</span>
          )}
          {icon}
        </>
      )}
    </button>
  );
};

const CheckButton: FC<ButtonProps & { checked: boolean }> = (props) => {
  const { theme } = useTheme();

  const { checked } = props;
  return (
    <div className="bu-relative">
      <Button {...props} variant="ghost3"></Button>
      <div
        className={clsx(
          "bu-absolute bu-top-0 ltr:bu-right-0 rtl:bu-left-0",
          theme === "light" ? "bu-text-light-label" : "bu-text-dark-label",
          "ltr:bu-rounded-tr-[8px] ltr:bu-rounded-bl-[8px] ltr:bu-rounded-tl-none ltr:bu-rounded-br-none rtl:bu-rounded-tl-[8px] rtl:bu-rounded-br-[8px] rtl:bu-rounded-tr-none rtl:bu-rounded-bl-none",
          "bu-flex bu-items-center bu-justify-center"
        )}>
        {theme === "light" ? (
          <IconCheckLight
            className={clsx(checked ? "" : "bu-text-light-line-secondary")}
          />
        ) : (
          <IconCheckDark
            className={clsx(checked ? "" : "bu-text-dark-line-secondary")}
          />
        )}
      </div>
    </div>
  );
};

const WhiteButton: FC<ButtonProps> = (props) => {
  const { theme } = useTheme();
  return (
    <Button
      {...props}
      variant="ghost"
      className={`bu-border-light-background bu-text-light-background ${theme === "light" ? "hover:!bu-text-light-primary" : "hover:!bu-text-dark-primary"
        }  bu-font-medium hover:!bu-bg-light-background`}></Button>
  );
};

Button.WhiteButton = WhiteButton;

Button.CheckButton = CheckButton;
