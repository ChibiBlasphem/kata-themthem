import React from 'react';
import type { Preview } from '@storybook/react';
import { AppGlobalStyles } from '../src/global.styles';

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <>
          <AppGlobalStyles />
          <Story />
        </>
      );
    },
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
