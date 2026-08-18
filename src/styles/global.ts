import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    height: 100%;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    font-family: 'IBM Plex Mono', ui-monospace, monospace;
    font-size: ${({ theme }) => theme.fs};
    line-height: 1.5;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
  }

  body {
    min-height: 100%;
  }

  a {
    color: inherit;
    cursor: pointer;
  }

  a[href] {
    cursor: pointer;
  }

  button {
    font-family: inherit;
  }

  ::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: ${({ theme }) => theme.cyan};
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;
