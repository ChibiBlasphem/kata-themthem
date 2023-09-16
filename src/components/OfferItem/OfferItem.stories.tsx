import type { Meta, StoryObj } from '@storybook/react';

import { OfferItem } from './OfferItem';
import { generateOfferItemVars } from './OfferItem.styles';
import styled, { css } from 'styled-components';

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
    onClick: { action: 'clicked' },
  },
  // fyi : decorators f*up the Story type, making it BaseAnnotations<ReactRenderer, never>
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

const defaultOfferItemVariables = generateOfferItemVars({
  title: '#3653cc',
  text: '#000',
  background: {
    $default: '#fff',
    $hover: '#ebeefa',
  },
  border: {
    $default: '#ebeefa',
    $hover: 'transparent',
  },
  chip: {
    background: '#3653cc',
    text: '#fff',
  },
});

const selectedOfferItemVariables = generateOfferItemVars({
  title: '#fff',
  text: '#fff',
  background: {
    $default: '#3653cc',
    $hover: '#3653cc',
  },
  border: {
    $default: 'transparent',
    $hover: 'transparent',
  },
  chip: {
    background: '#fff',
    text: '#3653cc',
  },
});

const DefaultOfferItem = styled(OfferItem)`
  ${defaultOfferItemVariables}
  ${(props) =>
    props.isSelected &&
    css`
      ${selectedOfferItemVariables}
    `};
`;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Unselected: Story = {
  args: {
    isSelected: false,
    isClickable: true,
  },
  render: (props) => <DefaultOfferItem {...props} />,
};

export const Selected: Story = {
  args: {
    isSelected: true,
    isClickable: true,
  },
  render: (props) => <DefaultOfferItem {...props} />,
};

export const BlackSelected: Story = {
  args: {
    isSelected: true,
    isClickable: true,
  },
};
