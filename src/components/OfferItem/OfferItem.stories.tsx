import type { Meta, StoryObj } from '@storybook/react';

import { OfferItem } from './OfferItem';

const defaultColors = {
  title: '#3653cc',
  text: '#000',
  background: '#fff',
  backgroundHover: '#ebeefa',
  border: '#ebeefa',
  borderHover: 'transparent',
  chip: {
    background: '#3653cc',
    text: '#fff',
  },
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/OfferItem',
  component: OfferItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    colors: {
      control: 'object',
      defaultValue: defaultColors,
    },
    onClick: { action: 'clicked' },
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ width: '800px' }}>
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof OfferItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Unselected: Story = {
  args: {
    colors: defaultColors,
    isSelected: false,
    isClickable: true,
  },
};

export const Selected: Story = {
  // @ts-expect-error storybook does not understand missing props
  args: {
    colors: {
      title: '#fff',
      text: '#fff',
      background: '#3653cc',
      backgroundHover: '#3653cc',
      border: 'transparent',
      borderHover: 'transparent',
      chip: {
        background: '#fff',
        text: '#3653cc',
      },
    },
    isSelected: true,
    isClickable: true,
  },
};

export const BlackSelected: Story = {
  // @ts-expect-error storybook does not understand missing props
  args: {
    colors: {
      title: '#fff',
      text: '#fff',
      background: '#1e252b',
      backgroundHover: '#1e252b',
      border: 'transparent',
      borderHover: 'transparent',
      chip: {
        background: '#fff',
        text: '#1e252b',
      },
    },
    isSelected: true,
    isClickable: true,
  },
};
