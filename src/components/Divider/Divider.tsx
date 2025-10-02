import { useTheme } from "../../provider/useTheme";
import { BUITheme } from "../../types/component";
import { cn } from "../../utils/utils";
import { DividerVariants, VerticalDividerVariants } from "./styles";

type DividerDirection = "vertical" | "horizontal";

export interface DividerProps {
  direction: DividerDirection;
  theme?: BUITheme;
}

export const Divider = ({ direction = "horizontal", theme: mode }: DividerProps) => {
  const { theme } = useTheme();
  if (direction === "horizontal") {
    return <hr className={`${cn(DividerVariants({ theme: theme ? theme : mode }))}`} />;
  } else {
    return <div className={`${cn(VerticalDividerVariants({ theme: theme ? theme : mode }))}`} />;
  }
};
