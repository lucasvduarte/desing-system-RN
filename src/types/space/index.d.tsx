type ISpaceNumber = number;
export type ISpaces = {
  // The property will be a type of string:
  [key: string]:
    | "default"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "xmd"
    | "xlg"
    | "xxlg"
    | `${ISpaceNumber}%`
    | `${ISpaceNumber}px`
    | undefined;
};

export type Space = {
  m?: ISpaces[keyof ISpaces];
  mt?: ISpaces[keyof ISpaces];
  mb?: ISpaces[keyof ISpaces];
  ml?: ISpaces[keyof ISpaces];
  mr?: ISpaces[keyof ISpaces];
  mx?: ISpaces[keyof ISpaces];
  my?: ISpaces[keyof ISpaces];
  p?: ISpaces[keyof ISpaces];
  pt?: ISpaces[keyof ISpaces];
  pb?: ISpaces[keyof ISpaces];
  pl?: ISpaces[keyof ISpaces];
  pr?: ISpaces[keyof ISpaces];
  px?: ISpaces[keyof ISpaces];
  py?: ISpaces[keyof ISpaces];
  br?: ISpaces[keyof ISpaces];
};

export const spaces: ISpaces = {
  default: "0px",
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "20px",
  xmd: "24px",
  xlg: "32px",
  xxlg: "64px",
};

export const isNumberSpace = (value: ISpaces[keyof ISpaces]) => {
  const valueAux = String(value).includes("%") || String(value).includes("px");
  return valueAux ? value : spaces[value || "default"];
};
