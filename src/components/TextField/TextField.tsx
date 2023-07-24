import { ForwardedRef, LegacyRef, ReactNode, forwardRef } from "react";
import { BUITheme, Typography } from "../..";
import { cn } from "../../utils/utils";
import { InputVariant } from "../LabelTextField/styles";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  variant: InputVariant;
  theme?: BUITheme;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
}

const TextField = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, type, className, ...otherProps } = props;
  return (
    <label>
      <Typography variant="body2" className="bu-mb-1">
        {label}
      </Typography>
      <input
        type={type}
        {...otherProps}
        ref={ref as LegacyRef<HTMLInputElement>}
        className={cn(
          "bu-order-input bu-bg-background bu-ring-offset-background placeholder:bu-text-muted-foreground focus-visible:bu-ring-ring bu-flex bu-h-10 bu-w-full bu-rounded-md bu-border bu-px-3 bu-py-2 bu-text-sm file:bu-border-0 file:bu-bg-transparent file:bu-text-sm file:bu-font-medium focus-visible:bu-outline-none focus-visible:bu-ring-2 focus-visible:bu-ring-offset-2 disabled:bu-cursor-not-allowed disabled:bu-opacity-50",
          className
        )}
      />
    </label>
  );
});

export default TextField;
