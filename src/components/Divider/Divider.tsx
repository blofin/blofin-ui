import { BUITheme } from "../../types/component";
import { cn } from "../../utils/utils";
import { DividerVariants } from "./styles";

export interface DividerProps {
  /**
   * BUI theme
   */
  theme?: BUITheme;
}

export const Divider = ({ theme = "light" }: DividerProps) => {
  return <hr className={`${cn(DividerVariants({ theme }))}`} />;
};
