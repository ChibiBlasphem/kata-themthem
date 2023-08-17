import { styled } from 'styled-components';
import { OfferItemProps } from './OfferItem.types';
import { Text } from '../Text/Text';
import { CheapChip } from '../CheapChip/CheapChip';

type OfferItemUiProps = Required<
  Pick<OfferItemProps, 'colors' | 'isSelected' | 'isClickable'>
>;

export const OfferItemRoot = styled.div<OfferItemUiProps>`
  position: relative;
  padding: 24px;
  border-radius: 8px;
  transition: background linear 0.3s, color linear 0.3s;
  background-color: ${(props) => props.colors.background};
  border: 1px solid ${(props) => props.colors.border};
  color: ${(props) => props.colors.text};

  ${(props) =>
    props.isClickable &&
    `
    cursor: pointer;
    &:hover {
      background-color: ${props.colors.backgroundHover};
      border: 1px solid ${props.colors.borderHover};
    }
  `}

  @media (min-width: 768px) {
    padding: 40px;
  }
`;

export const OfferItemTopWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1;
`;

export const OfferItemBottomWrapper = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: stretch;
`;

export const OfferItemDescription = styled(Text)`
  font-size: 14px;
  line-height: 21px;
  padding-top: 12px;
  flex: 1;

  @media (min-width: 768px) {
    padding-top: 16px;
  }
`;

export const OfferItemNameWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`;

export const OfferItemChip = styled(CheapChip)`
  margin: 8px 0 0;
  align-self: baseline;

  @media (min-width: 768px) {
    margin: 0 0 0 16px;
  }
`;

export const OfferItemPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 4px;
`;

export const OfferItemName = styled(Text)`
  font-size: 18px;
  line-height: 18px;
`;

export const OfferItemPriceLine = styled(Text)`
  font-size: 20px;
  line-height: 20px;
`;

export const OfferItemPriceSubline = styled(Text)`
  font-size: 14px;
  line-height: 14px;
  font-weight: 200;
`;
