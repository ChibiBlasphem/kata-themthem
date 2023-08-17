import { CheapChipProps } from './CheapChip.types';
import { CheapChipLabel, CheapChipRoot } from './CheapChip.styles';

export function CheapChip({
  size = 'md',
  children,
  className,
}: CheapChipProps) {
  return (
    <CheapChipRoot className={className} size={size}>
      <CheapChipLabel size={size}>{children}</CheapChipLabel>
    </CheapChipRoot>
  );
}
