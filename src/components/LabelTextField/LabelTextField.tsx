import { forwardRef, LegacyRef, ReactNode } from "react";
import { BUITheme } from "../..";
import useTheme from "../../provider/useTheme";
import { cn } from "../../utils/utils";
import { Typography } from "../Typography/Typography";
import { HelperTextVariants, InputBgVariants, InputVariant, LabelVariants } from "./styles";

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
}

const LabelTextField = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
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
    ...otherProps
  } = props;
  const { theme } = useTheme();
  return (
    <div>
      {label && typeof label === "string" && (
        <label htmlFor={`bui-${label}`}>
          <Typography variant="body4" className={cn(LabelVariants({ theme: mode ? mode : theme }))}>
            {label}
          </Typography>
        </label>
      )}
      {label && typeof label !== "string" && <div className="bu-mb-1">{label}</div>}
      <div
        className={cn(
          InputBgVariants({
            variant,
            theme: mode ? mode : theme,
            error,
            disabled,
            noClassName: !className
          }),
          className
        )}>
        <div className="bu-flex bu-h-full bu-w-full bu-items-center bu-justify-center">
          {startAdornment && (
            <div
              className={
                typeof startAdornment === "string" ? "bu-px-2 bu-text-base bu-font-medium" : ""
              }>
              {startAdornment}
            </div>
          )}
          <input
            id={typeof label === "string" ? `bui-${label}` : undefined}
            disabled={disabled}
            type={type}
            {...otherProps}
            ref={ref as LegacyRef<HTMLInputElement>}
            className={cn(
              "bu-h-full bu-w-full bu-flex-1 bu-bg-transparent bu-text-base bu-outline-none focus:bu-outline-0 focus-visible:bu-outline-0",
              inputClassName,
              `${!startAdornment && "bu-pl-2"}`,
              `${!endAdornment && "bu-pr-2"}`
            )}
          />
          {endAdornment && (
            <div
              className={
                typeof endAdornment === "string" ? "bu-px-2 bu-text-base bu-font-medium" : ""
              }>
              {endAdornment}
            </div>
          )}
        </div>
      </div>
      <div className="bu-mt-1">
        <Typography
          variant="body4"
          className={cn(HelperTextVariants({ theme: mode ? mode : theme }))}>
          {helperText}
        </Typography>
      </div>
    </div>
  );
});

export default LabelTextField;
