import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { fn } from "storybook/test";

import NotificationDialog from "../components/NotificationDialog/NotificationDialog";

const meta = {
  title: "Components/Feedback/NotificationDialog",
  component: NotificationDialog,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        height: "720px",
        inline: false,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "radio",
      options: ["error", "success"],
    },
  },
  args: {
    open: true,
    actionText: "Go back",
    handleClose: fn(),
    handleNextLocation: fn(),
  },
} satisfies Meta<typeof NotificationDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Error: Story = {
  args: {
    type: "error",
    title: "Something went wrong",
    description: "We could not save your changes.",
  },
};

export const Success: Story = {
  args: {
    type: "success",
    title: "Success",
    description: "Your changes have been saved.",
  },
};
