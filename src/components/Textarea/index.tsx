import { LegacyRef, ReactNode, forwardRef } from "react";
import useTheme from "../../provider/useTheme";
import { BUITheme } from "../../types/component";
import { Typography } from "../..";
import { borderStyles, textAreaStyles } from "./style";
import styles from './index.module.scss'

export interface TextareaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  //   variant: InputVariant;
  label?: ReactNode;
  theme?: BUITheme;
  endAdornment?: ReactNode;
  disabled?: boolean;
  error?: boolean;
  textareaClassName?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
  const { theme } = useTheme();

  const { id, disabled, label, endAdornment, theme: mode, ...otherProps } = props;

  return (
    <div>
      {label && typeof label === "string" && (
        <label htmlFor={id ? id : `bui-${label}`}>
          <Typography className="bu-mb-[4px]" variant="body4">{label}</Typography>
        </label>
      )}
      {label && typeof label !== "string" && <div className="bu-mb-1">{label}</div>}
      <div className={borderStyles({ theme: mode ? mode : theme })}>
        <textarea
          id={typeof label === "string" ? (id ? id : `bui-${label}`) : undefined}
          ref={ref as LegacyRef<HTMLTextAreaElement>}
          disabled={disabled}
          rows={4}
          className={`${styles.hideScrollbar} ${textAreaStyles({ theme: mode ? mode : theme })}`}
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
    </div>
  );
});

export default TextArea;
