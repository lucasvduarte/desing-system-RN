import { createSpaceStyle } from "@/types/space/index.d";
import styled from "styled-components/native";
import { IBox } from "./index.d";

const Box = styled.View<IBox>`
  background-color: ${({ bg }) => bg};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  align-content: ${({ alignContent }) => alignContent};
  display: flex;
  border-width: ${({ bw }) => bw}px;
  ${({ borderColor }) => (borderColor ? ` border-color: ${borderColor}` : "")};
  ${({ bs }) => (bs ? `border-style: ${bs}` : "")};
  ${({ flexD }) => (flexD ? `flex-direction: ${flexD}` : "")};
  ${({ w }) => (w ? `width: ${w}` : "")};
  ${({ h }) => (h ? `height: ${h}` : "")};
  ${({ minW }) => (minW ? `min-width: ${minW}` : "")};
  ${({ minH }) => (minH ? `min-height: ${minH}` : "")};
  ${({ flex }) => (flex ? `flex: ${flex}` : "")};
  ${(props) => createSpaceStyle(props)}
`;

Box.defaultProps = {
  bg: "transparent",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  alignContent: "flex-start",
  bw: 0,
};

export default Box;
