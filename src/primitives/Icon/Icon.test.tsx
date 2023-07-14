import { render, screen } from "@testing-library/react";
import Icon from "./Icon";

describe("renders proper html elements", function () {
  test("renders an svg element to the page", async () => {
    render(<Icon name="E1XIcoFont" />);

    const icon = await screen.getByRole("img");

    expect(icon.tagName).toBe("svg");
  });

  test("renders a title element", async () => {
    render(<Icon name="E1XIcoFont" title="test" />);

    const titleElement = await screen.getByTitle("test");

    expect(titleElement.tagName).toBe("title");
  });

  test("renders a desc element", async () => {
    render(<Icon name="E1XIcoFont" desc="test" />);

    const icon = await screen.getByRole("img");
    const descElement = icon.getElementsByTagName("desc")[0];

    expect(descElement.tagName).toBe("desc");
  });
});

describe("correct attributes are applied", function () {
  test("default viewbox style is set to '0 0 24 24'", async () => {
    render(<Icon name="E1XIcoFont" />);

    const icon = await screen.getByRole("img");

    expect(icon.getAttribute("viewBox")).toBe("0 0 24 24");
  });

  test("role is set to 'img'", async () => {
    render(<Icon name="E1XIcoFont" data-testid="test" />);

    const icon = await screen.getByTestId("test");

    expect(icon.getAttribute("role")).toBe("img");
  });

  test("svg height attr is set by props", async () => {
    render(<Icon name="E1XIcoFont" height="1em" />);

    const icon = await screen.getByRole("img");

    expect(icon.getAttribute("height")).toBe("1em");
  });

  test("svg width attr is set by props", async () => {
    render(<Icon name="E1XIcoFont" width="1em" />);

    const icon = await screen.getByRole("img");

    expect(icon.getAttribute("width")).toBe("1em");
  });

  test("tooltip is disabled by default", async () => {
    render(<Icon name="E1XIcoFont" />);

    const icon = await screen.getByRole("img");

    expect(icon.classList).toContain("pointer-events-none");
  });

  test("tooltip is enabled by tooltip prop", async () => {
    render(<Icon name="E1XIcoFont" tooltip />);

    const icon = await screen.getByRole("img");

    expect(icon.classList).toContain("pointer-events-auto");
  });
});
