export type OfferItemColors = {
  title: string;
  text: string;
  background: string;
  backgroundHover: string;
  border: string;
  borderHover: string;
  chip: {
    background: string;
    text: string;
  };
};

export type OfferItemProps = {
  colors: OfferItemColors;
  isClickable?: boolean;
  isSelected: boolean;
} & ({ isClickable?: true; onClick: () => void } | { isClickable: false });
