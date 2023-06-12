import { BUITheme } from "../../../types/component";
import { BadgeColor } from "./styles";
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
export declare const Badge: ({ theme, color, decoration, label, }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
