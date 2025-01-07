import { cva } from "class-variance-authority";
import { BUITheme } from "../..";

export type TypographyTagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

export type TypographyWeight = "regular" | "medium" | "bold";

export type TypographyVariantsType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "subtitle3"
  | "body1"
  | "body2"
  | "body3"
  | "body4";

const TypographyVariants = (props: {
  variant: TypographyVariantsType;
  weight: TypographyWeight;
  theme: BUITheme;
}) => {
  return cva("", {
    variants: {
      variant: {
        h1: `bu-text-9xl`,
        h2: `bu-text-8xl`,
        h3: `bu-text-7xl`,
        h4: `bu-text-6xl`,
        h5: `bu-text-5xl`,
        h6: `bu-text-4xl`,
        subtitle1: `bu-text-3xl`,
        subtitle2: `bu-text-2xl`,
        subtitle3: `bu-text-xl`,
        body1: `bu-text-lg`,
        body2: `bu-text-md`,
        body3: `bu-text-base`,
        body4: `bu-text-sm`
      },
      weight: {
        bold: "bu-font-bold",
        medium: "bu-font-medium",
        regular: "bu-font-normal"
      },
      theme: {
        light: "bu-text-light-label",
        dark: "bu-text-dark-label"
      }
    },
    defaultVariants: {
      variant: "body3",
      weight: "regular"
    }
  })(props);
};

export default TypographyVariants;
