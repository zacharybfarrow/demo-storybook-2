import { type Meta, type StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./Button";

// import { expect } from '@storybook/jest';

const meta = {
  title: "Primitives/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    fullWidth: { type: "boolean" },
    isIconOnly: { type: "boolean" },
    iconLabel: { type: "string" },
    rounded: {
      control: { type: "select" },
      options: [
        "XSMALL",
        "SMALL",
        "MEDIUM",
        "LARGE",
        "XLARGE",
        "XXLARGE",
        "CIRCLE",
        "SQUARE",
      ],
    },
    variant: {
      control: { type: "select" },
      options: ["PRIMARY", "ACTION", "ACCENT", "DANGER", "SUCCESS", "WARNING"],
    },
    kind: {
      control: { type: "select" },
      options: ["GHOST", "OUTLINE", "SOLID", "TINTED"],
    },
    icon: {
      control: { type: "select" },
      options: [
        "ArrowBottomLeft",
        "ArrowBottomRight",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "ArrowTopLeft",
        "ArrowTopRight",
        "ArrowUp",
        "InfoCircled",
        "Avatar",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<Meta>;

export const Solid: Story = {
  args: {
    kind: "SOLID",
    variant: "ACTION",
    onClick: action("onClick"),
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    kind: "OUTLINE",
    variant: "ACTION",
    onClick: action("onClick"),
    children: "Button",
  },
};

export const Ghost: Story = {
  args: {
    kind: "GHOST",
    variant: "ACTION",
    onClick: action("onClick"),
    children: "Button",
  },
};

export const Tinted: Story = {
  args: {
    kind: "TINTED",
    variant: "ACTION",
    onClick: action("onClick"),
    children: "Button",
  },
};
