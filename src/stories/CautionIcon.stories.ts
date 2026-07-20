import type { Meta, StoryObj } from "@storybook/react-webpack5";

import CautionIcon from "../components/Icons/CautionIcon";

const meta = {
  title: "Components/Icons/CautionIcon",
  component: CautionIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
  },
} satisfies Meta<typeof CautionIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: "#FA7436",
  },
};
