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
}

const LabelTextField = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label,
    startAdornment,
    endAdornment,
    type,
    className,
    variant,
    theme: mode,
    error,
    helperText,
    disabled,
    ...otherProps
  } = props;
  const { theme } = useTheme();
  return (
    <label>
      {label && (
        <Typography variant="body4" className={cn(LabelVariants({ theme: mode ? mode : theme }))}>
          {label}
        </Typography>
      )}
      <div
        className={cn(InputBgVariants({ variant, theme: mode ? mode : theme, error, disabled }))}>
        <div className="bu-flex bu-h-[40px] bu-w-full bu-items-center bu-justify-center">
          <span className="bu-px-2">{startAdornment}</span>
          <input
            disabled={disabled}
            type={type}
            {...otherProps}
            ref={ref as LegacyRef<HTMLInputElement>}
            className={cn("bu-flex-1 bu-bg-transparent focus-visible:bu-outline-0", className)}
          />
          <span className="bu-px-2">{endAdornment}</span>
        </div>
      </div>
      <div className="bu-mt-1">
        <Typography
          variant="body4"
          className={cn(HelperTextVariants({ theme: mode ? mode : theme }))}>
          {helperText}
        </Typography>
      </div>
    </label>
  );
});

export default LabelTextField;
