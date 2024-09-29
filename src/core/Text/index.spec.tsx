import React from "react";

import { render } from "@testing-library/react-native";
import Text from "./index";
import colors from "@/colors";

describe("@text: component checks", () => {
  it("should render text passed to children", () => {
    const { queryByText } = render(<Text>Hello Word!</Text>);

    expect(queryByText("Hello Word!")).toBeTruthy();
  });

  it("should render effect text", () => {
    const effectCallback = jest.fn();
    render(<Text>Hello Word update!</Text>);

    expect(effectCallback).toHaveBeenCalledTimes(0);
  });

  it("should render defaultProps styles text ", () => {
    const { getByTestId } = render(<Text testID="textTest">Hello Word!</Text>);
    const foundBodyElement = getByTestId("textTest");
    expect(foundBodyElement.props.style.length).toEqual(1);
    expect(foundBodyElement.props.style[0].textAlign).toEqual("left");
    expect(foundBodyElement.props.style[0].color).toEqual(colors.black);
    expect(foundBodyElement.props.style[0].fontWeight).toEqual("normal");
  });

  it("should render color text passed to children", () => {
    const { getByTestId } = render(
      <Text color="grey" testID="textTest">
        Hello Word!
      </Text>
    );
    const foundBodyElement = getByTestId("textTest");
    expect(foundBodyElement.props.style[0].color).toEqual(colors.grey);
  });
});
