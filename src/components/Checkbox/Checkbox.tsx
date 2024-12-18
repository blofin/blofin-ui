import { ReactNode, forwardRef } from "react";
import { BUITheme, useTheme } from "../..";
import { cn } from "../../utils/utils";
import styles from "./Checkbox.module.scss";
import {
  CheckedMarkCheckedStyles,
  CheckboxCheckedStyles,
  CheckboxDisabledLabelVariants,
  UncheckedboxLabelVariants,
  UncheckedMarkCheckedStyles,
  disabledMarkStyles
} from "./styles";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  theme?: BUITheme;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { label, theme: mode, id, checked, onChange, disabled, ...otherProps } = props;
  const { theme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange && !disabled) {
      onChange(e);
    }
  };

  return (
    <label htmlFor={id ? id : `bui-checkbox-${label}`} className={styles.container}>
      <input
        type="checkbox"
        id={id ? id : `bui-checkbox-${label}`}
        ref={ref}
        {...otherProps}
        checked={checked}
        onChange={handleChange}
      />
      <span
        className={cn(
          styles.checkmark,
          checked
            ? disabled
              ? disabledMarkStyles({ theme: mode || theme })
              : CheckedMarkCheckedStyles({
                  theme: mode || theme
                })
            : disabled
            ? disabledMarkStyles({ theme: mode || theme })
            : UncheckedMarkCheckedStyles({
                theme: mode || theme
              })
        )}></span>
      <span
        className={
          checked
            ? disabled
              ? CheckboxDisabledLabelVariants({ theme: mode || theme })
              : CheckboxCheckedStyles({ theme: mode || theme })
            : disabled
            ? CheckboxDisabledLabelVariants({ theme: mode || theme })
            : UncheckedboxLabelVariants({ theme: mode || theme })
        }>
        {label}
      </span>
    </label>
  );
});

export default Checkbox;
