import type { Meta, StoryObj } from "@storybook/react-webpack5";

import SuccessIcon from "../components/Icons/SuccessIcon";

const meta = {
  title: "Components/Icons/SuccessIcon",
  component: SuccessIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
  },
} satisfies Meta<typeof SuccessIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "#FA7436",
  },
};
