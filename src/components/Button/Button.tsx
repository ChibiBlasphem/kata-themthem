import { ButtonRoot } from './Button.styles';
import { ButtonProps } from './Button.types';

export function Button({ children, variant }: ButtonProps) {
  return <ButtonRoot variant={variant}>{children}</ButtonRoot>;
}
