import { styled } from 'styled-components';
import { Card } from '../Card/Card';

// TODO: Nice override
export const PhotoButtonCardRoot = styled(Card)`
  width: 400px;
`;

export const PhotoButtonCardImage = styled.img`
  border-radius: 4px;
`;

export const PhotoButtonCardDescription = styled.div`
  text-align: justify;
`;
