import type { Meta, StoryObj } from "@storybook/react-webpack5";

import Chip from "../components/Chip/Chip";

const meta = {
  title: "Components/Data Display/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "radio",
      options: ["filled", "outlined"],
    },
    color: { control: "color" },
    textColor: { control: "color" },
  },
  args: {
    title: "Active",
    width: 120,
    color: "#FA7436",
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    textColor: "#FFFFFF",
    type: "filled",
  },
};

export const Outlined: Story = {
  args: {
    type: "outlined",
  },
};
