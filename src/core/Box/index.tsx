import React, { ReactNode } from "react";
import { useTheme } from "styled-components";
import { IBox } from "./index.d";
import Box from "./index.style";

interface IBoxProps extends IBox {
  children?: ReactNode;
}

const BoxComponent = (props: IBoxProps) => {
  const theme = useTheme();
  const { children } = props;
  return <Box {...props}>{children}</Box>;
};

export default BoxComponent;
