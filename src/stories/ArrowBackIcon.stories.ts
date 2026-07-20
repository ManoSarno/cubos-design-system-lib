import type { Meta, StoryObj } from "@storybook/react-webpack5";

import ArrowBackIcon from "../components/Icons/ArrowBackIcon";

const meta = {
  title: "Components/Icons/ArrowBackIcon",
  component: ArrowBackIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
  },
} satisfies Meta<typeof ArrowBackIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "#FA7436",
  },
};
