import { render, screen } from "@testing-library/react";
import Icon from "./Icon";

describe("renders proper html elements", function () {
  test("renders an svg element to the page", async () => {
    //ARRANGE
    render(<Icon name="E1XIcoFont" />);

    //ACT
    const icon = await screen.getByRole("img");

    //ASSERT
    expect(icon.tagName).toBe("svg");
  });

  test("renders a title element", async () => {
    //ARRANGE
    render(<Icon name="E1XIcoFont" title="test" />);

    //ACT
    const titleElement = await screen.getByTitle("test");

    //ASSERT
    expect(titleElement.tagName).toBe("title");
  });

  test("renders a desc element", async () => {
    //ARRANGE
    render(<Icon name="E1XIcoFont" desc="test" />);

    //ACT
    const icon = await screen.getByRole("img");
    const descElement = icon.getElementsByTagName("desc")[0];

    //ASSERT
    expect(descElement.tagName).toBe("desc");
  });
});
