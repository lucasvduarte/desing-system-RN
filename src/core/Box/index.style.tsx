import { spaces } from "@/types/space/index.d";
import styled from "styled-components/native";
import { IBox } from "./index.d";

const isNumber = (value: unknown) => {
  return typeof value === "number";
};

const Box = styled.View<IBox>`
  background-color: ${({ bg }) => bg || "transparent"};
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
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  align-content: ${({ alignContent }) => alignContent || "flex-start"};
  display: flex;
  ${({ flexD }) => (flexD ? `flex-direction: ${flexD}` : "")};
  ${({ w }) => (w ? `width: ${w}` : "")};
  ${({ h }) => (h ? `height: ${h}` : "")};
  ${({ minW }) => (minW ? `min-width: ${minW}` : "")};
  ${({ minH }) => (minH ? `min-height: ${minH}` : "")};
  ${({ flex }) => (flex ? `flex: ${flex}` : "")};
`;

export default Box;
