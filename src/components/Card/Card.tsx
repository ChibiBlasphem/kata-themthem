import { ReactNode } from 'react';
import { CardRoot } from './Card.styles';

export interface CardProps {
  children?: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return <CardRoot className={className}>{children}</CardRoot>;
}
