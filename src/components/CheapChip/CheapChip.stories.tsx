import type { Meta, StoryObj } from '@storybook/react';

import { CheapChip } from './CheapChip';
import { styled } from 'styled-components';
import { generateCheapChipVars } from './CheapChip.styles';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/CheapChip',
  component: CheapChip,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: { control: 'select', options: ['md', 'lg'] },
  },
} satisfies Meta<typeof CheapChip>;

export default meta;
type Story = StoryObj<typeof meta>;

const orangePurpleCheapChipVariables = generateCheapChipVars({
  background: 'orange',
  text: 'purple',
});
const CustomCheapChip = styled(CheapChip)`
  ${orangePurpleCheapChipVariables}
`;

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Chip',
  },
  render: (props) => <CustomCheapChip {...props} />,
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Chip',
  },
  render: (props) => <CustomCheapChip {...props} />,
};
