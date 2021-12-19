import React from "react";
import TextComponent from "./index.style";
import { useTheme } from "styled-components";

const TextC = () => {
  const theme = useTheme();
  return (
    <TextComponent color="BlueInfo" fontSize="xxl">
      ola mundo
    </TextComponent>
  );
};

export default TextC;
