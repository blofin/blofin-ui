import { ReactNode, forwardRef } from "react";
import { BUITheme, useTheme } from "../..";
import { cn } from "../../utils/utils";
import styles from "./Checkbox.module.scss";
import { CheckboxLabelVariants } from "./styles";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  theme?: BUITheme;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { label, theme: mode, id, checked, onChange, ...otherProps } = props;
  const { theme } = useTheme();
  return (
    <label htmlFor={id ? id : `bui-checkbox-${label}`} className={styles.container}>
      <input
        type="checkbox"
        id={id ? id : `bui-checkbox-${label}`}
        ref={ref}
        {...otherProps}
        checked={checked}
        onChange={onChange}
      />
      <span className={styles.checkmark}></span>
      <span className={cn(CheckboxLabelVariants({ theme: mode || theme, checked: !!checked }))}>
        {label}
      </span>
    </label>
  );
});

export default Checkbox;
