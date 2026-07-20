import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

import { Button, Chip, ConfirmDialog, Input, Modal, NotificationDialog } from "../src";

function App() {
  const [activeDialog, setActiveDialog] = useState<
    "notification" | "confirmation" | "modal" | null
  >(null);

  const closeDialog = () => setActiveDialog(null);

  return (
    <main
      style={{
        display: "grid",
        gap: 20,
        maxWidth: 520,
        margin: "0 auto",
        padding: 32,
      }}
    >
      <h1>Cubos Design System</h1>
      <Chip title="Interactive example" width={180} color="#fa7436" />
      <Input labelId="example-name" labelText="Name" width={320} placeholder="Enter your name" />

      <Button
        variant="outline"
        shape="normal"
        width={320}
        onClick={() => setActiveDialog("notification")}
      >
        Open notification
      </Button>
      <Button
        variant="primary"
        shape="normal"
        width={320}
        onClick={() => setActiveDialog("confirmation")}
      >
        Open confirmation
      </Button>
      <Button
        variant="secondary"
        shape="normal"
        width={320}
        onClick={() => setActiveDialog("modal")}
      >
        Open modal
      </Button>

      <NotificationDialog
        open={activeDialog === "notification"}
        type="success"
        title="Changes saved"
        description="Your information was updated successfully."
        actionText="Close"
        handleClose={closeDialog}
      />

      <ConfirmDialog
        open={activeDialog === "confirmation"}
        type="error"
        title="Confirm action"
        description="Are you sure you want to continue?"
        btnConfirmText="Confirm"
        btnCancelText="Cancel"
        handleConfirm={closeDialog}
        handleCancel={closeDialog}
      />

      <Modal
        open={activeDialog === "modal"}
        width={480}
        height={320}
        aria-labelledby="example-modal-title"
        aria-describedby="example-modal-description"
      >
        <div
          style={{
            display: "flex",
            minHeight: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <div>
            <h2 id="example-modal-title">Save your changes?</h2>
            <p id="example-modal-description">
              Your profile information will be updated immediately.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <Button variant="outline" height={48} onClick={closeDialog}>
              Cancel
            </Button>
            <Button variant="primary" height={48} onClick={closeDialog}>
              Save changes
            </Button>
          </div>
        </div>
      </Modal>
    </main>
  );
}

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
