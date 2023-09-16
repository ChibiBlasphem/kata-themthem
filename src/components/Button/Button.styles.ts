import { styled } from 'styled-components';
import { ButtonProps } from './Button.types';
import { cIdentifier, cVar, createGenerator } from 'themthem/component';
import { gVar } from 'themthem/global';

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

// const BUTTONS_COLORS: Record<ButtonProps['variant'], VariantColors> = {
//   primary: {
//     default: {
//       background: '#6a7fdb',
//       text: '#fff',
//     },
// RIP a11y
//     hover: {
//       background: '#5b72d7',
//       text: '#fff',
//     },
//   },
//   secondary: {
//     default: {
//       background: '#4ed7b5',
//       text: '#000',
//     },
//     hover: {
//       background: '#37d2ab',
//       text: '#fff',
//     },
//   },
//   error: {
//     default: {
//       background: '#e08dac',
//       text: '#000',
//     },
//     hover: {
//       background: '#d86f95',
//       text: '#fff',
//     },
//   },
// };

const generateButtonVars = createGenerator('Button.colors');

const generateButtonColorsVarsFromVariant = (
  variant: ButtonProps['variant']
) => {
  return generateButtonVars({
    background: {
      $default: gVar(`variants.${variant}.background`),
      $hover: gVar(`variants.${variant}.background.$hover`),
    },
    text: {
      $default: gVar(`variants.${variant}.text`),
      $hover: gVar(`variants.${variant}.text.$hover`),
    },
  });
};

export const ButtonRoot = styled.button<Pick<ButtonProps, 'variant'>>`
  display: grid;
  padding: 8px 16px;
  height: 40px;
  place-items: center;
  border: none;
  border-radius: calc(40px / 2);
  cursor: pointer;
  background-color: ${cVar('Button.colors.background')};
  color: ${cVar('Button.colors.text')};

  &:hover {
    background-color: ${cVar('Button.colors.background.$hover')};
    color: ${cVar('Button.colors.text.$hover')};
  }

  ${(props) => generateButtonColorsVarsFromVariant(props.variant)};
  // old way
  /* 
  ${(props) => [
    `${cIdentifier('Button.colors.background')}: <var>`, // --ma_var: <var>
  ]} */
`;
