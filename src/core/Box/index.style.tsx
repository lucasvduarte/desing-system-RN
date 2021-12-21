import { isNumberSpace } from "@/types/space/index.d";
import styled from "styled-components/native";
import { IBox } from "./index.d";

const Box = styled.View<IBox>`
  background-color: ${({ bg }) => bg};
  margin-top: ${({ mt }) => isNumberSpace(mt)};
  margin-bottom: ${({ mb }) => isNumberSpace(mb)};
  margin-left: ${({ ml }) => isNumberSpace(ml)};
  margin-right: ${({ mr }) => isNumberSpace(mr)};
  margin-horizontal: ${({ mx }) => isNumberSpace(mx)};
  margin-vertical: ${({ my }) => isNumberSpace(my)};
  padding-top: ${({ pt }) => isNumberSpace(pt)};
  padding-bottom: ${({ pb }) => isNumberSpace(pb)};
  padding-left: ${({ pl }) => isNumberSpace(pl)};
  padding-right: ${({ pr }) => isNumberSpace(pr)};
  padding-horizontal: ${({ px }) => isNumberSpace(px)};
  padding-vertical: ${({ py }) => isNumberSpace(py)};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  align-content: ${({ alignContent }) => alignContent};
  display: flex;
  ${({ flexD }) => (flexD ? `flex-direction: ${flexD}` : "")};
  ${({ w }) => (w ? `width: ${w}` : "")};
  ${({ h }) => (h ? `height: ${h}` : "")};
  ${({ minW }) => (minW ? `min-width: ${minW}` : "")};
  ${({ minH }) => (minH ? `min-height: ${minH}` : "")};
  ${({ flex }) => (flex ? `flex: ${flex}` : "")};
`;

Box.defaultProps = {
  bg: "transparent",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  alignContent: "flex-start",
};

export default Box;
