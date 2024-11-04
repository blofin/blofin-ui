export type BUIComponentSize = "large" | "medium" | "small";

export type BUIComponentColor = "primary" | "success" | "danger" | "warning";

export type BUIComponentType = "info" | "success" | "warning" | "danger";

export type BUITheme = "light" | "dark";

export interface Base {
  size: BUIComponentSize | string;
  theme?: BUITheme;
  className?: string;
}
export interface CustomFields {
  [key: string]: any;
}
