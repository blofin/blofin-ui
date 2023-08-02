import React from "react";
import { BUITheme } from "../..";
import useTheme from "../../provider/useTheme";
import { cn } from "../../utils/utils";
import TypographyVariants, { TypographyTagType } from "./styles";

const TYPEOGRAPHY_TAGS = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "p",
  subtitle2: "p",
  body1: "p",
  body2: "p",
  body3: "p",
  body4: "p"
};

export type TypographyTag = keyof typeof TYPEOGRAPHY_TAGS;

export type TypographyWeight = "regular" | "medium" | "bold";

export interface TypographyProps {
  /**
   * Typography type
   */
  variant: TypographyTag;
  weight?: TypographyWeight;
  className?: string;
  children?: React.ReactNode;
  theme?: BUITheme;
  component?: React.ElementType;
}

/**
 * Primary UI component for user interaction
 */
export const Typography = ({
  variant = "body3",
  weight = "regular",
  className = "",
  children,
  theme: mode,
  component,
  ...props
}: TypographyProps) => {
  const { theme } = useTheme();

  const TypographyTag = component ? component : (TYPEOGRAPHY_TAGS[variant] as TypographyTagType);

  return (
    <TypographyTag
      className={cn(TypographyVariants({ variant, weight, theme: mode ? mode : theme }), className)}
      {...props}>
      {children}
    </TypographyTag>
  );
};
