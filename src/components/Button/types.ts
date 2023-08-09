import { BUIComponentSize } from "../../types/component";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "text"
  | "ghost"
  | "info"
  | "buy"
  | "sell";

export type ButtonSize = BUIComponentSize | "max";

export type ButtonShape = "normal" | "circle";
