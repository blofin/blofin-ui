import { ReactNode, forwardRef } from "react";
import { BUITheme } from "../..";
import { cn } from "../../utils/utils";
import { CheckboxLabelVariants } from "./styles";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  theme?: BUITheme;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { label, theme = "light", checked, onChange, ...otherProps } = props;
  return (
    <div className="bu-flex bu-items-center bu-gap-2">
      <input
        type="checkbox"
        id={`bui-checkbox-${label}`}
        ref={ref}
        {...otherProps}
        checked={checked}
        onChange={onChange}
      />
      <label
        htmlFor={`bui-checkbox-${label}`}
        className={cn(CheckboxLabelVariants({ theme, checked: !!checked }))}>
        {label}
      </label>
    </div>
  );
});

export default Checkbox;
