import React from "react";
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

export interface TypographyProps {
  /**
   * Typography type
   */
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "body3"
    | "body4";
  weight?: "regular" | "medium" | "bold";
  className?: string;
  children?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Typography = ({
  variant = "body3",
  weight = "regular",
  className = "",
  children,
  ...props
}: TypographyProps) => {
  const TypographyTag = TYPEOGRAPHY_TAGS[variant] as TypographyTagType;

  return (
    <TypographyTag
      className={`${cn(TypographyVariants({ variant, weight }))} ${className}`}
      {...props}>
      {children}
    </TypographyTag>
  );
};
