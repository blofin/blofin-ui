import { LegacyRef, ReactNode, forwardRef } from "react";
import useTheme from "../../provider/useTheme";
import { BUITheme } from "../../types/component";
import { cn } from "../../utils/utils";
import { InputBgVariants, InputVariant } from "../LabelTextField/styles";

export interface InputBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: InputVariant;
  theme?: BUITheme;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  disabled?: boolean;
  error?: boolean;
  inputClassName?: string;
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
          noClassName: !className
        }),
        className
      )}>
      <div className="bu-flex bu-h-full bu-w-full bu-items-center bu-justify-center">
        {startAdornment && (
          <span
            className={
              typeof startAdornment === "string" ? "bu-px-2 bu-text-base bu-font-medium" : ""
            }>
            {startAdornment}
          </span>
        )}
        <input
          disabled={disabled}
          type={type}
          {...otherProps}
          ref={ref as LegacyRef<HTMLInputElement>}
          className={cn(
            "bu-h-full bu-w-full bu-flex-1 bu-bg-transparent bu-outline-none focus:bu-outline-0 focus-visible:bu-outline-0",
            inputClassName,
            `${!startAdornment && "bu-pl-2"}`,
            `${!endAdornment && "bu-pr-2"}`
          )}
        />
        {endAdornment && (
          <span
            className={
              typeof endAdornment === "string" ? "bu-px-2 bu-text-base bu-font-medium" : ""
            }>
            {endAdornment}
          </span>
        )}
      </div>
    </div>
  );
});

export default TextField;
