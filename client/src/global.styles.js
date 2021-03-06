import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Open Sans Condensed';
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  * {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
  }
  a {
    text-decoration: none;
    color: black;
  }
`