import { type StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Icon from "./Icon";
import { ICONLOOKUP, SVGRProps, IconName } from "./iconTypes";

const meta = {
  title: "Primitives/Icon",
  component: Icon,
  argTypes: {
    fill: {
      control: {
        type: "color",
        presetColors: [
          { title: "Primary", color: "#09090b" },
          { title: "Secondary", color: "#fafafa" },
          { title: "Action", color: "#2563eb" },
          { title: "Accent", color: "#facc15" },
          { title: "Danger", color: "#dc2626" },
          { title: "Success", color: "#16a34a" },
          { title: "Warning", color: "#f97316" },
        ],
      },
    },
    height: {
      control: {
        type: "text",
      },
    },
    width: {
      control: { type: "text" },
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
    descId: {
      control: { type: "text" },
    },
    tooltip: {
      control: { type: "boolean", defaultValue: false },
    },
    svgProps: {
      table: {
        disable: true,
      },
    },
    viewBox: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

const commonArgs = {
  fill: "#09090b",
  height: "10em",
  width: "10em",
  viewBox: "0 0 24 24",
  title: "accessibility title",
  titleId: "ariaTitle",
  desc: "accessbility description",
  descId: "ariaDesc",
};

export const Default: Story = {
  args: {
    ...commonArgs,
    name: "E1XIcoFont01",
    tooltip: false,
  },
};

export const WithTooltip: Story = {
  args: {
    ...commonArgs,
    name: "E1XIcoFont01",
    tooltip: true,
  },
};
