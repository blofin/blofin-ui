import React from "react";
import { Base } from "../../../types/component";
import { ButtonShape, ButtonSize, ButtonVariant } from "./types";
export interface ButtonProps extends Base {
    /**
     * Button type
     */
    variant?: ButtonVariant;
    /**
     * Button contents
     */
    label?: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
    /**
     * Button state
     */
    disabled?: boolean;
    /**
     * Element placed before the children
     */
    startIcon?: React.ReactNode;
    /**
     * Element placed after the children
     */
    endIcon?: React.ReactNode;
    icon?: React.ReactNode;
    size: ButtonSize;
    shape?: ButtonShape;
}
export declare const Button: ({ size, disabled, variant, theme, label, startIcon, endIcon, icon, onClick, shape, className, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
