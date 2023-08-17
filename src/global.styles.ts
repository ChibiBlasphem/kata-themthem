import { createGlobalStyle } from 'styled-components';

export const AppGlobalStyles = createGlobalStyle`
  body, input, button, select {
    font-family: 'Open Sans', sans-serif;
  }

  body {
    margin: 0;
    font-size: 14px;
  }

  p {
    margin: 0;
  }
`;
