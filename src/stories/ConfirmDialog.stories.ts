import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { fn } from "storybook/test";

import ConfirmDialog from "../components/ConfirmDialog/ConfirmDialog";

const meta = {
  title: "Components/Feedback/ConfirmDialog",
  component: ConfirmDialog,
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
    title: "Confirm action",
    description: "Are you sure you want to continue?",
    btnConfirmText: "Confirm",
    btnCancelText: "Cancel",
    handleConfirm: fn(),
    handleCancel: fn(),
  },
} satisfies Meta<typeof ConfirmDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Error: Story = {
  args: {
    type: "error",
  },
};

export const Success: Story = {
  args: {
    type: "success",
  },
};
