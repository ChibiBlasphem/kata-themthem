import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface ChipProps {
  children: ReactNode;
}

const ChipRoot = styled.div`
  display: inline-flex;
  padding: 4px 16px;
  border-radius: 100px;

  color: white;
  background-color: black;
`;

export const Chip = ({ children }: ChipProps) => {
  return <ChipRoot>{children}</ChipRoot>;
};
