import { BUITheme } from "../../../types/component";
import { cn } from "../../utils/utils";
import BadgeVariants, { BadgeColor } from "./styles";

export interface BadgeProps {
  /**
   * BUI theme
   */
  theme?: BUITheme;
  /**
   * Badge color
   */
  color?: BadgeColor;
  /**
   * Badge contents
   */
  decoration?: boolean;
  /**
   * Badge contents
   */
  label: string;
}

export const Badge = ({
  theme = "light",
  color = "primary",
  decoration = true,
  label,
}: BadgeProps) => {
  return (
    <span className={`${cn(BadgeVariants({ theme, color }))}`}>
      {decoration && `• `}
      {label}
    </span>
  );
};
