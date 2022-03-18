import React, { ReactNode } from "react";
import TextComponent from "./index.style";
import { IText } from "./index.d";
import { Platform } from "react-native";

export function applyTestID(id: string) {
  return Platform.OS === "android"
    ? { accessible: true, accessibilityLabel: id }
    : { testID: id };
}

interface Props extends IText {
  children?: ReactNode;
  testID?: string;
}

const Text = (props: Props) => {
  const { children, testID } = props;
  return (
    <TextComponent {...props} testID={testID}>
      {children}
    </TextComponent>
  );
};

export default Text;
