import { ReactNode, forwardRef } from "react";
import { BUITheme, useTheme } from "../..";
import { cn } from "../../utils/utils";
import { RadioButtonInputVariants, RadioButtonLabelVariants } from "./styles";

export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  theme?: BUITheme;
  selected?: string;
}

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>((props, ref) => {
  const { label, theme: mode, id, value, selected, name, onChange, ...otherProps } = props;
  const checked = value === selected;
  const { theme } = useTheme();
  return (
    <div className="bu-flex bu-items-center bu-gap-2">
      <input
        type="radio"
        className={cn(RadioButtonInputVariants({ theme: mode || theme }))}
        id={id ? id : `bui-radiobutton-${label}`}
        name={name}
        ref={ref}
        value={value}
        {...otherProps}
        checked={checked}
        onChange={onChange}
      />
      <label
        htmlFor={id ? id : `bui-radiobutton-${label}`}
        className={cn(RadioButtonLabelVariants({ theme: mode || theme, checked: !!checked }))}>
        {label}
      </label>
    </div>
  );
});

export default RadioButton;
