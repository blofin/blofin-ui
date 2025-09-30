import * as React from "react";
import useTheme from "../../provider/useTheme";
import { BUITheme } from "../../types/component";
import { cn } from "../../utils/utils";
import {
  InputBgVariants,
  InputVariant,
  AdornmentStyles,
  InputSizeTextStyle,
  InputSizeStyle,
  InputPlaceholderStyle,
  InputFocusedStyle
} from "../LabelTextField/styles";

export type InputSize = "sm" | "md" | "lg";

export interface InputBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: InputVariant;
  theme?: BUITheme;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  disabled?: boolean;
  error?: boolean;
  inputClassName?: string;
  inputSize?: InputSize
}

const TextField = React.forwardRef<HTMLInputElement, InputBaseProps>((props, ref) => {
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
          ref={ref as React.LegacyRef<HTMLInputElement>}
          className={`${cn(
            "bu-h-full bu-w-full bu-flex-1 bu-bg-transparent bu-outline-none",
            InputSizeTextStyle({ inputSize }),
            inputClassName,
            !startAdornment && InputSizeStyle({ inputSize }),
            !endAdornment && InputSizeStyle({ inputSize }),
            InputPlaceholderStyle({ theme: mode ? mode : theme }),
            InputFocusedStyle({ theme: mode ? mode : theme })
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
