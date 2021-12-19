export type Font = {
  fontSize?: "default" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | number;
  fontWeight?: "normal" | "bold" | "300" | "400" | "500" | "600" | "700";
  textAlign?: "left" | "auto" | "center" | "justify" | "right";
};

type ISpaces = {
  [key: string]: number;
};

export const fontsSize: ISpaces = {
  default: 16,
  xs: 8,
  sm: 12,
  md: 20,
  lg: 24,
  xl: 32,
  xxl: 64,
};
