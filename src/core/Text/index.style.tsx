import { isColor } from "../../colors/index";
import styled from "styled-components/native";
import { IText } from "./index.d";
import { createSpaceStyle } from "@/types/space/index.d";
import { isFontSize } from "@/types/font/index.d";

const TextComponent = styled.Text<IText>`
  color: ${({ color }) => isColor(color)};
  font-size: ${({ fontSize }) => isFontSize(fontSize)};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
  ${(props) => createSpaceStyle(props)}
`;

TextComponent.defaultProps = {
  textAlign: "left",
  color: "black",
  fontWeight: "normal",
};

export default TextComponent;
