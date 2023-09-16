export type OfferItemProps = {
  isClickable?: boolean;
  isSelected: boolean;
  className?: string;
} & ({ isClickable?: true; onClick: () => void } | { isClickable: false });
