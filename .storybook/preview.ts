import type { Preview, ReactRenderer } from "@storybook/react";
import '../src/main.scss'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
  ],
};

export default preview;
