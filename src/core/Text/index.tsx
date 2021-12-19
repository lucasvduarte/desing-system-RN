import React, { ReactNode } from "react";
import TextComponent from "./index.style";
import { useTheme } from "styled-components";
import { IText } from "./index.d";

interface Props extends IText {
  children?: ReactNode;
}

const TextC = (props: Props) => {
  const { children } = props;
  const theme = useTheme();
  return <TextComponent {...props}>{children}</TextComponent>;
};

export default TextC;
