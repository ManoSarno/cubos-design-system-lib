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
      control: "select",
      options: ["primary", "secondary", "outline"],
    },
    shape: {
      control: "radio",
      options: ["normal", "rounded"],
    },
  },
  args: {
    children: "Button",
    variant: "primary",
    onClick: fn(),
    width: 200,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    shape: "normal",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    shape: "normal",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    shape: "normal",
  },
};

export const RoundedPrimary: Story = {
  args: {
    variant: "primary",
    shape: "rounded",
  },
};

export const RoundedSecondary: Story = {
  args: {
    variant: "secondary",
    shape: "rounded",
  },
};

export const RoundedOutline: Story = {
  args: {
    variant: "outline",
    shape: "rounded",
  },
};
