"use client";

import { ReactNode, forwardRef } from "react";
import { BUITheme, useTheme } from "../..";
import { cn } from "../../utils/utils";
import { RadioButtonInputVariants, RadioButtonLabelVariants } from "./styles";

export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  theme?: BUITheme;
  selected?: string;
  arrow?: "circle" | "check";
}

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>((props, ref) => {
  const {
    label,
    theme: mode,
    id,
    value,
    selected,
    name,
    onChange,
    arrow = "check",
    ...otherProps
  } = props;
  const checked = value === selected;
  const { theme } = useTheme();
  return (
    <div className="bu-group">
      <label
        htmlFor={id ? id : `bui-radiobutton-${label}`}
        className={`${cn(
          RadioButtonLabelVariants({
            theme: mode || theme,
            checked: !!checked,
            arrow,
            disabled: otherProps.disabled || false
          })
        )} bu-flex bu-cursor-pointer bu-items-center bu-gap-[4px]`}>
        <input
          type="radio"
          className={cn(
            RadioButtonInputVariants({
              theme: mode || theme,
              arrow,
              check: checked,
              disabled: otherProps.disabled || false
            })
          )}
          id={id ? id : `bui-radiobutton-${label}`}
          name={name}
          ref={ref}
          value={value}
          {...otherProps}
          checked={checked}
          onChange={onChange}
        />
        <span className="checkmark"></span>
        {label}
      </label>
    </div>
  );
});

export default RadioButton;
