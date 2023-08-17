import { styled } from 'styled-components';
import { ButtonProps } from './Button.types';

type VariantColors = {
  default: {
    background: string;
    text: string;
  };
  hover: {
    background: string;
    text: string;
  };
};

const BUTTONS_COLORS: Record<ButtonProps['variant'], VariantColors> = {
  primary: {
    default: {
      background: '#6a7fdb',
      text: '#fff',
    },
    hover: {
      background: '#5b72d7',
      text: '#fff',
    },
  },
  secondary: {
    default: {
      background: '#4ed7b5',
      text: '#000',
    },
    hover: {
      background: '#37d2ab',
      text: '#fff',
    },
  },
  error: {
    default: {
      background: '#e08dac',
      text: '#000',
    },
    hover: {
      background: '#d86f95',
      text: '#fff',
    },
  },
};

export const ButtonRoot = styled.button<Pick<ButtonProps, 'variant'>>`
  display: grid;
  padding: 8px 16px;
  height: 40px;
  place-items: center;
  border: none;
  border-radius: calc(40px / 2);
  cursor: pointer;

  ${(props) =>
    `background-color: ${BUTTONS_COLORS[props.variant].default.background};
    color: ${BUTTONS_COLORS[props.variant].default.text};
  
    &:hover {
      background-color: ${BUTTONS_COLORS[props.variant].hover.background};
      color: ${BUTTONS_COLORS[props.variant].hover.text};
    }`}
`;
