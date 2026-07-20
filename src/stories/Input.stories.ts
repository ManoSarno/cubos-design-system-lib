import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { fn } from "storybook/test";

import Input from "../components/Input/Input";

const searchIcon =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23FA7436' stroke-width='2' stroke-linecap='round'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='m21 21-4.35-4.35'/%3E%3C/svg%3E";

const meta = {
  title: "Components/Forms/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A labeled input with optional leading or trailing icon. When handleClickIcon is provided, the icon becomes an interactive button.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    iconPosition: {
      control: "radio",
      options: ["left", "right"],
    },
    handleClickIcon: {
      control: false,
      description: "Callback called when the icon is clicked.",
      table: {
        category: "Events",
      },
    },
  },
  args: {
    labelText: "Search",
    labelId: "search",
    placeholder: "Type to search",
    width: 320,
    handleClickIcon: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutIcon: Story = {
  args: {},
};

export const IconLeft: Story = {
  args: {
    icon: searchIcon,
    iconPosition: "left",
  },
};

export const IconRight: Story = {
  args: {
    icon: searchIcon,
    iconPosition: "right",
  },
};
