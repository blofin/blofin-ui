import { LegacyRef, ReactNode, forwardRef } from "react";
import useTheme from "../../provider/useTheme";
import { BUITheme } from "../../types/component";
import { cn } from "../../utils/utils";
import { InputBgVariants, InputVariant, AdornmentStyles } from "../LabelTextField/styles";

export interface InputBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: InputVariant;
  theme?: BUITheme;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  disabled?: boolean;
  error?: boolean;
  inputClassName?: string;
  inputSize?: "md" | "lg";
}

const TextField = forwardRef<HTMLInputElement, InputBaseProps>((props, ref) => {
  const {
    variant,
    theme: mode,
    startAdornment,
    endAdornment,
    type,
    error,
    disabled,
    className,
    inputClassName,
    inputSize = "md",
    ...otherProps
  } = props;
  const { theme } = useTheme();
  return (
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
        {startAdornment &&
          (typeof startAdornment === "string" ? (
            <span className={AdornmentStyles({ size: inputSize, position: "start" })}>
              {startAdornment}
            </span>
          ) : (
            startAdornment
          ))}
        <input
          disabled={disabled}
          type={type}
          {...otherProps}
          ref={ref as LegacyRef<HTMLInputElement>}
          className={`${cn(
            "bu-h-full bu-w-full bu-flex-1 bu-bg-transparent bu-outline-none focus:bu-outline-0 focus-visible:bu-outline-0",
            inputSize === "lg" ? "bu-text-md" : "bu-text-sm",
            inputClassName,
            !startAdornment && (inputSize === "lg" ? "bu-pl-3" : "bu-pl-2"),
            !endAdornment && (inputSize === "lg" ? "bu-pr-3" : "bu-pr-2"),
            (mode ? mode : theme) === "light"
              ? "bu-placeholder-light-label-40"
              : "bu-placeholder-dark-label-40"
          )}`}
        />
        {endAdornment &&
          (typeof endAdornment === "string" ? (
            <span className={AdornmentStyles({ size: inputSize, position: "end" })}>
              {endAdornment}
            </span>
          ) : (
            endAdornment
          ))}
      </div>
    </div>
  );
});

export default TextField;
