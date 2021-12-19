import { colors } from "../../colors/index";
import styled from "styled-components/native";
import { IText } from "./index.d";
import { spaces } from "@/types/space/index.d";
import { fontsSize } from "@/types/font/index.d";

const isNumber = (value: any) => {
  return typeof value === "number";
};

const TextComponent = styled.Text<IText>`
  color: ${({ color }) => colors[color || "black"]};
  font-size: ${({ fontSize }) =>
    isNumber(fontSize) ? fontSize : fontsSize[fontSize || "default"]}px;
  margin-top: ${({ mt }) => (isNumber(mt) ? mt : spaces[mt || "default"])}px;
  margin-bottom: ${({ mb }) => (isNumber(mb) ? mb : spaces[mb || "default"])}px;
  margin-left: ${({ ml }) => (isNumber(ml) ? ml : spaces[ml || "default"])}px;
  margin-right: ${({ mr }) => (isNumber(mr) ? mr : spaces[mr || "default"])}px;
  margin-horizontal: ${({ mx }) =>
    isNumber(mx) ? mx : spaces[mx || "default"]}px;
  margin-vertical: ${({ my }) =>
    isNumber(my) ? my : spaces[my || "default"]}px;
  padding-top: ${({ pt }) => (isNumber(pt) ? pt : spaces[pt || "default"])}px;
  padding-bottom: ${({ pb }) =>
    isNumber(pb) ? pb : spaces[pb || "default"]}px;
  padding-left: ${({ pl }) => (isNumber(pl) ? pl : spaces[pl || "default"])}px;
  padding-right: ${({ pr }) => (isNumber(pr) ? pr : spaces[pr || "default"])}px;
  padding-horizontal: ${({ px }) =>
    isNumber(px) ? px : spaces[px || "default"]}px;
  padding-vertical: ${({ py }) =>
    isNumber(py) ? py : spaces[py || "default"]}px;
  font-weight: ${({ fontWeight }) => fontWeight || "normal"};
  text-align: ${({ textAlign }) => textAlign || "left"};
`;

export default TextComponent;
