type IColor = {
  // The property will be a type of string:
  [key: string]: string;
};

export const colors: IColor = {
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
};

export type IColors = {
  color?:
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
    | "secundary";

  bg?: string;
};
