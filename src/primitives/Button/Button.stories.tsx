import { type Meta, type StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./Button";
import { ButtonVariant } from "../types/common";

// import { expect } from '@storybook/jest';

const meta = {
  title: "Primitives/Button",
  component: Button,
  // tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["PRIMARY", "ACTION", "ACCENT", "DANGER", "SUCCESS", "WARNING"],
    },
    kind: {
      control: { type: "select" },
      options: ["GHOST", "OUTLINE", "SOLID", "TINTED"],
    },
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
    fullWidth: { control: { type: "boolean", default: false } },
    isIconOnly: { control: { type: "boolean", default: false } },
    iconLabel: { type: "string" },
    disabled: { control: { type: "boolean", default: false } },
    icon: {
      control: { type: "select" },
      options: [
        "ARROWBOTTOMLEFT",
        "ARROWBOTTOMRIGHT",
        "ARROWDOWN",
        "ARROWLEFT",
        "ARROWRIGHT",
        "ARROWTOPLEFT",
        "ARROWTOPRIGHT",
        "ARROWUP",
        "AVATAR",
        "CHECKCIRCLED",
        "CROSSCIRCLED",
        "EXCLAMATIONTRIANGLE",
        "EXTERNALLINK",
        "INFOCIRCLED",
        "SHARE1",
        "TRASH",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    kind: "SOLID",
    variant: "PRIMARY",
    onClick: action("onClick"),
    children: "Solid",
  },
};

export const Solid: Story = {
  args: {
    kind: "SOLID",
    variant: "ACTION",
    onClick: action("onClick"),
    children: "Solid",
  },
};

export const Outline: Story = {
  args: {
    kind: "OUTLINE",
    variant: "ACTION",
    onClick: action("onClick"),
    children: "Outline",
  },
};

export const Tinted: Story = {
  args: {
    kind: "TINTED",
    variant: "ACTION",
    onClick: action("onClick"),
    children: "Tinted",
  },
};

export const Ghost: Story = {
  args: {
    kind: "GHOST",
    variant: "ACTION",
    onClick: action("onClick"),
    children: "Ghost",
  },
};

export const Kinds = ({ ...args }: Story) => {
  const commonArgs = { variant: "ACTION", ...args } as Story;
  return (
    <div className="flex flex-wrap max-w-full gap-1">
      <Button {...commonArgs} kind="SOLID">
        Button
      </Button>
      <Button {...commonArgs} kind="OUTLINE">
        Button
      </Button>
      <Button {...commonArgs} kind="TINTED">
        Button
      </Button>
      <Button {...commonArgs} kind="GHOST">
        Button
      </Button>
    </div>
  );
};

export const Sizes = ({ ...args }: Story) => {
  const commonArgs = {
    onClick: action("onClick"),
    variant: "PRIMARY",
    kind: "SOLID",
    ...args,
  } as Story;
  return (
    <div className="flex flex-wrap max-w-full gap-1">
      <Button {...commonArgs} size="XSMALL">
        XSMALL
      </Button>
      <Button {...commonArgs} size="SMALL">
        SMALL
      </Button>
      <Button {...commonArgs} size="MEDIUM">
        MEDIUM
      </Button>
      <Button {...commonArgs} size="LARGE">
        LARGE
      </Button>
      <Button {...commonArgs} size="XLARGE">
        XLARGE
      </Button>
    </div>
  );
};

export const Rounded = ({ ...args }: Story) => {
  const commonArgs = {
    onClick: action("onClick"),
    variant: "ACTION",
    ...args,
  } as Story;
  return (
    <div className="flex flex-wrap max-w-full gap-1">
      <Button {...commonArgs} rounded="SQUARE">
        SQUARE
      </Button>
      <Button {...commonArgs} rounded="SMALL">
        SMALL
      </Button>
      <Button {...commonArgs} rounded="MEDIUM">
        MEDIUM
      </Button>
      <Button {...commonArgs} rounded="LARGE">
        LARGE
      </Button>
      <Button {...commonArgs} rounded="XLARGE">
        XLARGE
      </Button>
      <Button {...commonArgs} rounded="CIRCLE">
        CIRCLE
      </Button>
    </div>
  );
};

export const Variants = ({ ...args }: Story) => {
  const commonArgs = { onClick: action("onClick"), ...args };
  return (
    <div className="flex flex-wrap max-w-full gap-1">
      <Button {...commonArgs} variant="PRIMARY">
        PRIMARY
      </Button>
      <Button {...commonArgs} variant="ACTION">
        ACTION
      </Button>
      <Button {...commonArgs} variant="ACCENT">
        ACCENT
      </Button>
      <Button {...commonArgs} variant="DANGER">
        DANGER
      </Button>
      <Button {...commonArgs} variant="SUCCESS">
        SUCCESS
      </Button>
      <Button {...commonArgs} variant="WARNING">
        WARNING
      </Button>
    </div>
  );
};

export const IconVariants = ({ ...args }: Story) => {
  const commonArgs = {
    onClick: action("onClick"),
    icon: "ARROWRIGHT",
    kind: "OUTLINE",
    ...args,
  } as Story;
  return (
    <div className="flex flex-wrap max-w-full gap-1">
      <Button {...commonArgs} variant="PRIMARY">
        PRIMARY
      </Button>
      <Button {...commonArgs} variant="ACTION">
        ACTION
      </Button>
      <Button {...commonArgs} variant="ACCENT">
        ACCENT
      </Button>
      <Button {...commonArgs} variant="DANGER">
        DANGER
      </Button>
      <Button {...commonArgs} variant="SUCCESS">
        SUCCESS
      </Button>
      <Button {...commonArgs} variant="WARNING">
        WARNING
      </Button>
    </div>
  );
};

export const IconOnlyVariants = ({ ...args }: Story) => {
  const commonArgs = {
    onClick: action("onClick"),
    isIconOnly: true,
    kind: "TINTED",
    ...args,
  } as Story;
  return (
    <div className="flex flex-wrap max-w-full gap-1">
      <Button {...commonArgs} icon="INFOCIRCLED" variant="PRIMARY">
        PRIMARY
      </Button>
      <Button {...commonArgs} icon="SHARE1" variant="ACTION">
        ACTION
      </Button>
      <Button {...commonArgs} icon="AVATAR" variant="ACCENT">
        ACCENT
      </Button>
      <Button {...commonArgs} icon="TRASH" variant="DANGER">
        DANGER
      </Button>
      <Button {...commonArgs} icon="CHECKCIRCLED" variant="SUCCESS">
        SUCCESS
      </Button>
      <Button {...commonArgs} icon="EXCLAMATIONTRIANGLE" variant="WARNING">
        WARNING
      </Button>
    </div>
  );
};
