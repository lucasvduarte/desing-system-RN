import { isColor } from "../colors/index";
import styled from "styled-components/native";
import { IText } from "./index.d";
import { isNumberSpace } from "@/types/space/index.d";
import { isFontSize } from "@/types/font/index.d";

const TextComponent = styled.Text<IText>`
  color: ${({ color }) => isColor(color)};
  font-size: ${({ fontSize }) => isFontSize(fontSize)};
  margin: ${({ m }) => isNumberSpace(m)};
  margin-top: ${({ mt }) => isNumberSpace(mt)};
  margin-bottom: ${({ mb }) => isNumberSpace(mb)};
  margin-left: ${({ ml }) => isNumberSpace(ml)};
  margin-right: ${({ mr }) => isNumberSpace(mr)};
  margin-horizontal: ${({ mx }) => isNumberSpace(mx)};
  margin-vertical: ${({ my }) => isNumberSpace(my)};
  padding: ${({ p }) => isNumberSpace(p)};
  padding-top: ${({ pt }) => isNumberSpace(pt)};
  padding-bottom: ${({ pb }) => isNumberSpace(pb)};
  padding-left: ${({ pl }) => isNumberSpace(pl)};
  padding-right: ${({ pr }) => isNumberSpace(pr)};
  padding-horizontal: ${({ px }) => isNumberSpace(px)};
  padding-vertical: ${({ py }) => isNumberSpace(py)};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
`;

TextComponent.defaultProps = {
  textAlign: "left",
  color: "black",
  fontWeight: "normal",
};

export default TextComponent;
