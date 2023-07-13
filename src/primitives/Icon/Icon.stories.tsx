import { type StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Icon from "./Icon";
import { ICONLOOKUP, SVGRProps, IconName } from "./iconTypes";
import { MainColors } from "../../atoms/atoms";

const presetColors = [
  { title: "Primary", color: MainColors["PRIMARY"] },
  { title: "Secondary", color: MainColors["SECONDARY"] },
  { title: "Action", color: MainColors["ACTION"] },
  { title: "Accent", color: MainColors["ACCENT"] },
  { title: "Danger", color: MainColors["DANGER"] },
  { title: "Success", color: MainColors["SUCCESS"] },
  { title: "Warning", color: MainColors["WARNING"] },
];

const meta = {
  title: "Primitives/Icon",
  component: Icon,
  argTypes: {
    name: {
      control: {
        type: "select",
        options: Array.from(ICONLOOKUP.keys()),
      },
    },
    fill: {
      control: {
        type: "color",
        presetColors: [...presetColors],
      },
    },
    backgroundColor: {
      control: {
        type: "color",
        presetColors: [...presetColors],
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

export const Colors = ({ ...args }: Story) => {
  return (
    <div className="flex flex-wrap max-w-full gap-1 flex-row">
      <Icon
        {...commonArgs}
        name="E1XIcoFont10"
        backgroundColor={MainColors["PRIMARY"]}
        fill={MainColors["SECONDARY"]}
      />
      <Icon
        {...commonArgs}
        name="TruIcon129"
        backgroundColor={MainColors["ACTION"]}
        fill={MainColors["SECONDARY"]}
      />
      <Icon
        {...commonArgs}
        name="TruIcon01"
        backgroundColor={MainColors["SUCCESS"]}
        fill={MainColors["SECONDARY"]}
      />
      <Icon {...commonArgs} name="SvgExports339" fill={MainColors["DANGER"]} />
      <Icon
        {...commonArgs}
        name="TruIcon13"
        backgroundColor={MainColors["WARNING"]}
      />
      <Icon
        {...commonArgs}
        name="E1XIcoFont299"
        backgroundColor={MainColors["ACCENT"]}
        fill={MainColors["ACTION"]}
      />
      <Icon {...commonArgs} name="E1XIcoFont132" fill={MainColors["ACTION"]} />
      <Icon {...commonArgs} name="E1XIcoFont399" />
    </div>
  ) as Story;
};
