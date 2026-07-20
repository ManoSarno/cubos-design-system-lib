import type { Preview } from "@storybook/react-webpack5";

import "../src/styles/tokens.css";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ["Welcome", "Components"],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
