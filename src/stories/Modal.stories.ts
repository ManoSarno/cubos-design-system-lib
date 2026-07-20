import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { fn } from "storybook/test";

import Modal from "../components/Modal/Modal";

const meta = {
  title: "Components/Overlays/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        height: "450px",
        inline: false,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    handleConfirm: fn(),
    handleCancel: fn(),
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: {
    open: true,
    width: 480,
    height: 280,
    btnConfirmText: "Confirm",
    btnCancelText: "Cancel",
    children: "Review the information before confirming.",
  },
};
