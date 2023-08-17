import { styled } from 'styled-components';

// TODO: Hmmm so much harcoded values :o
export const CardRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  padding: 16px;
  border-radius: 8px;
  min-width: 300px;
  max-width: 500px;

  background-color: #fff;
  border: 1px solid #eaeaea;

  &:hover {
    box-shadow: 1px 2px 16px 0 rgba(0, 0, 0, 0.08);
  }
`;
