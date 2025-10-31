import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { BUITheme, useTheme } from "../..";
import { cn } from "../../utils/utils";
import styles from "./Checkbox.module.scss";
import {
  CheckboxCheckedStyles,
  CheckboxDisabledLabelVariants,
  UncheckedboxLabelVariants,
  CheckboxContainerSizeStyles
} from "./styles";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: ReactNode;
  theme?: BUITheme;
  size?: "small" | "medium";
  customSize?: {
    width: number;
    height: number;
  };
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    label,
    theme: mode,
    id,
    checked,
    onChange,
    disabled,
    size = "small",
    customSize,
    ...otherProps
  } = props;
  const { theme } = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange && !disabled) {
      onChange(e);
    }
  };

  // 根据状态渲染对应的 SVG
  const renderCheckboxSvg = () => {
    const currentTheme = mode || theme;
    // 如果有自定义尺寸，使用自定义尺寸；否则使用预设尺寸
    const svgWidth = customSize?.width || (size === "medium" ? 18 : 10);
    const svgHeight = customSize?.height || (size === "medium" ? 18 : 10);

    // 白色主题 + 选中 + 未禁用
    if (currentTheme === "light" && checked && !disabled) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={svgWidth} height={svgHeight} viewBox="0 0 12 12" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M1.86667 0C0.835735 0 0 0.835735 0 1.86667V10.1333C0 11.1643 0.835735 12 1.86667 12H10.1333C11.1643 12 12 11.1643 12 10.1333V1.86667C12 0.835735 11.1643 0 10.1333 0H1.86667ZM5.33459 8.66642L10.0487 3.95239L9.10586 3.0096L5.33459 6.78084L3.449 4.89518L2.50619 5.83805L5.33459 8.66642Z" fill="#FF8800"/>
        </svg>
      );
    }
    
    // 白色主题 + 禁用
    if (currentTheme === "light" && disabled) {
      if (checked) {
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={svgWidth} height={svgHeight} viewBox="0 0 12 12" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.86667 0C0.835735 0 0 0.835735 0 1.86667V10.1333C0 11.1643 0.835735 12 1.86667 12H10.1333C11.1643 12 12 11.1643 12 10.1333V1.86667C12 0.835735 11.1643 0 10.1333 0H1.86667ZM5.33459 8.66642L10.0487 3.95239L9.10586 3.0096L5.33459 6.78084L3.449 4.89518L2.50619 5.83805L5.33459 8.66642Z" fill="#0A0A0A" fillOpacity="0.2"/>
          </svg>
        );
      } else {
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={svgWidth} height={svgHeight} viewBox="0 0 12 12" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.1333 1.33333H1.86667C1.57211 1.33333 1.33333 1.57211 1.33333 1.86667V10.1333C1.33333 10.4279 1.57211 10.6667 1.86667 10.6667H10.1333C10.4279 10.6667 10.6667 10.4279 10.6667 10.1333V1.86667C10.6667 1.57211 10.4279 1.33333 10.1333 1.33333ZM1.86667 0C0.835735 0 0 0.835735 0 1.86667V10.1333C0 11.1643 0.835735 12 1.86667 12H10.1333C11.1643 12 12 11.1643 12 10.1333V1.86667C12 0.835735 11.1643 0 10.1333 0H1.86667Z" fill="#0A0A0A" fillOpacity="0.4"/>
          </svg>
        );
      }
    }
    
    // 白色主题 + 未选中 + 未禁用
    if (currentTheme === "light" && !checked && !disabled) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={svgWidth} height={svgHeight} viewBox="0 0 12 12" fill="none" className={styles.unchecked}>
          <path fillRule="evenodd" clipRule="evenodd" d="M10.1333 1.33333H1.86667C1.57211 1.33333 1.33333 1.57211 1.33333 1.86667V10.1333C1.33333 10.4279 1.57211 10.6667 1.86667 10.6667H10.1333C10.4279 10.6667 10.6667 10.4279 10.6667 10.1333V1.86667C10.6667 1.57211 10.4279 1.33333 10.1333 1.33333ZM1.86667 0C0.835735 0 0 0.835735 0 1.86667V10.1333C0 11.1643 0.835735 12 1.86667 12H10.1333C11.1643 12 12 11.1643 12 10.1333V1.86667C12 0.835735 11.1643 0 10.1333 0H1.86667Z" fill="#0A0A0A" fillOpacity="0.4"/>
        </svg>
      );
    }
    
    // 黑色主题 + 选中 + 未禁用
    if (currentTheme === "dark" && checked && !disabled) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={svgWidth} height={svgHeight} viewBox="0 0 12 12" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M1.86667 0C0.835735 0 0 0.835735 0 1.86667V10.1333C0 11.1643 0.835735 12 1.86667 12H10.1333C11.1643 12 12 11.1643 12 10.1333V1.86667C12 0.835735 11.1643 0 10.1333 0H1.86667ZM5.33459 8.66642L10.0487 3.95239L9.10586 3.0096L5.33459 6.78084L3.449 4.89518L2.50619 5.83805L5.33459 8.66642Z" fill="#FCFDFF"/>
        </svg>
      );
    }
    
    // 黑色主题 + 禁用
    if (currentTheme === "dark" && disabled) {
      if (checked) {
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={svgWidth} height={svgHeight} viewBox="0 0 12 12" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.86667 0C0.835735 0 0 0.835735 0 1.86667V10.1333C0 11.1643 0.835735 12 1.86667 12H10.1333C11.1643 12 12 11.1643 12 10.1333V1.86667C12 0.835735 11.1643 0 10.1333 0H1.86667ZM5.33459 8.66642L10.0487 3.95239L9.10586 3.0096L5.33459 6.78084L3.449 4.89518L2.50619 5.83805L5.33459 8.66642Z" fill="#EBECF5" fillOpacity="0.2"/>
          </svg>
        );
      } else {
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width={svgWidth} height={svgHeight} viewBox="0 0 12 12" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.1333 1.33333H1.86667C1.57211 1.33333 1.33333 1.57211 1.33333 1.86667V10.1333C1.33333 10.4279 1.57211 10.6667 1.86667 10.6667H10.1333C10.4279 10.6667 10.6667 10.4279 10.6667 10.1333V1.86667C10.6667 1.57211 10.4279 1.33333 10.1333 1.33333ZM1.86667 0C0.835735 0 0 0.835735 0 1.86667V10.1333C0 11.1643 0.835735 12 1.86667 12H10.1333C11.1643 12 12 11.1643 12 10.1333V1.86667C12 0.835735 11.1643 0 10.1333 0H1.86667Z" fill="#EBECF5" fillOpacity="0.4"/>
          </svg>
        );
      }
    }
    
    // 黑色主题 + 未选中 + 未禁用
    if (currentTheme === "dark" && !checked && !disabled) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={svgWidth} height={svgHeight} viewBox="0 0 12 12" fill="none" className={styles.unchecked}>
          <path fillRule="evenodd" clipRule="evenodd" d="M10.1333 1.33333H1.86667C1.57211 1.33333 1.33333 1.57211 1.33333 1.86667V10.1333C1.33333 10.4279 1.57211 10.6667 1.86667 10.6667H10.1333C10.4279 10.6667 10.6667 10.4279 10.6667 10.1333V1.86667C10.6667 1.57211 10.4279 1.33333 10.1333 1.33333ZM1.86667 0C0.835735 0 0 0.835735 0 1.86667V10.1333C0 11.1643 0.835735 12 1.86667 12H10.1333C11.1643 12 12 11.1643 12 10.1333V1.86667C12 0.835735 11.1643 0 10.1333 0H1.86667Z" fill="#EBECF5" fillOpacity="0.4"/>
        </svg>
      );
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
        className={cn(styles.checkmark, !customSize && CheckboxContainerSizeStyles({ size }))}
        style={customSize ? { width: `${customSize.width}px`, height: `${customSize.height}px` } : undefined}
      >
        {renderCheckboxSvg()}
      </span>
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
