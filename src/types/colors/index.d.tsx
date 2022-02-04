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
