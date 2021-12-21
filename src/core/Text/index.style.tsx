import { colors } from "../../colors/index";
import styled from "styled-components/native";
import { IText } from "./index.d";
import { isNumberSpace } from "@/types/space/index.d";
import { fontsSize } from "@/types/font/index.d";

const isNumber = (value: any) => {
  return typeof value === "number";
};

const TextComponent = styled.Text<IText>`
  color: ${({ color }) => colors[color || "black"]};
  font-size: ${({ fontSize }) =>
    isNumber(fontSize) ? fontSize : fontsSize[fontSize || "default"]}px;
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
  fontWeight: "normal",
};

export default TextComponent;
