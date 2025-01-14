import { BUIComponentSize } from "../../types/component";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "text"
  | "ghost"
  | "ghost2"
  | "info"
  | "buy"
  | "sell"
  | "function";

export type ButtonSize = BUIComponentSize | "max" | "m-small";

export type ButtonShape = "normal" | "circle";

export type LoadingType = "default" | "refresh";
