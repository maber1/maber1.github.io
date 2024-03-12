import type { Preview } from "@storybook/react";
import React from "react";
import {ThemeProvider} from "../src/providers/ThemeProvider";
import '../src/styles/index.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
  (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
  )
  ],
};

export default preview;
