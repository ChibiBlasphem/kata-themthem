import { createGlobalStyle } from 'styled-components';
import { gVar, generateVars } from 'themthem/global';

const globalThemeVars = generateVars({
  palette: {
    black: '#000',
    white: '#fff',
    blue: {
      $light: '#6a7fdb',
      $dark: '#5b72d7',
    },
    green: {
      $light: '#4ed7b5',
      $dark: '#37d2ab',
    },
    red: {
      $light: '#e08dac',
      $dark: '#d86f95',
    },
  },
});

const lightColors = generateVars({
  variants: {
    primary: {
      background: {
        $default: gVar('palette.blue.$light'),
        $hover: gVar('palette.blue.$dark'),
      },
      text: {
        $default: gVar('palette.white'),
        $hover: gVar('palette.white'),
      },
    },
    secondary: {
      background: {
        $default: gVar('palette.green.$light'),
        $hover: gVar('palette.green.$dark'),
      },
      text: {
        $default: gVar('palette.black'),
        $hover: gVar('palette.white'),
      },
    },
    error: {
      background: {
        $default: gVar('palette.red.$light'),
        $hover: gVar('palette.red.$dark'),
      },
      text: {
        $default: gVar('palette.black'),
        $hover: gVar('palette.white'),
      },
    },
  },
});

const darkColors = generateVars({
  variants: {
    secondary: {
      background: {
        $default: '#00ff00',
      },
    },
  },
});

export const AppGlobalStyles = createGlobalStyle`
  :root {
    ${globalThemeVars}
    ${lightColors}
    
    @media (prefers-color-scheme: dark) {
      ${darkColors}
    }
  }
  


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
