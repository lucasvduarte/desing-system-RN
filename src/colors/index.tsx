import { IColor } from "../types/colors/index.d";

const colors: IColor = {
  black: "#000000",
  white: "#FFFFFF",
  grey: "#D7D7D7",
  greyText: "#ABABAB",
  greyLight: "#8D8D8D",
  greyWhite: "#F5F5F7",
  secundary: "#29BCBA",
  // Buttons and actions
  primary: "#094862",
  disablebutton: "#90AAB1",
  // Error
  error: "#F84F47",
  failed: "#F84835",
  // Success
  success: "#42CD71",
  transparent: "transparent",
};

export const isColor = (value?: IColor[keyof IColor]) => {
  const valueAux =
    String(value).includes("#") || String(value).includes("rgba");
  return valueAux ? value : colors[value || "transparent"];
};

export default colors;
