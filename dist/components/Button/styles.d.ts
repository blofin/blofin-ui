import { BUITheme } from "../../../types/component";
import { ButtonShape, ButtonSize, ButtonVariant } from "./types";
declare const buttonVariants: (props: {
    variant: ButtonVariant;
    size: ButtonSize;
    theme: BUITheme;
    shape: ButtonShape;
    disabled: boolean;
}) => string;
export default buttonVariants;
