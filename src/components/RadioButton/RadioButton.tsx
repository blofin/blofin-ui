import { ReactNode, forwardRef } from "react";
import { BUITheme, useTheme } from "../..";
import { cn } from "../../utils/utils";
import { RadioButtonLabelVariants } from "./styles";

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
        className="bu-relative bu-h-4 bu-w-4 bu-appearance-none bu-rounded-full bu-border bu-border-light-label-60 checked:after:bu-absolute checked:after:bu-left-1/2 checked:after:bu-top-1/2 checked:after:bu-block checked:after:bu-h-2.5 checked:after:bu-w-2.5 checked:after:bu--translate-x-1/2 checked:after:bu--translate-y-1/2 checked:after:bu-transform checked:after:bu-rounded-full checked:after:bu-bg-light-primary dark:bu-border-dark-label-60"
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
