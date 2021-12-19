type IColors = {
  // The property will be a type of string:
  [key: string]: string;
};

export const colors: IColors = {
  BlueInfo: "#2760E3",
  //  First Colors
  Black: "#000000",
  BlueDark: "#001970",
  Blue: "#0037F9",
  White: "#FFFFFF",
  Grey: "#D7D7D7",
  GreyText: "#ABABAB",
  GreyLight: "#8D8D8D",
  GreyWhite: "#F5F5F7",
  // Skeleton
  GreySkeleton: "#E9E9E9",
  FeedBack: "#0090FF",
  BgNotification: "#0E2B38",
  BtnColor: "#033C59",
  BtnColorCTA: "#46D39A",
  // Background
  Background: "#F5FBFF",
  // Fonte destaque
  Green: "#46D39A",
  GreenTurque: "#29BCBA",
  // Fontes claras
  ClearFont: "#ABEDEC",
  // Titulos
  BlackParagraph: "#03324A",
  // Subtitulos
  SubtitleColor: "#0675AC",
  GreenDark: "#094862",
  // Second Colors
  BlackSecondary: "#343434",
  TextPageFamily: "#03324A",
  // Placeholder
  GreyDark: "#8D8D8D",
  // Buttons and actions
  Primary: "#094862",
  // Fontes Médias
  PrimaryDetails: "#1C7585",
  // Green tonalites
  GreenPositive: "#52C41A",
  // Links clicáveis
  BlueLink: "#0896DD",
  // Tooltip bg
  BlueTooltip: "#033C59",
  // Disabele
  Disablebutton: "#90AAB1",
  // Error
  Error: "#F84F47",
  Failed: "#F84835",
  // Success
  Success: "#42CD71",
  Sucess: "#08DF85",
};

type ISpaces = {
  // The property will be a type of string:
  [key: string]: number;
};

export const spaces: ISpaces = {
  default: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xmd: 24,
  xlg: 32,
  xxlg: 64,
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
