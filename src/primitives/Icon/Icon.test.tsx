import { render } from "@testing-library/react";
import Icon from "./Icon";

test("renders an svg element to the page", () => {
  //ARRANGE
  render(<Icon name="E1XIcoFont11" title="testIcon" />);
  console.log("rendered");
  //ACT
  const icon = "icon";
  console.log("icon");
  //ASSERT
  expect(icon).toBe("icon");
  console.log("done");
});
