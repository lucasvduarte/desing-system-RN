import colors from "@/colors";

type IColorHex = number | string;
type IColorRgba = number;

export type IColor = {
  // The property will be a type of string:
  [key: string]:
    | "black"
    | "white"
    | "grey"
    | "greyText"
    | "greyLight"
    | "greyWhite"
    | "primary"
    | "error"
    | "failed"
    | "success"
    | "disablebutton"
    | "secundary"
    | "transparent"
    | `#${IColorHex}`
    | `rgba(${IColorRgba},${IColorRgba},${IColorRgba},${IColorRgba})`;
};

export type IColors = {
  color?: IColor[keyof IColor];
  bg?: IColor[keyof IColor];
};

export const isColor = (value?: IColor[keyof IColor]) => {
  const valueAux =
    String(value).includes("#") || String(value).includes("rgba");
  return valueAux ? value : colors[value || "transparent"];
};
