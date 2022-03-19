import styled from "styled-components/native";
import { IText } from "./index.d";
import { createSpaceStyle } from "@/types/space/index.d";
import { isFontSize } from "@/types/font/index.d";

const TextComponent = styled.Text<IText>`
  color: ${({ color, theme }) => color || theme.colors.black};
  font-size: ${({ fontSize }) => isFontSize(fontSize)};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
  ${(props) => createSpaceStyle(props)}
`;

TextComponent.defaultProps = {
  textAlign: "left",
  fontWeight: "normal",
};

export default TextComponent;
