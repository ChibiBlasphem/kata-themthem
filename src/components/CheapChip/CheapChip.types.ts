import { ReactNode } from 'react';

export interface CheapChipProps {
  className?: string;
  size?: 'md' | 'lg';
  color: string;
  backgroundColor: string;
  children: ReactNode;
}
