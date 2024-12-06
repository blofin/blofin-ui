import { forwardRef, LegacyRef, ReactNode } from "react";
import { BUITheme } from "../..";
import useTheme from "../../provider/useTheme";
import { cn } from "../../utils/utils";
import { Typography } from "../Typography/Typography";
import {
  HelperTextVariants,
  InputBgVariants,
  InputVariant,
  LabelVariants,
  AdornmentStyles
} from "./styles";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  variant: InputVariant;
  theme?: BUITheme;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  inputClassName?: string;
  inputSize?: "md" | "lg";
}

const LabelTextField = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    id,
    label,
    startAdornment,
    endAdornment,
    type,
    className,
    inputClassName,
    variant,
    theme: mode,
    error,
    helperText,
    disabled,
    inputSize = "md",
    ...otherProps
  } = props;
  const { theme } = useTheme();
  return (
    <div>
      {label && typeof label === "string" && (
        <label>
          <Typography
            variant="body4"
            className={cn(LabelVariants({ theme: mode ? mode : theme, size: inputSize }))}>
            {label}
          </Typography>
        </label>
      )}
      {label && typeof label !== "string" && (
        <div className={inputSize === "lg" ? "bu-mb-2" : "bu-mb-1"}>{label}</div>
      )}
      <div
        className={cn(
          InputBgVariants({
            variant,
            theme: mode ? mode : theme,
            error,
            disabled,
            noClassName: !className,
            size: inputSize
          }),
          className
        )}>
        <div className="bu-flex bu-h-full bu-w-full bu-items-center bu-justify-center">
          {startAdornment && (
            <div
              className={
                typeof startAdornment === "string"
                  ? AdornmentStyles({ size: inputSize, position: "start" })
                  : ""
              }>
              {startAdornment}
            </div>
          )}
          <input
            id={id ? id : typeof label === "string" ? `bui-${label}` : undefined}
            disabled={disabled}
            type={type}
            {...otherProps}
            ref={ref as LegacyRef<HTMLInputElement>}
            className={cn(
              "bu-h-full bu-w-full bu-flex-1 bu-bg-transparent bu-outline-none focus:bu-outline-0 focus-visible:bu-outline-0",
              inputSize === "lg" ? "bu-text-md" : "bu-text-sm",
              inputClassName,
              !startAdornment && (inputSize === "lg" ? "bu-pl-3" : "bu-pl-2"),
              !endAdornment && (inputSize === "lg" ? "bu-pr-3" : "bu-pr-2"),
              (mode ? mode : theme) === "light"
                ? "bu-placeholder-light-label-40"
                : "bu-placeholder-dark-label-40",
              (mode ? mode : theme) === "light"
                ? "focus:bu-caret-light-primary"
                : "focus:dark:bu-caret-dark-primary"
            )}
          />
          {endAdornment && (
            <div
              className={
                typeof endAdornment === "string"
                  ? AdornmentStyles({ size: inputSize, position: "end" })
                  : ""
              }>
              {endAdornment}
            </div>
          )}
        </div>
      </div>
      {helperText && (
        <div className="bu-mt-1">
          <Typography
            variant="body4"
            className={cn(HelperTextVariants({ theme: mode ? mode : theme }))}>
            {helperText}
          </Typography>
        </div>
      )}
    </div>
  );
});

export default LabelTextField;
