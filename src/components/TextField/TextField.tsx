import { LegacyRef, forwardRef } from "react";
import useTheme from "../../provider/useTheme";
import { BUITheme } from "../../types/component";
import { cn } from "../../utils/utils";
import { InputBgVariants, InputVariant } from "../LabelTextField/styles";

export interface InputBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: InputVariant;
  theme?: BUITheme;
  disabled?: boolean;
  error?: boolean;
  inputClassName?: string;
}

const TextField = forwardRef<HTMLInputElement, InputBaseProps>((props, ref) => {
  const {
    variant,
    theme: mode,
    type,
    error,
    disabled,
    className,
    inputClassName,
    ...otherProps
  } = props;
  const { theme } = useTheme();
  return (
    <div className={cn(InputBgVariants({ variant, theme: mode ? mode : theme, error, disabled }))}>
      <div
        className={cn(
          "bu-flex bu-h-[40px] bu-w-full bu-items-center bu-justify-center",
          className
        )}>
        <input
          disabled={disabled}
          type={type}
          {...otherProps}
          ref={ref as LegacyRef<HTMLInputElement>}
          className={cn(
            "bu-flex-1 bu-bg-transparent bu-px-2 focus-visible:bu-outline-0",
            inputClassName
          )}
        />
      </div>
    </div>
  );
});

export default TextField;
