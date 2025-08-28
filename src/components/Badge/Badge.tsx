"use client";

import React, { FC } from "react";
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
  label: React.ReactNode;

  theme?: BUITheme;

  startIcon?: React.ReactNode;

  endIcon?: React.ReactNode;
}

export const Badge = ({
  color = "primary",
  decoration = true,
  label,
  theme: mode,
  startIcon,
  endIcon
}: BadgeProps) => {
  const { theme } = useTheme();
  return (
    <span className={`${cn(BadgeVariants({ theme: mode ? mode : theme, color }))}`}>
      {startIcon ? startIcon : decoration ? `• ` : null}
      {label}
      {endIcon}
    </span>
  );
};
