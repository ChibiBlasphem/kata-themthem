import {
  OfferItemBottomWrapper,
  OfferItemChip,
  OfferItemDescription,
  OfferItemName,
  OfferItemNameWrapper,
  OfferItemPrice,
  OfferItemPriceLine,
  OfferItemPriceSubline,
  OfferItemRoot,
  OfferItemTopWrapper,
} from './OfferItem.styles';
import { OfferItemProps } from './OfferItem.types';

export function OfferItem({
  colors,
  isClickable = true,
  isSelected,
  ...restProps
}: OfferItemProps) {
  console.log(colors);
  return (
    <OfferItemRoot
      colors={colors}
      isClickable={isClickable}
      isSelected={isSelected}
      onClick={
        isClickable && 'onClick' in restProps ? restProps.onClick : undefined
      }
    >
      <OfferItemTopWrapper>
        <OfferItemNameWrapper>
          <OfferItemName color={colors.title}>Offer Title</OfferItemName>
          <OfferItemChip
            color={colors.chip.text}
            backgroundColor={colors.chip.background}
          >
            With Power Option
          </OfferItemChip>
        </OfferItemNameWrapper>
        <OfferItemPrice>
          <OfferItemPriceLine color={colors.title}>
            32,99 € / mois
          </OfferItemPriceLine>
          <OfferItemPriceSubline color={colors.title}>
            sans engagement
          </OfferItemPriceSubline>
        </OfferItemPrice>
      </OfferItemTopWrapper>
      <OfferItemBottomWrapper>
        <OfferItemDescription color={colors.text}>
          Pour travailler, créer, jouer... et tout le reste.
        </OfferItemDescription>
      </OfferItemBottomWrapper>
    </OfferItemRoot>
  );
}
