import useTheme from "../../provider/useTheme";
import { BUITheme } from "../../types/component";
import { cn } from "../../utils/utils";
import BadgeVariants, { BadgeColor } from "./styles";

export interface BadgeProps {
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

export const Badge = ({ color = "primary", decoration = true, label }: BadgeProps) => {
  const { theme } = useTheme();
  return (
    <span className={`${cn(BadgeVariants({ theme, color }))}`}>
      {decoration && `• `}
      {label}
    </span>
  );
};
