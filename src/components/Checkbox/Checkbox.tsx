import { ReactNode, forwardRef } from "react";
import { BUITheme, useTheme } from "../..";
import { cn } from "../../utils/utils";
import styles from "./Checkbox.module.scss";
import {
  CheckMarkCheckedStyles,
  CheckMarkVariants,
  CheckboxCheckedStyles,
  CheckboxLabelVariants,
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
              ? disabledMarkStyles()
              : CheckMarkCheckedStyles({
                  theme: mode || theme
                })
            : CheckMarkVariants({
                theme: mode || theme
              })
        )}></span>
      <span
        className={
          checked
            ? disabled
              ? CheckboxLabelVariants({ theme: mode || theme })
              : CheckboxCheckedStyles({ theme: mode || theme })
            : CheckboxLabelVariants({ theme: mode || theme })
        }>
        {label}
      </span>
    </label>
  );
});

export default Checkbox;
