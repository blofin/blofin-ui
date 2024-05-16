import { ReactNode } from "react";
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
  label: ReactNode;

  theme?: BUITheme;
}

export const Badge = ({ color = "primary", decoration = true, label, theme: mode }: BadgeProps) => {
  const { theme } = useTheme();
  return (
    <span className={`${cn(BadgeVariants({ theme: mode ? mode : theme, color }))}`}>
      {decoration && `• `}
      {label}
    </span>
  );
};
