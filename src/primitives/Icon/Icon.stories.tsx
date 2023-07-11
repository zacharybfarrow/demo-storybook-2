import { type StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Icon from "./Icon";
import { ICONLOOKUP, SVGRProps, IconName } from "./iconTypes";

const meta = {
  title: "Primitives/Icon",
  component: Icon,
  argTypes: {
    fill: {
      control: { type: "color" },
    },
    title: {
      control: { type: "text" },
    },
    titleId: {
      control: { type: "text" },
    },
    desc: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {};
