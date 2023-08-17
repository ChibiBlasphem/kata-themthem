import { CheapChipProps } from './CheapChip.types';
import { CheapChipLabel, CheapChipRoot } from './CheapChip.styles';

export function CheapChip({
  size = 'md',
  color,
  backgroundColor,
  children,
  className,
}: CheapChipProps) {
  return (
    <CheapChipRoot
      className={className}
      size={size}
      backgroundColor={backgroundColor}
    >
      <CheapChipLabel size={size} color={color}>
        {children}
      </CheapChipLabel>
    </CheapChipRoot>
  );
}
