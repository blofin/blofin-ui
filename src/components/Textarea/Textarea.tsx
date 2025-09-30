import * as React from "react";
import useTheme from "../../provider/useTheme";
import { BUITheme } from "../../types/component";
import { Typography } from "../Typography/Typography";
import { HelperTextVariants, borderStyles, errorBorderStyles, textAreaStyles } from "./style";
import styles from "./index.module.scss";

export interface TextareaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  //   variant: InputVariant;
  label?: React.ReactNode;
  theme?: BUITheme;
  endAdornment?: React.ReactNode;
  disabled?: boolean;
  error?: boolean;
  textareaClassName?: string;
  helperText?: string;
  row?: number;
  className?: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const { theme } = useTheme();

  const {
    id,
    disabled,
    label,
    endAdornment,
    error,
    theme: mode,
    helperText,
    row = 4,
    className,
    ...otherProps
  } = props;

  return (
    <div>
      {label && typeof label === "string" && (
        <label htmlFor={id ? id : `bui-${label}`}>
          <Typography className="bu-mb-[4px]" variant="body4">
            {label}
          </Typography>
        </label>
      )}
      {label && typeof label !== "string" && <div className="bu-mb-1">{label}</div>}
      <div
        className={
          error
            ? errorBorderStyles({ theme: mode ? mode : theme })
            : borderStyles({ theme: mode ? mode : theme })
        }>
        <textarea
          id={typeof label === "string" ? (id ? id : `bui-${label}`) : undefined}
          ref={ref as React.LegacyRef<HTMLTextAreaElement>}
          disabled={disabled}
          rows={row}
          className={`${styles.hideScrollbar} ${textAreaStyles({
            theme: mode ? mode : theme
          })} ${className}`}
          {...otherProps}></textarea>
        {endAdornment && (
          <span
            className={
              typeof endAdornment === "string" ? "bu-px-2 bu-text-base bu-font-medium" : ""
            }>
            {endAdornment}
          </span>
        )}
      </div>
      {helperText && (
        <div className="bu-mt-1">
          <Typography
            variant="body4"
            className={HelperTextVariants({ theme: mode ? mode : theme })}>
            {helperText}
          </Typography>
        </div>
      )}
    </div>
  );
});

export { TextArea };
