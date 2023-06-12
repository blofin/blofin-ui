import { BUIComponentColor, BUITheme } from "../../../types/component";
export type BadgeColor = BUIComponentColor | "info" | "secondary";
declare const BadgeVariants: (props: {
    theme?: BUITheme;
    color: BadgeColor;
}) => string;
export default BadgeVariants;
