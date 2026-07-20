import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { Button, Chip, ConfirmDialog, Input, Modal, NotificationDialog } from "../src";

afterEach(cleanup);

describe("Button", () => {
  it("combines variants with consumer attributes", () => {
    const handleClick = vi.fn();

    render(
      <Button
        variant="outline"
        shape="rounded"
        width={200}
        className="custom-button"
        onClick={handleClick}
      >
        Continue
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Continue" });
    expect(button.className).toContain("cubos-button--rounded");
    expect(button.className).toContain("cubos-button--outline");
    expect(button.className).toContain("custom-button");

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledOnce();
  });
});

describe("Input", () => {
  it("connects its label and exposes an accessible icon action", () => {
    const handleClickIcon = vi.fn();

    render(
      <Input
        labelId="search"
        labelText="Search"
        width={320}
        icon="data:image/svg+xml,search"
        handleClickIcon={handleClickIcon}
      />,
    );

    expect(screen.getByLabelText("Search").getAttribute("id")).toBe("search");

    fireEvent.click(screen.getByRole("button", { name: "Input action" }));
    expect(handleClickIcon).toHaveBeenCalledOnce();
  });
});

describe("Chip", () => {
  it("renders the selected visual variant", () => {
    render(<Chip title="Active" width={120} type="filled" />);

    expect(screen.getByText("Active").className).toContain("cubos-chip--filled");
  });
});

describe("dialogs", () => {
  it("does not render closed overlays", () => {
    render(
      <Modal
        open={false}
        width={480}
        height={320}
        btnConfirmText="Confirm"
        btnCancelText="Cancel"
        handleConfirm={vi.fn()}
        handleCancel={vi.fn()}
      />,
    );

    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("uses the provided confirmation labels and handlers", () => {
    const handleConfirm = vi.fn();
    const handleCancel = vi.fn();

    render(
      <ConfirmDialog
        open
        type="error"
        title="Delete item?"
        description="This action cannot be undone."
        btnConfirmText="Delete"
        btnCancelText="Keep item"
        handleConfirm={handleConfirm}
        handleCancel={handleCancel}
      />,
    );

    expect(screen.getByRole("dialog")).toBeDefined();
    fireEvent.click(screen.getByRole("button", { name: "Delete" }));
    fireEvent.click(screen.getByRole("button", { name: "Keep item" }));
    expect(handleConfirm).toHaveBeenCalledOnce();
    expect(handleCancel).toHaveBeenCalledOnce();
  });

  it("runs notification callbacks in navigation order", () => {
    const calls: string[] = [];

    render(
      <NotificationDialog
        open
        type="success"
        title="Saved"
        description="Your changes were saved."
        actionText="Continue"
        handleNextLocation={() => calls.push("navigate")}
        handleClose={() => calls.push("close")}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: "Continue" }));
    expect(calls).toEqual(["navigate", "close"]);
  });
});
