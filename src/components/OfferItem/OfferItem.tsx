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
  isClickable = true,
  isSelected,
  className, // pour pouvoir faire styled(OfferItem)
  ...restProps
}: OfferItemProps) {
  return (
    <OfferItemRoot
      className={className}
      isClickable={isClickable}
      isSelected={isSelected}
      onClick={
        isClickable && 'onClick' in restProps ? restProps.onClick : undefined
      }
    >
      <OfferItemTopWrapper>
        <OfferItemNameWrapper>
          <OfferItemName>Offer Title</OfferItemName>
          <OfferItemChip>With Power Option</OfferItemChip>
        </OfferItemNameWrapper>
        <OfferItemPrice>
          <OfferItemPriceLine>32,99 € / mois</OfferItemPriceLine>
          <OfferItemPriceSubline>sans engagement</OfferItemPriceSubline>
        </OfferItemPrice>
      </OfferItemTopWrapper>
      <OfferItemBottomWrapper>
        <OfferItemDescription>
          Pour travailler, créer, jouer... et tout le reste.
        </OfferItemDescription>
      </OfferItemBottomWrapper>
    </OfferItemRoot>
  );
}
