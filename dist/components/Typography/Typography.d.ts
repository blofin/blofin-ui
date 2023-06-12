import React from "react";
export interface TypographyProps {
    /**
     * Typography type
     */
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "body3" | "body4";
    weight: "regular" | "medium" | "bold";
    className?: string;
    children?: React.ReactNode;
}
/**
 * Primary UI component for user interaction
 */
export declare const Typography: ({ variant, weight, className, children, ...props }: TypographyProps) => import("react/jsx-runtime").JSX.Element;
