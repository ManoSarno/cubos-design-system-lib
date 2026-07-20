import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { fn } from "storybook/test";

import Button from "../components/Button/Button";
import Modal from "../components/Modal/Modal";
import "./modal.css";

const meta = {
  title: "Components/Overlays/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        height: "500px",
        inline: false,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    open: {
      control: "boolean",
      description: "Controls whether the modal is visible.",
    },
    width: {
      control: { type: "number", min: 280, step: 20 },
      description: "Sets the modal width in pixels.",
    },
    height: {
      control: { type: "number", min: 200, step: 20 },
      description: "Sets the modal height in pixels.",
    },
    children: {
      control: false,
      description: "Receives the modal content.",
    },
  },
  args: {
    open: true,
    width: 500,
    height: 350,
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const handleConfirm = fn();
const handleCancel = fn();

export const Default: Story = {
  args: {
    "aria-labelledby": "modal-title",
    "aria-describedby": "modal-description",
    children: (
      <div className="modal-example">
        <div className="modal-example__content">
          <p className="modal-example__eyebrow">Account settings</p>
          <h2 id="modal-title" className="modal-example__title">
            Save your changes?
          </h2>
          <p id="modal-description" className="modal-example__description">
            Your profile information will be updated immediately and visible
            anywhere your account is used.
          </p>
        </div>

        <div className="modal-example__actions">
          <Button variant="outline" height={48} onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" height={48} onClick={handleConfirm}>
            Save changes
          </Button>
        </div>
      </div>
    ),
  },
};

export const Compact: Story = {
  args: {
    width: 400,
    height: 250,
    "aria-labelledby": "compact-modal-title",
    "aria-describedby": "compact-modal-description",
    children: (
      <div className="modal-example">
        <div className="modal-example__content">
          <h2 id="compact-modal-title" className="modal-example__title">
            Delete draft?
          </h2>
          <p
            id="compact-modal-description"
            className="modal-example__description"
          >
            This action cannot be undone.
          </p>
        </div>

        <div className="modal-example__actions">
          <Button variant="outline" height={44} onClick={handleCancel}>
            Keep draft
          </Button>
          <Button variant="secondary" height={44} onClick={handleConfirm}>
            Delete
          </Button>
        </div>
      </div>
    ),
  },
};
