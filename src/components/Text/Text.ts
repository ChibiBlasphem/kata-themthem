import { ReactNode } from 'react';
import { styled } from 'styled-components';

export interface TextProps {
  as?: 'p' | 'span' | 'div';
  children?: ReactNode;
  color?: string;
}

export const Text = styled.p`
  color: ${(props) => props.color};
`;
