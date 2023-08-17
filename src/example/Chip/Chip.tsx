import { ReactNode } from 'react';
import { styled } from 'styled-components';
import { cVar, createGenerator } from 'themthem/component';

interface ChipProps {
  children: ReactNode;
}

const ChipRoot = styled.div`
  display: inline-flex;
  padding: 4px 16px;
  border-radius: 100px;

  color: ${cVar('Chip.colors.text', 'white')};
  background-color: ${cVar('Chip.colors.background', 'black')};
`;

export const Chip = ({ children }: ChipProps) => {
  return <ChipRoot>{children}</ChipRoot>;
};

export const generateChipVars = createGenerator('Chip.colors');
