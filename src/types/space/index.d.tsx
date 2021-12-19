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
    | number
    | string
    | undefined;
};

export type Space = {
  mt?: ISpaces[keyof ISpaces];
  mb?: ISpaces[keyof ISpaces];
  ml?: ISpaces[keyof ISpaces];
  mr?: ISpaces[keyof ISpaces];
  mx?: ISpaces[keyof ISpaces];
  my?: ISpaces[keyof ISpaces];
  pt?: ISpaces[keyof ISpaces];
  pb?: ISpaces[keyof ISpaces];
  pl?: ISpaces[keyof ISpaces];
  pr?: ISpaces[keyof ISpaces];
  px?: ISpaces[keyof ISpaces];
  py?: ISpaces[keyof ISpaces];
};
