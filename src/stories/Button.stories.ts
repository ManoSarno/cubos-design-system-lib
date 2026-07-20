import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { fn } from "storybook/test";

import Button from "../components/Button/Button";

const meta = {
  title: "Components/Actions/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["normal", "rounded"],
    },
    colors: {
      control: "select",
      options: ["orange", "white", "orange__outline"],
    },
  },
  args: {
    children: "Button",
    colors: "orange",
    onClick: fn(),
    width: 200,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalOrange: Story = {
  args: {
    variant: "normal",
    colors: "orange",
  },
};

export const NormalWhite: Story = {
  args: {
    variant: "normal",
    colors: "white",
  },
};

export const NormalOutlined: Story = {
  args: {
    variant: "normal",
    colors: "orange__outline",
  },
};

export const RoundedOrange: Story = {
  args: {
    variant: "rounded",
    colors: "orange",
  },
};

export const RoundedWhite: Story = {
  args: {
    variant: "rounded",
    colors: "white",
  },
};

export const RoundedOutlined: Story = {
  args: {
    variant: "rounded",
    colors: "orange__outline",
  },
};
