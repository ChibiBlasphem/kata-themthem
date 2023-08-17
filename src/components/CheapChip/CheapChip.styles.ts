import { styled } from 'styled-components';
import { CheapChipProps } from './CheapChip.types';
import { Text } from '../Text/Text';
import { cVar, createGenerator } from 'themthem/component';

export const generateCheapChipVars = createGenerator('CheapChip.colors');

export const CheapChipRoot = styled.div<Required<Pick<CheapChipProps, 'size'>>>`
  display: inline-flex;
  padding-inline: ${({ size }) => (size === 'md' ? '12px' : '16px')};
  align-items: center;
  border-radius: 100px;
  background-color: ${cVar('CheapChip.colors.background')};
`;

export const CheapChipLabel = styled(Text)<
  Required<Pick<CheapChipProps, 'size'>>
>`
  padding-block: ${({ size }) => (size === 'md' ? '8px' : '12px')};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${cVar('CheapChip.colors.text')};
`;
