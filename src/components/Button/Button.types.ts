import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  variant: 'primary' | 'secondary' | 'error';
}
