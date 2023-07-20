import { forwardRef, LegacyRef } from "react";
import { cn } from "../../utils/utils";
import { InputProps } from "../TextField/TextField";
import { Typography } from "../Typography/Typography";

const LabelTextField = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, startAdornment, endAdornment, type, className, ...otherProps } = props;
  return (
    <label>
      <Typography variant="body4" className="bu-mb-1 bu-text-light-label-60">
        {label}
      </Typography>
      <div className="bu-rounded bu-bg-light-fill-secondary">
        <div className="bu-flex bu-h-[40px] bu-w-full bu-items-center bu-justify-center">
          <span className="bu-px-2">{startAdornment}</span>
          <input
            type={type}
            {...otherProps}
            ref={ref as LegacyRef<HTMLInputElement>}
            className={cn("bu-flex-1 bu-bg-transparent focus-visible:bu-outline-0", className)}
          />
          <span className="bu-px-2">{endAdornment}</span>
        </div>
      </div>
    </label>
  );
});

export default LabelTextField;
