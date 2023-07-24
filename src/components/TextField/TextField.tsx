import { LegacyRef, forwardRef } from "react";
import { cn } from "../../utils/utils";

export interface InputBaseProps extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
}

const TextField = forwardRef<HTMLInputElement, InputBaseProps>((props, ref) => {
  const { type, disabled, className, ...otherProps } = props;
  return (
    <input
      disabled={disabled}
      type={type}
      {...otherProps}
      ref={ref as LegacyRef<HTMLInputElement>}
      className={cn("bu-flex-1 bu-bg-transparent focus-visible:bu-outline-0", className)}
    />
  );
});

export default TextField;
