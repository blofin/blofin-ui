export enum PLACEMENT {
  top = "top",
  bottom = "bottom",
  topLeft = "top-start",
  topRight = "top-end",
  bottomLeft = "bottom-start",
  bottomRight = "bottom-end",
  left = "left",
  right = "right"
}

export enum OFFSET {
  top = 0,
  bottom = 0,
  topLeft = -5,
  topRight = 5,
  bottomLeft = -5,
  bottomRight = 5,
  left = 0,
  right = 0
}

export const PLACEMENT_REVERSE: Record<string, string> = Object.fromEntries(
  Object.entries(PLACEMENT).map(([key, value]) => [value, key])
);
