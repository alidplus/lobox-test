import type { Preview, ReactRenderer } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";

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
    withThemeByDataAttribute<ReactRenderer>({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "light",
      attributeName: "data-mode",
    }),
  ],
};

export default preview;
