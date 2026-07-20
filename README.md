# Cubos Design System

A growing React component library for building consistent and reusable user
interfaces. The package includes TypeScript declarations and supports both ES
modules and CommonJS.

## Requirements

- Node.js 20 or later
- React 18 or later
- React DOM 18 or later

## Installation

Install the package and its React peer dependencies:

```bash
bun add @manosarno/cubos-design-system-lib react react-dom
```

You can use `npm`, `pnpm`, or `yarn` instead of Bun.

## Theme Setup

Component styles are included in the package. Define the design tokens used by
the components in your application's global stylesheet:

```css
:root {
  --font-poppins: "Poppins", sans-serif;
  --orange-400: #fa7436;
  --blue-800: #222222;
}
```

You may override these values to match your product theme.

## Basic Usage

Import components and their types from the package root:

```tsx
import {
  Button,
  Input,
  type ButtonProps,
  type InputProps,
} from "@manosarno/cubos-design-system-lib";

export function SearchForm() {
  return (
    <form>
      <Input
        labelId="search"
        labelText="Search"
        placeholder="Search by name"
        width={320}
      />

      <Button variant="normal" colors="orange" width={160}>
        Search
      </Button>
    </form>
  );
}
```

## Components

### Button

Buttons support normal and rounded shapes with solid, neutral, and outlined
color styles.

```tsx
import { Button } from "@manosarno/cubos-design-system-lib";

<Button
  variant="rounded"
  colors="orange__outline"
  width={200}
  onClick={() => console.log("Clicked")}
>
  Continue
</Button>;
```

| Prop       | Type                                       | Required | Default   | Description                |
| ---------- | ------------------------------------------ | -------- | --------- | -------------------------- |
| `variant`  | `"normal" \| "rounded"`                    | Yes      | -         | Controls the button shape. |
| `colors`   | `"orange" \| "white" \| "orange__outline"` | Yes      | -         | Controls the visual style. |
| `width`    | `number`                                   | Yes      | -         | Button width in pixels.    |
| `height`   | `number`                                   | No       | `60`      | Button height in pixels.   |
| `children` | `ReactNode`                                | No       | `"Click"` | Button content.            |

The component also accepts shared HTML attributes such as `onClick`, `id`,
`className`, and `aria-*`.

### Input

Inputs support labels and optional icons on either side of the field.

```tsx
import { Input } from "@manosarno/cubos-design-system-lib";

<Input
  labelId="email"
  labelText="Email"
  type="email"
  placeholder="name@example.com"
  width={320}
  icon="/icons/mail.svg"
  iconPosition="left"
  handleClickIcon={() => console.log("Icon clicked")}
/>;
```

| Prop              | Type                | Required | Default  | Description                           |
| ----------------- | ------------------- | -------- | -------- | ------------------------------------- |
| `width`           | `number`            | Yes      | -        | Input width in pixels.                |
| `height`          | `number`            | No       | `60`     | Input height in pixels.               |
| `labelText`       | `string`            | No       | -        | Text displayed above the input.       |
| `labelId`         | `string`            | No       | -        | Connects the label to the input `id`. |
| `icon`            | `string`            | No       | -        | URL or data URI for the icon image.   |
| `iconPosition`    | `"left" \| "right"` | No       | `"left"` | Places the icon inside the field.     |
| `iconSize`        | `number`            | No       | `24`     | Icon width in pixels.                 |
| `handleClickIcon` | `() => void`        | No       | -        | Called when the icon is clicked.      |

The component also accepts standard HTML input attributes such as `value`,
`onChange`, `placeholder`, `disabled`, and `aria-*`.

### Chip

Use chips to display compact statuses, categories, or labels.

```tsx
import { Chip } from "@manosarno/cubos-design-system-lib";

<Chip
  title="Active"
  type="filled"
  width={120}
  color="#fa7436"
  textColor="#ffffff"
/>;
```

| Prop        | Type                     | Required | Default | Description                                                                    |
| ----------- | ------------------------ | -------- | ------- | ------------------------------------------------------------------------------ |
| `title`     | `string`                 | Yes      | -       | Text displayed inside the chip.                                                |
| `width`     | `number`                 | Yes      | -       | Chip width in pixels.                                                          |
| `type`      | `"filled" \| "outlined"` | No       | -       | Controls whether the chip has a filled background or an outline.               |
| `color`     | `string`                 | No       | -       | Background color for filled chips or border and text color for outlined chips. |
| `textColor` | `string`                 | No       | -       | Text color used by filled chips.                                               |

### Modal

The modal accepts custom content and provides cancel and confirmation actions.

```tsx
import { useState } from "react";
import { Button, Modal } from "@manosarno/cubos-design-system-lib";

export function ModalExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="normal"
        colors="orange"
        width={180}
        onClick={() => setOpen(true)}
      >
        Open modal
      </Button>

      <Modal
        open={open}
        width={480}
        height={320}
        btnConfirmText="Confirm"
        btnCancelText="Cancel"
        handleConfirm={() => setOpen(false)}
        handleCancel={() => setOpen(false)}
      >
        <h2>Review your changes</h2>
      </Modal>
    </>
  );
}
```

| Prop             | Type         | Required | Description                                     |
| ---------------- | ------------ | -------- | ----------------------------------------------- |
| `open`           | `boolean`    | Yes      | Controls whether the modal is rendered.         |
| `width`          | `number`     | Yes      | Modal width in pixels.                          |
| `height`         | `number`     | Yes      | Modal height in pixels.                         |
| `btnConfirmText` | `string`     | Yes      | Confirmation button label.                      |
| `btnCancelText`  | `string`     | Yes      | Cancel button label.                            |
| `handleConfirm`  | `() => void` | Yes      | Called when the confirmation button is clicked. |
| `handleCancel`   | `() => void` | Yes      | Called when the cancel button is clicked.       |
| `children`       | `ReactNode`  | No       | Custom modal content.                           |

### ConfirmDialog

Use a confirmation dialog before destructive or important actions. The `type`
prop selects the success or error icon.

```tsx
import { ConfirmDialog } from "@manosarno/cubos-design-system-lib";

<ConfirmDialog
  open={true}
  type="error"
  title="Delete item?"
  description="This action cannot be undone."
  btnConfirmText="Delete"
  btnCancelText="Cancel"
  handleConfirm={() => console.log("Confirmed")}
  handleCancel={() => console.log("Cancelled")}
/>;
```

| Prop             | Type                   | Required | Description                                     |
| ---------------- | ---------------------- | -------- | ----------------------------------------------- |
| `open`           | `boolean`              | Yes      | Controls whether the dialog is rendered.        |
| `type`           | `"error" \| "success"` | Yes      | Selects the feedback icon.                      |
| `title`          | `string`               | Yes      | Dialog heading.                                 |
| `description`    | `string`               | Yes      | Supporting message.                             |
| `btnConfirmText` | `string`               | Yes      | Confirmation button label.                      |
| `btnCancelText`  | `string`               | Yes      | Cancel button label.                            |
| `handleConfirm`  | `() => void`           | Yes      | Called when the confirmation button is clicked. |
| `handleCancel`   | `() => void`           | Yes      | Called when the cancel button is clicked.       |

### NotificationDialog

Notification dialogs communicate success or error states and can optionally
offer a follow-up action.

```tsx
import { NotificationDialog } from "@manosarno/cubos-design-system-lib";

<NotificationDialog
  open={true}
  type="success"
  title="Changes saved"
  description="Your settings were updated successfully."
  actionText="Go back"
  handleNextLocation={() => console.log("Navigate")}
  handleClose={() => console.log("Close")}
/>;
```

When the action is clicked, `handleNextLocation` runs first and `handleClose`
runs afterward. The action is displayed when either callback is provided.

| Prop                 | Type                   | Required | Description                                                          |
| -------------------- | ---------------------- | -------- | -------------------------------------------------------------------- |
| `open`               | `boolean`              | Yes      | Controls whether the dialog is rendered.                             |
| `type`               | `"error" \| "success"` | Yes      | Selects the feedback icon.                                           |
| `title`              | `string`               | Yes      | Dialog heading.                                                      |
| `description`        | `string`               | Yes      | Supporting message.                                                  |
| `actionText`         | `string`               | No       | Label for the optional follow-up action.                             |
| `handleClose`        | `() => void`           | No       | Called when the action should close the dialog.                      |
| `handleNextLocation` | `() => void`           | No       | Called before `handleClose` to perform navigation or another action. |

## TypeScript

All component prop types are exported from the package root:

```ts
import type {
  ButtonProps,
  ChipProps,
  ConfirmDialogProps,
  InputProps,
  ModalProps,
  NotificationDialogProps,
} from "@manosarno/cubos-design-system-lib";
```

## Local Development

Install dependencies and start the library in watch mode:

```bash
bun install
bun run dev
```

Run the interactive Storybook documentation:

```bash
bun run storybook
```

Storybook is available at [http://localhost:6006](http://localhost:6006).

## Available Scripts

| Script                    | Description                                       |
| ------------------------- | ------------------------------------------------- |
| `bun run dev`             | Build the library in watch mode.                  |
| `bun run build`           | Create the production package.                    |
| `bun run test`            | Run the test suite.                               |
| `bun run test:watch`      | Run tests in watch mode.                          |
| `bun run lint`            | Check the source code with the configured linter. |
| `bun run format`          | Format the source code.                           |
| `bun run format:check`    | Check source formatting without changing files.   |
| `bun run typecheck`       | Run TypeScript type checking.                     |
| `bun run storybook`       | Start Storybook on port 6006.                     |
| `bun run build-storybook` | Generate static Storybook files.                  |

## Package Formats

The production build includes:

- `dist/index.js` for ES modules
- `dist/index.cjs` for CommonJS
- `dist/index.d.ts` and `dist/index.d.cts` for TypeScript declarations

## License

Licensed under the [MIT License](LICENSE).
