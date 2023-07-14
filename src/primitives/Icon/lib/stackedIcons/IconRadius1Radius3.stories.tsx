import { type StoryObj } from "@storybook/react";
import IconRadius1Radius3 from "./IconRadius1Radius3";

const meta = {
  title: "Primitives/Icon/Stacked",
  component: IconRadius1Radius3,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof IconRadius1Radius3>;

export const StackedIconDefault: Story = {
  args: {},
};
