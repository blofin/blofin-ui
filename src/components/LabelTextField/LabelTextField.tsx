import { forwardRef, LegacyRef } from "react";
import useTheme from "../../provider/useTheme";
import { cn } from "../../utils/utils";
import { InputProps } from "../TextField/TextField";
import { Typography } from "../Typography/Typography";
import { InputBgVariants, LabelVariants } from "./styles";

const LabelTextField = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label,
    startAdornment,
    endAdornment,
    type,
    className,
    theme: mode,
    ...otherProps
  } = props;
  const { theme } = useTheme();
  return (
    <label>
      <Typography variant="body4" className={cn(LabelVariants({ theme: mode ? mode : theme }))}>
        {label}
      </Typography>
      <div className={cn(InputBgVariants({ theme: mode ? mode : theme }))}>
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
